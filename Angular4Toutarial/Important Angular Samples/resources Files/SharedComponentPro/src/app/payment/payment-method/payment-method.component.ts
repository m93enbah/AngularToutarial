import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  @Input() paymentType: string;
  infoForm: FormGroup;
  carrencies: SelectItem[];
  authTypes: SelectItem[];
  submttied: boolean = false;
  constructor(private form: FormBuilder) {
    this.carrencies = [
      { label: "Select Currency", value: null },
      { label: "USD", value: 1 },
      { label: "JOD", value: 2 }
    ];
    this.authTypes = [
      { label: "Select Type", value: null },
      { label: "type 1", value: 1 },
      { label: "type 2", value: 2 }
    ]
  }

  ngOnInit() {
    this.infoForm = this.form.group({
      carrency: ['', Validators.required],
      merchantID: ['', Validators.required],
      APILoginID: ['', Validators.required],
      transKey: ['', Validators.required],
      transPassword: ['', Validators.required],
      AuthType: ['', Validators.required]
    });
  }

  onSave() {
    this.submttied = true;
    if (this.infoForm.invalid)
      return;
    alert("ok" + this.infoForm.status);
  }

}
