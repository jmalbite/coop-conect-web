import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/common/guard/auth.guard';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../pages/dashboard/feature/dashboard.module').then((m) => m.DashBoardModule),
  },

  {
    path: 'contributions',
    loadChildren: () =>
      import(
        '../../pages/contributions/feature/contributions-shell/contributions-shell.module'
      ).then((m) => m.ContributionsShellModule),
  },
  {
    path: 'loans',
    loadChildren: () =>
      import('../../pages/loans/feature/loan-shell/loan-shell.module').then(
        (m) => m.LoanShellModule,
      ),
  },
  {
    path: 'loan-payments',
    loadChildren: () =>
      import('../../pages/loan-payments/feature/loan-payment-shell/loan-payment-shell.module').then(
        (m) => m.LoanPaymentShellModule,
      ),
  },
  {
    path: 'members',
    loadChildren: () =>
      import('../../pages/members/feature/member-shell/member-shell.module').then(
        (m) => m.MemberShellModule,
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('../../pages/settings/feature/setting-shell/setting-shell.module').then(
        (m) => m.SettingShellModule,
      ),
  },
];
