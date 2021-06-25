import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficBackSideComponent } from './traffic-back-side.component';

describe('TrafficBackSideComponent', () => {
  let component: TrafficBackSideComponent;
  let fixture: ComponentFixture<TrafficBackSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficBackSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficBackSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
