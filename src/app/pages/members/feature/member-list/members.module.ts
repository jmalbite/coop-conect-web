import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members.routing';
import { MembersComponent } from './members.component';

@NgModule({
  declarations: [MembersComponent],
  imports: [CommonModule, MembersRoutingModule],
})
export class MembersModule {}
