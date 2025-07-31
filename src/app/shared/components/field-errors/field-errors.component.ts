import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-field-errors',
  standalone: true,
  imports: [CommonModule, MatError, ReactiveFormsModule, FormsModule],
  templateUrl: './field-errors.component.html',
  styleUrl: './field-errors.component.scss',
})
export class FieldErrorsComponent {
  @Input() formControl!: FormControl;
  @Input() validations: any[] = [];
}
