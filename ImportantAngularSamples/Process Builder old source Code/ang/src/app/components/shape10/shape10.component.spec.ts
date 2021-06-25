import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape10Component } from './shape10.component';

describe('Shape10Component', () => {
  let component: Shape10Component;
  let fixture: ComponentFixture<Shape10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
