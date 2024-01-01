import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../contributions-list/contributions.module').then(
        (m) => m.ContributionsModule,
      ),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('../contribution-add/contribution-add.module').then(
        (m) => m.ContributionAddModule,
      ),
  },

  {
    path: ':id',
    loadChildren: () =>
      import('../contribution-detail/contribution-detail.module').then(
        (m) => m.ContributionDetailModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributionsShellRoutingModule {}
