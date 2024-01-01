import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashBoardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [DashBoardRouting, CommonModule],
  declarations: [DashboardComponent],
})
export class DashBoardModule {}
