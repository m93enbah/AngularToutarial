import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape01Component } from './shape01.component';

describe('Shape01Component', () => {
  let component: Shape01Component;
  let fixture: ComponentFixture<Shape01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
