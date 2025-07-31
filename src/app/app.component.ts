import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { SnackBar } from './shared/components/snackbar/snackbar.util';
import { ProgressDialog } from './shared/components/progress-dialog/progress-dialog.utils';
import { ProgressDialogComponent } from './shared/components/progress-dialog/progress-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plantilla-base';

  constructor(router: Router, snackbar: MatSnackBar) {
    SnackBar.instance = snackbar;

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart)
        ProgressDialog.show(); //RouteConfigLoadStart
      else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationError
      )
        ProgressDialog.hide(); //RouteConfigLoadEnd
    });
  }
}
