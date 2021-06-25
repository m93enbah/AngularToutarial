import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape06Component } from './shape06.component';

describe('Shape06Component', () => {
  let component: Shape06Component;
  let fixture: ComponentFixture<Shape06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
