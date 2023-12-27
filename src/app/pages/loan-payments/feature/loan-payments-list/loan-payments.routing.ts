import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanPaymentsComponent } from './loan-payments.component';

const routes: Routes = [
  {
    path: '',
    component: LoanPaymentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPaymentsRoutingModule {}
