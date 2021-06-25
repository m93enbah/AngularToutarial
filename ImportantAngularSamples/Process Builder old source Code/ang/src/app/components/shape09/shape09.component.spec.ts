import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape09Component } from './shape09.component';

describe('Shape09Component', () => {
  let component: Shape09Component;
  let fixture: ComponentFixture<Shape09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
