import { Validators } from '@angular/forms';
import {
  TextFieldSchema,
  TextFieldType,
} from '../../../shared/components/text-field/text-field.interface';

export const createLoginSchema: TextFieldSchema = [
  {
    name: 'correo',
    label: 'Correo Electrónico',
    icon: 'email',
    validators: [
      {
        name: 'required',
        validatorFn: Validators.required,
        message: 'Campo requerido',
      },
      {
        name: 'email',
        validatorFn: Validators.email,
        message: 'correo no valido',
      },
    ],
    df: '100%',
    xs: '100%',
    sm: '100%',
  },
];
