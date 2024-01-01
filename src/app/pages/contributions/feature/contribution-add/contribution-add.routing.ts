import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributionAddComponent } from './contribution-add.component';

const routes: Routes = [
  {
    path: '',
    component: ContributionAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributionAddRoutingModule {}
