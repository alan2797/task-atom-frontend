import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

//definir rutas
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'task',
        loadChildren: () => import('../task/task.route').then((m) => m.routes),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'task',
      },
    ],
  },
];
