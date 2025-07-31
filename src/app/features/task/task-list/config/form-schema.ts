import { Validators } from '@angular/forms';
import { TextFieldSchema, TextFieldType } from '../../../../shared/components/text-field/text-field.interface';


export const filterSchema: TextFieldSchema = [
  {
    label: 'Estado',
    name: 'estado',
    fieldType: TextFieldType.Dropdown,
    options: [
      { label: 'Pendiente', value: 'P' },
      { label: 'Completado', value: 'C' },
    ],
    df: '15%',
    xs: '100%',
    sm: '50%',
  },
];

export const createMTaskSchema: TextFieldSchema = [
  {
    label: 'Titulo',
    name: 'titulo',
    validators: [
      {
        message: 'Es requerido',
        name: 'required',
        validatorFn: Validators.required,
      },
    ],
    df: '20%',
    xs: '100%',
    sm: '50%',
  },
    {
    label: 'Descripcion',
    name: 'descripcion',
    validators: [
      {
        message: 'Es requerido',
        name: 'required',
        validatorFn: Validators.required,
      },
    ],
    df: '20%',
    xs: '100%',
    sm: '50%',
  },
  {
    label: 'Estado',
    name: 'estado',
    fieldType: TextFieldType.Dropdown,
    options: [
      { label: 'Pendiente', value: 'P' },
      { label: 'Completado', value: 'C' },
    ],
    validators: [
      {
        message: 'Es requerido',
        name: 'required',
        validatorFn: Validators.required,
      },
    ],
    df: '20%',
    xs: '100%',
    sm: '50%',
  },
];
