import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributionDetailRoutingModule } from './contribution-detail.routing';
import { ContributionDetailComponent } from './contribution-detail.component';

@NgModule({
  declarations: [ContributionDetailComponent],
  imports: [CommonModule, ContributionDetailRoutingModule],
})
export class ContributionDetailModule {}
