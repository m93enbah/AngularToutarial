import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { SetupPaymentGatewayComponent } from './setup-payment-gateway/setup-payment-gateway.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ManageNotificationComponent } from './manage-notification/manage-notification.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PaymentComponent,
    SetupPaymentGatewayComponent,
    PaymentMethodComponent,
    ManageNotificationComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule
  ]
})
export class PaymentModule { }
