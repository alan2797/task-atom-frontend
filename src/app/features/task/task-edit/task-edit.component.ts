import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { TaskModel } from '../../../core/models/task.model';
import { MatButtonModule } from '@angular/material/button';
import { editTaskSchema } from './config/form-schema';
import { buildform } from '../../../shared/components/text-field/text-field.util';
import { TextFieldComponent } from '../../../shared/components/text-field/text-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkAllSubmitDirective } from '../../../shared/directives/mark-all-submit.directive';
import { FlexLayoutModule } from '../../../shared/directives/flex-layout/flex-layout.module';
import { TaskService } from '../../../core/services/task.service';
import { HandlerHttpService } from '../../../shared/utils/http-handle';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    TextFieldComponent,
    ReactiveFormsModule,
    MarkAllSubmitDirective,
    FlexLayoutModule,
  ],
  providers: [TaskService],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss',
})
export class TaskEditComponent {
  form = buildform(editTaskSchema);
  createTaskSchema = editTaskSchema;

  constructor(
    private _taskService: TaskService,
    private _handlerHttpService: HandlerHttpService,
    private dialogRef: MatDialogRef<TaskEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskModel
  ) {}

  ngOnInit(): void {
    this.form.patchValue({
      ...this.data,
    });
  }

  async onClickEdit() {
    const response = await this._handlerHttpService.handleRequest(
      () => this._taskService.edit(this.data.id, this.form.value),
      true,
      true
    );

    if (response?.data) this.dialogRef.close(true);
  }
}
