import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape08Component } from './shape08.component';

describe('Shape08Component', () => {
  let component: Shape08Component;
  let fixture: ComponentFixture<Shape08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
