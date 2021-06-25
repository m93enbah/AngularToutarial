import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficCardHeaderComponent } from './traffic-card-header.component';

describe('TrafficCardHeaderComponent', () => {
  let component: TrafficCardHeaderComponent;
  let fixture: ComponentFixture<TrafficCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
