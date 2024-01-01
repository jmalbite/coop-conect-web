import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributionEditRoutingModule } from './contribution-edit.routing';
import { ContributionEditComponent } from './contribution-edit.component';

@NgModule({
  declarations: [ContributionEditComponent],
  imports: [CommonModule, ContributionEditRoutingModule],
})
export class ContributionEditModule {}
