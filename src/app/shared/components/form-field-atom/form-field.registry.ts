import { Type } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputTextareaComponent } from '../input-textarea/input-textarea.component';
import { InputSelectComponent } from '../input-select/input-select.component';

export const FIELD_COMPONENTS: Record<string, Type<any>> = {
  text: InputTextComponent,
  textarea: InputTextareaComponent,
  select: InputSelectComponent,
};
