import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape02Component } from './shape02.component';

describe('Shape02Component', () => {
  let component: Shape02Component;
  let fixture: ComponentFixture<Shape02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shape02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shape02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
