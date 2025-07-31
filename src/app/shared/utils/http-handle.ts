import { Observable, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { SnackBar } from '../components/snackbar/snackbar.util';
import { ResponseDto } from './response';
import { ProgressDialog } from '../components/progress-dialog/progress-dialog.utils';

@Injectable({
    providedIn: 'root' 
})
export class HandlerHttpService  {
    constructor() {}

    async handleRequest<T>(
        func: () => Observable<ResponseDto<T>>, 
        showMessage: boolean = false,          
        showBlocUi: boolean = false          
      ): Promise<ResponseDto<T> | null> {
        if (showBlocUi) ProgressDialog.show();
      
        try {
          const res = await lastValueFrom(func());
      
          if (showBlocUi) ProgressDialog.hide();
      
          if (showMessage && res.message) {
            SnackBar.show(res.message)
          }
      
          return res;
      
        } catch (error: any) {
            console.log(error);
          if (showBlocUi) ProgressDialog.hide();
            SnackBar.show("Ocurrio un error", {variant: 'error'})
          
          return null;
        }
      }
}
