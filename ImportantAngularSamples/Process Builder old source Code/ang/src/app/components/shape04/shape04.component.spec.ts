import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape04Component } from './shape04.component';

describe('Shape04Component', () => {
  let component: Shape04Component;
  let fixture: ComponentFixture<Shape04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
