import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../loan-list/loan.module').then((m) => m.LoanModule),
  },
  {
    path: ':id',
    loadChildren: () => import('../loan-detail/loan-detail.module').then((m) => m.LoanDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanShellRoutingModule {}
