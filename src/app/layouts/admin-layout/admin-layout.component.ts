import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { isLoginSelector } from 'src/app/common/store/selectors/auth.selectors';
import { AppStateInterface } from 'src/app/common/store/state-interfaces/app-state.interface';
import { getItemFromLocal } from 'src/app/common/utils';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  isLogin$: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<AppStateInterface>,
  ) {}

  ngOnInit() {
    this.isLogin$ = this.store.pipe(
      select(isLoginSelector),
      map((authenticated) => {
        const user = getItemFromLocal('id');
        console.log(authenticated, user);
        if (!authenticated || !user) this.router.navigate(['/login']);

        console.log(this.router);
        return true;
      }),
    );
  }
}
