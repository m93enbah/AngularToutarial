import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assigment2Component } from './assigment2.component';

describe('Assigment2Component', () => {
  let component: Assigment2Component;
  let fixture: ComponentFixture<Assigment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assigment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assigment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
