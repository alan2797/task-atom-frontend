import { Component } from '@angular/core';
import { BackdropComponent } from '../backdrop/backdrop.component';
import {
  MatProgressSpinner,
  MatSpinner,
} from '@angular/material/progress-spinner';
import { ProgressDialogService } from './progress-dialog.service';
import { ProgressDialog } from './progress-dialog.utils';

@Component({
  selector: 'app-progress-dialog',
  standalone: true,
  imports: [BackdropComponent, MatProgressSpinner],
  templateUrl: './progress-dialog.component.html',
  styles: [
    `
      .spinner-color ::ng-deep circle {
        stroke: orange;
      }
    `,
  ],
})
export class ProgressDialogComponent {
  constructor(private progressDialogService: ProgressDialogService) {
    ProgressDialog.instance = progressDialogService;
  }

  get open() {
    return this.progressDialogService.open;
  }
}
