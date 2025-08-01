import { Component } from '@angular/core';
import { Breadcrumbs } from '../../../shared/components/breadcrumbs/breadcrumbs.interface';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { TitleBarComponent } from '../../../shared/components/title-bar/title-bar.component';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SimpleCardComponent } from '../../../shared/components/simple-card/simple-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from '../../../shared/components/text-field/text-field.component';
import { FlexLayoutModule } from '../../../shared/directives/flex-layout/flex-layout.module';
import { createTaskSchema } from './config/form-schema';
import { buildform } from '../../../shared/components/text-field/text-field.util';
import { MarkAllSubmitDirective } from '../../../shared/directives/mark-all-submit.directive';
import { DIALOG_CONFIG_XS } from '../../../shared/constants/dialog.constant';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../../../core/services/task.service';
import { HandlerHttpService } from '../../../shared/utils/http-handle';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [
    BreadcrumbsComponent,
    TitleBarComponent,
    MatButtonModule,
    ReactiveFormsModule,
    SimpleCardComponent,
    FormsModule,
    TextFieldComponent,
    FlexLayoutModule,
    MarkAllSubmitDirective,
  ],
  providers: [TaskService],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss',
})
export class TaskCreateComponent {
  title = 'Nueva Tarea';
  breadcrumbs: Breadcrumbs = [
    { path: '', title: 'Tarea' },
    { path: '', title: 'Nuevo' },
  ];
  form = buildform(createTaskSchema);
  createTaskSchema = createTaskSchema;

  constructor(
    private location: Location,
    private dialog: MatDialog,
    private _taskService: TaskService,
    private _handlerHttpService: HandlerHttpService
  ) {}

  goBack() {
    this.location.back();
  }

  onClickSave() {
    this.showDialogConfirm();
  }

  showDialogConfirm() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      ...DIALOG_CONFIG_XS,
      data: { message: '¿Esta seguro de realizar esta acción?' },
    });
    dialogRef.afterClosed().subscribe((isOk: boolean) => isOk && this.save());
  }

  async save() {
    const response = await this._handlerHttpService.handleRequest(
      () => this._taskService.create(this.form.value),
      true,
      true
    );

    if (response?.data) this.location.back();
  }
}
