import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape05Component } from './shape05.component';

describe('Shape05Component', () => {
  let component: Shape05Component;
  let fixture: ComponentFixture<Shape05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
