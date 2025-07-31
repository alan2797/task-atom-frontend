import { Routes } from '@angular/router';
import { PAGE_ROUTE } from '../../shared/constants/page-routes.constant';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

export const routes: Routes = [
  {
    path: PAGE_ROUTE.TASK.LIST_ROOT,
    component: TaskListComponent,
  },
  {
    path: PAGE_ROUTE.TASK.CREATE_ROOT,
    component: TaskCreateComponent,
  },
  {
    path: PAGE_ROUTE.TASK.EDIT_ROOT,
    component: TaskEditComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
