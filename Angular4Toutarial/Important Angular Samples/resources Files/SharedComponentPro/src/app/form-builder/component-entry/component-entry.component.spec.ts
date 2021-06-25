import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEntryComponent } from './component-entry.component';

describe('ComponentEntryComponent', () => {
  let component: ComponentEntryComponent;
  let fixture: ComponentFixture<ComponentEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
