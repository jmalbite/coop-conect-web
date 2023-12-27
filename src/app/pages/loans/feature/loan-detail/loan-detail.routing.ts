import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanDetailComponent } from './loan-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoanDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanDetailRoutingModule {}
