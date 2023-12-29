import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthApiService } from '../data-access/api/login-api.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/common/store/state-interfaces/app-state.interface';
import { isLoadingSelector } from 'src/app/common/store/selectors/auth.selector';
import * as AuthAction from '../../../common/store/actions/auth.action';
import { isLoginSelector } from '../../../common/store/selectors/auth.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthApiService],
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsusbcribe$ = new Subject<void>();

  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  ngOnInit() {
    this.checkIsLoginObserver();
  }

  login(): void {
    this.store.dispatch(
      AuthAction.loginAction({ username: 'jmalbite', password: '!@jmAlbite06?' }),
    );
  }

  private checkIsLoginObserver(): void {
    this.store.pipe(select(isLoginSelector), takeUntil(this.unsusbcribe$)).subscribe({
      next: (isLogin) => isLogin && this.router.navigate(['/dashboard']),
    });
  }

  ngOnDestroy() {
    this.unsusbcribe$.next();
    this.unsusbcribe$.complete();
  }
}
