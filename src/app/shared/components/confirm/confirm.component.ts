import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

export type ConfirmData = {
  title?: string;
  message: string;
};

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data?: ConfirmData) {
    if (data) data.title = data.title ?? 'Confirmar';
  }
}
