import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributionAddRoutingModule } from './contribution-add.routing';
import { ContributionAddComponent } from './contribution-add.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [ContributionAddComponent],
  imports: [CommonModule, ContributionAddRoutingModule, BsDatepickerModule],
})
export class ContributionAddModule {}
