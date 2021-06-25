import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape03Component } from './shape03.component';

describe('Shape03Component', () => {
  let component: Shape03Component;
  let fixture: ComponentFixture<Shape03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
