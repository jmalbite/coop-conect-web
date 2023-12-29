import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../state-interfaces/app-state.interface';

export const selectFeature = (state: AppStateInterface) => state.auth;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);

export const isLoginSelector = createSelector(selectFeature, (state) => state.isLogin);

export const memberSelector = createSelector(selectFeature, (state) => state.member);

export const memberIdSelector = createSelector(selectFeature, (state) => {
  return state.member ? state.member.id : null;
});

export const roleNameSelector = createSelector(
  selectFeature,
  (state) => state.member.role.roleName,
);
