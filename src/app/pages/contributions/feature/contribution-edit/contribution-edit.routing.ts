import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributionEditComponent } from './contribution-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ContributionEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributionEditRoutingModule {}
