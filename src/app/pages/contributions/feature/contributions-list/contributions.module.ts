import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ContributionsComponent } from './contributions.component';
import { ContributionsRoutingModule } from './contributions.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ContributionsComponent],
  imports: [
    CommonModule,
    ContributionsRoutingModule,
    BsDatepickerModule,
    BsDropdownModule,
    NgbModule,
  ],
})
export class ContributionsModule {}
