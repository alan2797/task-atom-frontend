import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from '../text-field/text-field.component';
import { TextFieldSchema } from '../text-field/text-field.interface';
import { FlexLayoutModule } from '../../directives/flex-layout/flex-layout.module';
import { MarkAllSubmitDirective } from '../../directives/mark-all-submit.directive';
import { SimpleCardComponent } from '../simple-card/simple-card.component';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    MarkAllSubmitDirective,
    ReactiveFormsModule,
    TextFieldComponent,
    FlexLayoutModule,
    SimpleCardComponent
  ],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss',
})
export class FilterBarComponent {
  @Input() textButton = 'Filtrar';
  @Input() marginButtom = '1rem';
  @Input({ required: true }) filterSchema!: TextFieldSchema;
  @Input({ required: true }) form!: FormGroup;
  @Output() filter = new EventEmitter();

  onFilter() {
    this.filter.emit(this.form.value);
  }
}
