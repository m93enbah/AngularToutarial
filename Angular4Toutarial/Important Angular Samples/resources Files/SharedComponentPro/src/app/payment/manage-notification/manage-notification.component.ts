import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-notification',
  templateUrl: './manage-notification.component.html',
  styleUrls: ['./manage-notification.component.css']
})
export class ManageNotificationComponent implements OnInit {
  checked: boolean = true;
  manageForm: FormGroup;
  @Input() paymentType: string;

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.manageForm = this.form.group({
      paymentSuccess: [true],
      CancelRecurring: [true],
      paymentExpired: [true],
      cardToExpire: [true],
      cardExpired: [true],
      paymentRenewal: [true],
      paymentFailure: [true]
    });
  }
  onSave() {
      }

}
