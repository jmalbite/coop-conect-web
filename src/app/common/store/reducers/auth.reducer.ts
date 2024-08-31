import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthStateInterface } from '../state-interfaces/auth-state.interface';

export const intitalState: AuthStateInterface = {
  member: null,
  isLogin: false,
  isLoading: false,
  error: null,
  statusCode: null,
};

export const authReducers = createReducer(
  intitalState,
  on(AuthActions.loginAction, (state: AuthStateInterface) => ({
    ...state,
    isLoading: true,
  })),

  on(AuthActions.loginSuccessAction, (state: AuthStateInterface, action) => ({
    ...state,
    isLoading: false,
    isLogin: true,
    id: action.data.id,
    member: action.data,
  })),

  on(AuthActions.loginFailAction, (state: AuthStateInterface, action) => ({
    ...state,
    isLoading: false,
    isLogin: false,
    message: action.message,
    error: action.error,
    statusCode: action.statusCode,
  })),

  on(AuthActions.logoutAction, (state: AuthStateInterface) => ({
    ...state,
    isLoading: true,
  })),

  on(AuthActions.logoutSuccessAction, (state) => ({
    ...state,
    isLoading: false,
    isLogin: false,
    member: null,
  })),

  on(AuthActions.logoutFailAction, (state: AuthStateInterface, action) => ({
    ...state,
    isLoading: false,
    isLogin: true,
    error: action.error,
    message: action.message,
  })),

  //auth guard
  on(AuthActions.authMemberAction, (state: AuthStateInterface) => ({
    ...state,
    isLoading: true,
  })),

  on(
    AuthActions.authMemberSuccessAction,
    (state: AuthStateInterface, action) => ({
      ...state,
      member: action.data,
      isLoading: false,
      isLogin: true,
      error: null,
      message: null,
    }),
  ),

  on(AuthActions.authMemberFailAction, (state: AuthStateInterface, action) => ({
    ...state,
    member: null,
    isLoading: false,
    isLogin: false,
    error: action.error,
    message: action.message,
  })),
);
