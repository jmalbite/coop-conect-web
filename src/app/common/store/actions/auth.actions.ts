import { createAction, props } from '@ngrx/store';
import { AuthInterface, MemberInterface } from '../../interfaces';

export const loginAction = createAction(
  '[Login] login',
  props<{ username: string; password: string }>(),
);

export const loginSuccessAction = createAction(
  '[Login] login success',
  props<{ data: MemberInterface }>(),
);

export const loginFailAction = createAction(
  '[Login] login fail',
  props<{ error?: string; message?: string; statusCode?: number | string }>(),
);

//logout actions
export const logoutAction = createAction('[Navbar] logout');

export const logoutSuccessAction = createAction('[Navbar] logout success');

export const logoutFailAction = createAction(
  '[Navbar] logout fail',
  props<{ error?: string; message?: string }>(),
);

//authguard action
export const authMemberAction = createAction('[AuthGuard] get member', props<{ id: string }>());

export const authMemberSuccessAction = createAction(
  '[AuthGuard] get member SUCCESS',
  props<{ data: MemberInterface }>(),
);

export const authMemberFailAction = createAction(
  '[AuthGuard] get member FAIL',
  props<{ error?: string; message?: string }>(),
);
