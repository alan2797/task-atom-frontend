import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FieldErrorsComponent } from '../field-errors/field-errors.component';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FieldErrorsComponent,
  ],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss',
})
export class InputSelectComponent {
  @Input() props!: any;
  @Input() formControl!: FormControl;
  ngOnInit() {
    console.log('formControl recibido', this.formControl);
  }
}
