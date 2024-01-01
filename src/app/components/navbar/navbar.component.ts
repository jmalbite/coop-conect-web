import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/common/store/state-interfaces/app-state.interface';
import { Observable } from 'rxjs';
import { isLoadingSelector } from 'src/app/common/store/selectors/auth.selectors';
import { logoutAction } from 'src/app/common/store/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  focus;
  listTitles: any[];
  location: Location;

  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<AppStateInterface>,
    location: Location,
  ) {
    this.location = location;
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
