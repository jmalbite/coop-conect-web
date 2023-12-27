import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../member-list/members.module').then((m) => m.MembersModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../member-detail/member-detail.module').then((m) => m.MemberDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberShellRoutingModule {}
