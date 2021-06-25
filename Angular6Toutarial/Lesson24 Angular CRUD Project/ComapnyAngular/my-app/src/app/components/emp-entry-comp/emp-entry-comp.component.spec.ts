import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEntryCompComponent } from './emp-entry-comp.component';

describe('EmpEntryCompComponent', () => {
  let component: EmpEntryCompComponent;
  let fixture: ComponentFixture<EmpEntryCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpEntryCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpEntryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
