import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldErrorsComponent } from '../field-errors/field-errors.component';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FieldErrorsComponent,
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Input() props!: any;
  @Input() formControl!: FormControl;

  ngOnInit() {
    console.log('formControl recibido', this.props);
    console.log('formControl recibido', this.formControl);
  }
}
