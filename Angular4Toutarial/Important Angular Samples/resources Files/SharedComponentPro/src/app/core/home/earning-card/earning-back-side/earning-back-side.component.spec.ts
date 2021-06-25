import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningBackSideComponent } from './earning-back-side.component';

describe('EarningBackSideComponent', () => {
  let component: EarningBackSideComponent;
  let fixture: ComponentFixture<EarningBackSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningBackSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningBackSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
