import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEntryCompComponent } from './employee-entry-comp.component';

describe('EmployeeEntryCompComponent', () => {
  let component: EmployeeEntryCompComponent;
  let fixture: ComponentFixture<EmployeeEntryCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEntryCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEntryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
