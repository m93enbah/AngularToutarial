import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape11Component } from './shape11.component';

describe('Shape11Component', () => {
  let component: Shape11Component;
  let fixture: ComponentFixture<Shape11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
