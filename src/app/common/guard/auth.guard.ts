import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import * as AuthActions from '../store/actions/auth.actions';
import {
  isLoginSelector,
  memberIdSelector,
} from '../store/selectors/auth.selectors';
import { AppStateInterface } from '../store/state-interfaces/app-state.interface';
import { getItemFromLocal } from '../utils';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  memberId: string = null;

  constructor(
    private router: Router,
    private store: Store<AppStateInterface>,
  ) {
    this.setMemberId();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    this.memberId &&
      this.store.dispatch(AuthActions.authMemberAction({ id: this.memberId }));

    return this.store.pipe(
      select(isLoginSelector),
      map((isLogin) => {
        if (isLogin || this.memberId) {
          return state.url === '/login'
            ? this.router.createUrlTree([''])
            : true;
        } else {
          return state.url === '/login'
            ? true
            : this.router.createUrlTree(['/login']);
        }
      }),
    );
  }

  /**
   * set member id
   * @returns void
   */
  private setMemberId(): void {
    const memberId$ = this.store.pipe(select(memberIdSelector));

    memberId$.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (id: string | null) => {
        id ? (this.memberId = id) : (this.memberId = getItemFromLocal('id'));
      },
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
