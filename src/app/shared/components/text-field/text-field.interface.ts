import { ValidatorFn } from '@angular/forms';

export enum TextFieldType {
  TextField,
  Dropdown,
  Textarea,
  Autocomplete,
  Radio,
  DatePicker,
  File,
  DropdownMultiSearch,
}

export interface Option {
  value: string | number;
  label: string;
}

type Type =
  | 'text'
  | 'password'
  | 'time'
  | 'date'
  | 'email'
  | 'number'
  | 'file'
  | 'datetime-local';

interface Validator {
  name: string;
  validatorFn: ValidatorFn;
  message: string;
}

export interface TextFieldValue {
  name: string;
  value?: string | number | Date | string[] | number[];
  label: string;
  fieldType?: TextFieldType;
  type?: Type;
  validators?: Validator[];
  multiple?: boolean; //select
  options?: Option[] | any[]; //select | autocomplete
  getOptionLabel?: (value?: any) => string; //autocomplete
  minRows?: number;
  maxRows?: number;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  hint?: string;
  fileMultiple?: boolean;
  fileAccept?: string;
  icon?: string; //textfield normal
  df?: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
}

export type TextFieldSchema = TextFieldValue[];
