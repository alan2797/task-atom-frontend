import { Component } from '@angular/core';
import { Breadcrumbs } from '../../../shared/components/breadcrumbs/breadcrumbs.interface';
import { PAGE_ROUTE } from '../../../shared/constants/page-routes.constant';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldComponent } from '../../../shared/components/text-field/text-field.component';
import { FlexLayoutModule } from '../../../shared/directives/flex-layout/flex-layout.module';
import { createLoginSchema } from './login.form';
import { buildform } from '../../../shared/components/text-field/text-field.util';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkAllSubmitDirective } from '../../../shared/directives/mark-all-submit.directive';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { HandlerHttpService } from '../../../shared/utils/http-handle';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MarkAllSubmitDirective,
    NgOptimizedImage,
    TextFieldComponent,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  title = 'Nueva Tarea';
  breadcrumbs: Breadcrumbs = [
    { path: PAGE_ROUTE.MEETING.LIST, title: 'Tareas' },
    { path: '', title: 'Nuevo' },
  ];

  form = buildform(createLoginSchema);
  createMeetingSchema = createLoginSchema;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _handlerHttpService: HandlerHttpService,
    private _userService: UserService
  ) {}

  async existUser() {
    try {
      const response = await this._handlerHttpService.handleRequest(
        () => this._userService.existUser(this.form.value.correo),
        false,
        true
      );

      if (response && response.data) {
        if (response.data == 404) {
          this.confirmCreateUser();
        } else {
          sessionStorage.setItem('token', String(response.data));
          this.router.navigate(['home']);
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  confirmCreateUser() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '450px',
      data: {
        title: 'Confirmar Creacion de usuario',
        message: 'se creara el usuario y le redireccionara al home',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createUser();
      }
    });
  }

  async createUser() {
    const response = await this._handlerHttpService.handleRequest(
      () => this._userService.create(this.form.value),
      true,
      true
    );

    if (response && response.data) {
      sessionStorage.setItem('token', String(response.data));
      this.router.navigate(['home']);
    }
  }
}
