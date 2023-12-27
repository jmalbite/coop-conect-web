import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanPaymentDetailComponent } from './loan-payment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoanPaymentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPaymentDetailRoutingModule {}
