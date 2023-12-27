import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../loan-payments-list/loan-payments.module').then((m) => m.LoanPaymentsModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../loan-payment-detail/loan-payment-detail.module').then(
        (m) => m.LoanPaymentDetailModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPaymentShellRoutingModule {}
