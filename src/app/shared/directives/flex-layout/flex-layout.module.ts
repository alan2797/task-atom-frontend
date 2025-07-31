import { NgModule } from '@angular/core';
import { FxFlexDirective } from './fx-flex.directive';
import { FxLayoutDirective } from './fx-layout.directive';

@NgModule({
  declarations: [FxFlexDirective, FxLayoutDirective],
  exports: [FxFlexDirective, FxLayoutDirective],
})
export class FlexLayoutModule {}
