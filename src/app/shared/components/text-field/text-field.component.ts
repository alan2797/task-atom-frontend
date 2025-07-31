import {
  Component,
  DoCheck,
  Input,
  KeyValueChanges,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatNativeDateModule, MatOptionSelectionChange } from '@angular/material/core';
import { debounceTime, map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldType, TextFieldValue } from './text-field.interface';

@Component({
  selector: 'app-text-field[form][fieldValue]',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent implements OnInit, DoCheck {
  @Input()
  form!: FormGroup;
  @Input()
  fieldValue!: TextFieldValue;
  @Input()
  class?: string;
  TextFieldType = TextFieldType;
  filteredOptions?: Observable<any[]>; //filter autocomplete
  value = this.fieldValue?.value;
  private textFieldValueDiffer!: KeyValueDiffer<string, any>;
  searchControl = new FormControl();
  selectionMultipleValues: Record<number, number> = {};

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit(): void {
    this.textFieldValueDiffer = this.differs.find(this.fieldValue).create();
    if (this.fieldValue.fieldType == TextFieldType.File)
      this.form.addControl(
        `${this.fieldValue.name}File`,
        new FormControl()
      );
  }

  ngDoCheck(): void {
    const changes = this.textFieldValueDiffer.diff(this.fieldValue);
    if (changes) {
      this.textFieldValueChanges(changes);
    }
  }

  textFieldValueChanges(_: KeyValueChanges<string, any>) {
    if (this.fieldValue.options && !this.filteredOptions)
      this.changeValueAutocomplete(
        this.fieldValue.fieldType == TextFieldType.DropdownMultiSearch
          ? this.searchControl
          : this.control
      );
  }

  get control() {
    return this.form.get(this.fieldValue.name);
  }

  getOptionLabel(option: any) {
    return this.fieldValue.getOptionLabel
      ? this.fieldValue.getOptionLabel(option) ?? ''
      : '';
  }

  private changeValueAutocomplete(control: AbstractControl | null) {
    this.filteredOptions = control?.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      map((value) => {
        // console.log('changeValue:value', value);
        const parsedValue =
          typeof value == 'string' ? value : this.getOptionLabel(value);
        return this.filter(parsedValue);
      })
    );
  }

  private filter(value: any) {
    // console.log('filter:value', value);
    if (!this.fieldValue.options) return [];
    return this.fieldValue.options!.filter((option) => {
      return this.getOptionLabel(option)
        .toLowerCase()
        .includes(value.toLowerCase());
    });
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.value = event.option.value;
  }

  onClosed() {
    if (typeof this.control?.value == 'string')
      this.control.setValue(this.value);
  }

  clearAutocomplete(control = this.control) {
    control?.setValue('');
    this.value = '';
  }

  handleFileInputChange(files: FileList | null): void {
    if (!files) return;
    if (files.length) {
      const count = files.length > 1 ? `(+${files.length - 1} files)` : '';
      this.control?.setValue(`${files[0].name}${count}`);
      this.form.get(`${this.fieldValue.name}File`)?.setValue(files);
    } else {
      this.control?.setValue('');
    }
  }

  changeOption(event: MatOptionSelectionChange) {
    if (!event.isUserInput) return;
    // console.log('changeOption:selection multiple value:', this.control?.value);
    // console.log('event', event.source.value, event.source.selected);
    if (this.selectionMultipleValues[event.source.value])
      delete this.selectionMultipleValues[event.source.value];
    else this.selectionMultipleValues[event.source.value] = event.source.value;
    // console.log('this.selectionMultipleValues', this.selectionMultipleValues);
  }

  openChange(event: any) {
    // console.log('openChange:event', event);
    this.control?.setValue(Object.values(this.selectionMultipleValues));
    if (!event) this.searchControl.setValue('');
  }
}
