import { Routes } from '@angular/router';
import { PAGE_ROUTE } from '../../shared/constants/page-routes.constant';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: PAGE_ROUTE.AUTH.LOGIN_ROOT,
        component: LoginComponent,
    },
    {
        path: '**',
        redirectTo: PAGE_ROUTE.AUTH.LOGIN_ROOT,
    },
];