import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberDetailRoutingModule } from './member-detail.routing';
import { MemberDetailComponent } from './member-detail.component';

@NgModule({
  declarations: [MemberDetailComponent],
  imports: [CommonModule, MemberDetailRoutingModule],
})
export class MemberDetailModule {}
