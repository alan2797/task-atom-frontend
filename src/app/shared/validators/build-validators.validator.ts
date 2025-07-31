import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';

type ValidationRule = {
  name: string;
  value?: any;
  message?: string;
};

export type FieldDefinition = {
  key: string;
  validations?: ValidationRule[];
  [key: string]: any;
};

/**
 * Construye un FormGroup a partir de un array de definiciones de campos
 */
export function buildFormGroup(formDefinition: FieldDefinition[]): FormGroup {
  const group: { [key: string]: FormControl } = {};

  for (const field of formDefinition) {
    const validators: ValidatorFn[] = [];

    if (field.validations) {
      for (const rule of field.validations) {
        switch (rule.name) {
          case 'required':
            validators.push(Validators.required);
            break;
          case 'minlength':
            validators.push(Validators.minLength(rule.value));
            break;
          case 'maxlength':
            validators.push(Validators.maxLength(rule.value));
            break;
          case 'email':
            validators.push(Validators.email);
            break;
          case 'pattern':
            validators.push(Validators.pattern(rule.value));
            break;
        }
      }
    }

    group[field.key] = new FormControl('', validators);
  }

  return new FormGroup(group);
}
