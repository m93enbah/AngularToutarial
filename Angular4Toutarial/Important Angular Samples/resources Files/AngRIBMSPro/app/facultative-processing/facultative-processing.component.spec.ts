import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativeProcessingComponent } from './facultative-processing.component';

describe('FacultativeProcessingComponent', () => {
  let component: FacultativeProcessingComponent;
  let fixture: ComponentFixture<FacultativeProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativeProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativeProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
