import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  content: number = 0;
  selected: boolean[] = [true, false, false];
  paymetnType: string;
  constructor() { }
  recivePaymentType($event) {
    this.paymetnType = $event
    this.selectContent(1);
  }
  selectContent(content: number) {
    if (content == 0) {
      this.content = 0;
      this.selected[0] = true;
      this.selected[1] = false;
      this.selected[2] = false;
    }
    else if (content == 1) {
      this.content = 1;
      this.selected[0] = false;
      this.selected[1] = true;
      this.selected[2] = false;
    }
    else if (content == 2) {
      this.content = 2;
      this.selected[0] = false;
      this.selected[1] = false;
      this.selected[2] = true;
    }
  }

  ngOnInit() {
  }

}
