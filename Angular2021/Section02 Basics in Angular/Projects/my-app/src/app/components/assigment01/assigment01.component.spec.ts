import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assigment01Component } from './assigment01.component';

describe('Assigment01Component', () => {
  let component: Assigment01Component;
  let fixture: ComponentFixture<Assigment01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assigment01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assigment01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
