import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder2Component } from './form-builder2.component';

describe('FormBuilder2Component', () => {
  let component: FormBuilder2Component;
  let fixture: ComponentFixture<FormBuilder2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilder2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
