import { Routes } from '@angular/router';
import { PAGE_ROUTE } from './shared/constants/page-routes.constant';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: PAGE_ROUTE.AUTH.ROOT,
    loadChildren: () =>
      import('./features/auth/auth.route').then((m) => m.routes),
  },
  {
    path: PAGE_ROUTE.HOME_ROOT,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/home/home.route').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: PAGE_ROUTE.AUTH.ROOT,
  },
];
