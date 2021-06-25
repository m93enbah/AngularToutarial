import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPaymentGatewayComponent } from './setup-payment-gateway.component';

describe('SetupPaymentGatewayComponent', () => {
  let component: SetupPaymentGatewayComponent;
  let fixture: ComponentFixture<SetupPaymentGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupPaymentGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPaymentGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
