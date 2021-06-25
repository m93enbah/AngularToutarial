import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape07Component } from './shape07.component';

describe('Shape07Component', () => {
  let component: Shape07Component;
  let fixture: ComponentFixture<Shape07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
