import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, take, takeUntil, tap } from 'rxjs';
import {
  isLoginSelector,
  memberIdSelector,
  memberSelector,
} from '../store/selectors/auth.selector';
import { AppStateInterface } from '../store/state-interfaces/app-state.interface';
import { getItemFromLocal } from '../utils';
import * as AuthActions from '../store/actions/auth.action';
import { MemberInterface } from '../interfaces';

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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.memberId && this.store.dispatch(AuthActions.authMemberAction({ id: this.memberId }));

    return this.store.pipe(
      select(isLoginSelector),
      tap((loggedIn) => {
        if (loggedIn) return;

        this.router.navigate(['/login']);
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
        console.log(id, '😍');
        id ? (this.memberId = id) : (this.memberId = getItemFromLocal('id'));
      },
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
