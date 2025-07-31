import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

type SnackBarData = {
  message: string;
  variant: string;
};

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent {
  icon?: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) {
    const variantsIcon: any = {
      success: 'check_circle',
      warning: 'warning',
      error: 'cancel',
      info: 'info',
      default: undefined,
    };
    this.icon = variantsIcon[data.variant || 'default'];
  }
}
