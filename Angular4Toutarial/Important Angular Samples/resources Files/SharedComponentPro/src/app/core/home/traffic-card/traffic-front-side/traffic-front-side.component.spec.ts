import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficFrontSideComponent } from './traffic-front-side.component';

describe('TrafficFrontSideComponent', () => {
  let component: TrafficFrontSideComponent;
  let fixture: ComponentFixture<TrafficFrontSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficFrontSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficFrontSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
