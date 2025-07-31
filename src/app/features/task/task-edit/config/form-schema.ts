import { Validators } from '@angular/forms';
import {
  TextFieldSchema,
  TextFieldType,
} from '../../../../shared/components/text-field/text-field.interface';

export const editTaskSchema: TextFieldSchema = [
  {
    label: 'Estado',
    name: 'estado',
    fieldType: TextFieldType.Dropdown,
    options: [
      { label: 'Pendiente', value: 'Pendiente' },
      { label: 'Completado', value: 'Completado' },
    ],
    validators: [
      {
        message: 'Es requerido',
        name: 'required',
        validatorFn: Validators.required,
      },
    ],
    df: '50%',
    xs: '100%',
    sm: '50%',
  },
  {
    label: 'Tipo/Categoria',
    name: 'tipo',
    fieldType: TextFieldType.Dropdown,
    options: [
      { label: 'Practico', value: 'Practico' },
      { label: 'Trabajo', value: 'Trabajo' },
      { label: 'Proyecto', value: 'Proyecto' },
      { label: 'Informe', value: 'Informe' },
      { label: 'Laboratorio', value: 'Laboratorio' },
    ],
    validators: [
      {
        message: 'Es requerido',
        name: 'required',
        validatorFn: Validators.required,
      },
    ],
    df: '50%',
    xs: '100%',
    sm: '50%',
  },
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
    df: '50%',
    xs: '100%',
    sm: '50%',
  },
  {
    label: 'Descripcion',
    name: 'descripcion',
    fieldType: TextFieldType.Textarea,
    validators: [
      {
        message: 'Es requerido',
        name: 'required',
        validatorFn: Validators.required,
      },
    ],
    df: '50%',
    xs: '100%',
    sm: '50%',
  },
];
