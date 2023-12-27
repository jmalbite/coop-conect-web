import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanDetailRoutingModule } from './loan-detail.routing';
import { LoanDetailComponent } from './loan-detail.component';

@NgModule({
  declarations: [LoanDetailComponent],
  imports: [CommonModule, LoanDetailRoutingModule],
})
export class LoanDetailModule {}
