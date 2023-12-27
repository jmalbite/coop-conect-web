import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanPaymentDetailRoutingModule } from './loan-payment-detail.routing';
import { LoanPaymentDetailComponent } from './loan-payment-detail.component';

@NgModule({
  declarations: [LoanPaymentDetailComponent],
  imports: [CommonModule, LoanPaymentDetailRoutingModule],
})
export class LoanPaymentDetailModule {}
