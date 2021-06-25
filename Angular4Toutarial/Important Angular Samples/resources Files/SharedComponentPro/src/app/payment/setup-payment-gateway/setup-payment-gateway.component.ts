import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setup-payment-gateway',
  templateUrl: './setup-payment-gateway.component.html',
  styleUrls: ['./setup-payment-gateway.component.css']
})
export class SetupPaymentGatewayComponent implements OnInit {
  type: string = "";
  @Output() paymentEvent = new EventEmitter<string>();
  constructor() { }

  setUp(type: string) {
    if (type == "paypal")
      this.type = "paypal";
    else if (type == "Mastercard")
      this.type = "Mastercard";
    else if (type == "visa")
      this.type = "visa";

    this.paymentEvent.emit(this.type);
  }

  ngOnInit() {
  }

}
