import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldErrorsComponent } from '../field-errors/field-errors.component';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FieldErrorsComponent,
  ],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.scss',
})
export class InputTextareaComponent {
  @Input() props!: any;
  @Input() formControl!: FormControl;
  ngOnInit() {}
}
