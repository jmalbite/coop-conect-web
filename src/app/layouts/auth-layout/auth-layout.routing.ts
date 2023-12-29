import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const AuthLayoutRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../../pages/login/feature/login.module').then((m) => m.LoginModule),
  },
];
