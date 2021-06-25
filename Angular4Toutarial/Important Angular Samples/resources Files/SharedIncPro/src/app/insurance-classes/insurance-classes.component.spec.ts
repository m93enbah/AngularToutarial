import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceClassesComponent } from './insurance-classes.component';

describe('InsuranceClassesComponent', () => {
  let component: InsuranceClassesComponent;
  let fixture: ComponentFixture<InsuranceClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
