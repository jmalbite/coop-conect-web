import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributionsRoutingModule } from './contributions.routing';
import { ContributionsComponent } from './contributions.component';

@NgModule({
  declarations: [ContributionsComponent],
  imports: [CommonModule, ContributionsRoutingModule],
})
export class ContributionsModule {}
