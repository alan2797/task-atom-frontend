import { ProgressDialogService } from "./progress-dialog.service";


export abstract class ProgressDialog {
  static instance: ProgressDialogService;

  static show() {
    this.instance.show();
  }

  static hide() {
    this.instance.hide();
  }
}
