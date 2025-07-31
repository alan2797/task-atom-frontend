import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { FIELD_COMPONENTS } from './form-field.registry';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputTextareaComponent } from '../input-textarea/input-textarea.component';
import { InputSelectComponent } from '../input-select/input-select.component';

@Component({
  selector: 'app-form-field-atom',
  standalone: true,
  imports: [
    CommonModule,
    InputTextComponent,
    InputTextareaComponent,
    InputSelectComponent,
  ],
  templateUrl: './form-field-atom.component.html',
  styleUrl: './form-field-atom.component.scss',
})
export class FormFieldAtomComponent {
  @Input() fieldKey!: string;
  @Input() field!: any;
  @Input() control!: any;
}
