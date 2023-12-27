import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { ContributionDetailComponent } from './contribution-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ContributionDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributionDetailRoutingModule {}
