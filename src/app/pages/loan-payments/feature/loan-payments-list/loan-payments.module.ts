import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanPaymentsRoutingModule } from './loan-payments.routing';
import { LoanPaymentsComponent } from './loan-payments.component';

@NgModule({
  declarations: [LoanPaymentsComponent],
  imports: [CommonModule, LoanPaymentsRoutingModule],
})
export class LoanPaymentsModule {}
