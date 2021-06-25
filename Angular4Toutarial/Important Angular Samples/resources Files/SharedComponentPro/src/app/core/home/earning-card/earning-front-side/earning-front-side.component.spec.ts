import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningFrontSideComponent } from './earning-front-side.component';

describe('EarningFrontSideComponent', () => {
  let component: EarningFrontSideComponent;
  let fixture: ComponentFixture<EarningFrontSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningFrontSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningFrontSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
