import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

type Config = {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
};

export abstract class SnackBar {
  static instance: MatSnackBar;

  static show(message: string, config: Config = {}) {
    const variantsClass = {
      success: 'snackbar-bg-success',
      warning: 'snackbar-bg-warning',
      error: 'snackbar-bg-error',
      info: 'snackbar-bg-info',
      default: 'snackbar-bg-default',
    };
    const variantClass = variantsClass[config.variant ?? 'default'];

    this.instance.openFromComponent(SnackbarComponent, {
      data: {
        message,
        variant: config.variant,
      },
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-bg', variantClass],
    });
  }
}
