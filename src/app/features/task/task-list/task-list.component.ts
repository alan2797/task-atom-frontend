import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { TitleBarComponent } from '../../../shared/components/title-bar/title-bar.component';
import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Breadcrumbs } from '../../../shared/components/breadcrumbs/breadcrumbs.interface';
import { PAGE_ROUTE } from '../../../shared/constants/page-routes.constant';
import { taskColumns } from './config/table-columns';
import { TaskModel } from '../../../core/models/task.model';
import { buildform } from '../../../shared/components/text-field/text-field.util';
import { filterSchema } from './config/form-schema';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import {
  DIALOG_CONFIG_SM,
  DIALOG_CONFIG_XS,
} from '../../../shared/constants/dialog.constant';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../../../core/services/task.service';
import { CustomColumnDirective } from '../../../shared/directives/custom-column.directive';
import { MatChipsModule } from '@angular/material/chips';
import { HandlerHttpService } from '../../../shared/utils/http-handle';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    BreadcrumbsComponent,
    TitleBarComponent,
    DataTableComponent,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CustomColumnDirective,
    MatChipsModule,
  ],
  providers: [TaskService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  title = 'Tareas';
  breadcrumbs: Breadcrumbs = [{ path: '', title: 'Tareas' }];
  pageRoute = PAGE_ROUTE;
  taskColumns = taskColumns;
  tasks?: TaskModel[];
  form = buildform(filterSchema);
  filterSchema = filterSchema;

  constructor(
    private dialog: MatDialog,
    private _taskService: TaskService,
    private _handlerHttpService: HandlerHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  async getTask() {
    const response = await this._handlerHttpService.handleRequest(() =>
      this._taskService.getAll()
    );

    if (response) {
      this.tasks = response.data;
    }
  }

  goEdit(value: TaskModel) {
    const dialogRef = this.dialog.open(TaskEditComponent, {
      ...DIALOG_CONFIG_SM,
      data: value,
    });
    dialogRef.afterClosed().subscribe((isOk: boolean) => {
      if (isOk) {
        this.tasks = undefined;
        this.getTask();
      }
    });
  }

  showDialogConfirm(value: TaskModel) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      ...DIALOG_CONFIG_XS,
      data: { message: '¿Esta seguro de realizar esta acción?' },
    });
    dialogRef.afterClosed().subscribe((isOk) => isOk && this.remove(value));
  }

  async remove(value: TaskModel) {
    const response = await this._handlerHttpService.handleRequest(
      () => this._taskService.remove(value.id),
      true,
      true
    );

    if (response && response.data) {
      this.tasks = undefined;
      this.getTask();
    }
  }

  refresh() {
    this.tasks = undefined;
    setTimeout(() => {
      this.getTask();
    }, 1000);
  }
}
