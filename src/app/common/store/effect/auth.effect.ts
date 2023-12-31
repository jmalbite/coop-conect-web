import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { AuthApiService } from 'src/app/pages/login/data-access/api/login-api.service';
import { AuthInterface, MemberInterface } from '../../interfaces';
import * as AuthActions from '../actions/auth.action';
import { MemberApiService } from '../../apis/member-api.service';
import { removeFromLocal, storeLocal } from '../../utils';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginAction),
      exhaustMap((action) =>
        this.auth.login({ username: action.username, password: action.password }).pipe(
          switchMap((result: AuthInterface) => {
            return this.member.getMemberById(result.id).pipe(
              map((data: MemberInterface) => {
                storeLocal('id', data.id);

                this.router.navigate(['']);
                return AuthActions.loginSuccessAction({ data });
              }),
            );
          }),
          catchError(({ error }: HttpErrorResponse) =>
            of(
              AuthActions.loginFailAction({
                error: error?.error,
                message: error?.message,
                statusCode: error?.statusCode,
              }),
            ),
          ),
        ),
      ),
    ),
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logoutAction),
      exhaustMap((action) =>
        this.auth.logout().pipe(
          map((result) => {
            removeFromLocal('id');
            this.router.navigate(['/login']);
            return AuthActions.logoutSuccessAction();
          }),
          catchError(({ error }: HttpErrorResponse) =>
            of(AuthActions.logoutFailAction({ error: error?.error, message: error?.message })),
          ),
        ),
      ),
    ),
  );

  member$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authMemberAction),
      exhaustMap((action) =>
        this.member.getMemberById(action.id).pipe(
          map((data) => AuthActions.authMemberSuccessAction({ data })),
          catchError(({ error }: HttpErrorResponse) => {
            removeFromLocal('id');
            return of(
              AuthActions.authMemberFailAction({ error: error?.error, message: error?.message }),
            );
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private auth: AuthApiService,
    private member: MemberApiService,
    private router: Router,
  ) {}
}
