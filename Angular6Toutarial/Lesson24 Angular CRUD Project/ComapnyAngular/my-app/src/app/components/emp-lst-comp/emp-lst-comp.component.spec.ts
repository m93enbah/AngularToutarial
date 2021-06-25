import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLstCompComponent } from './emp-lst-comp.component';

describe('EmpLstCompComponent', () => {
  let component: EmpLstCompComponent;
  let fixture: ComponentFixture<EmpLstCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpLstCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpLstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
