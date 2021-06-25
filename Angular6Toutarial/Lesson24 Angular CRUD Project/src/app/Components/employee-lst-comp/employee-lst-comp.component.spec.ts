import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLstCompComponent } from './employee-lst-comp.component';

describe('EmployeeLstCompComponent', () => {
  let component: EmployeeLstCompComponent;
  let fixture: ComponentFixture<EmployeeLstCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLstCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
