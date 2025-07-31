import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAtomComponent } from './form-field-atom.component';

describe('FormFieldAtomComponent', () => {
  let component: FormFieldAtomComponent;
  let fixture: ComponentFixture<FormFieldAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldAtomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
