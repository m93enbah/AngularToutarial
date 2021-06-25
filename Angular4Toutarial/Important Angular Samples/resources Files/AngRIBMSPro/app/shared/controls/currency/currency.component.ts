import { Component, OnInit, Input, EventEmitter, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonService } from '../../../shared/services/common.service';
import { Observable } from 'rxjs';
import { debug } from 'util';
import { SelectItem } from 'primeng/api';
import { Currency } from '../../../models/data-models';
@Component({
  selector: 'ribms-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  requiredVal: Boolean;
  currencyForm: FormGroup; 
  currencies: SelectItem[];

  @Input() CurrencyState: Boolean;
  @Input() currencyObj: Currency = new Currency();

  constructor(private cs: CommonService) {}

  ngOnInit() {
    this.createCurrencyForm();
    this.fillCurrencyDropDown();
    this.setValidation();
  }

  fillCurrencyDropDown() {
    this.cs.getCurrencies().subscribe(data =>
      this.currencies = data,
      err => console.log(err)
    );
  }

  setValidation() {
    const currencyCode = this.currencyForm.get('CurrencyCode');
    const exchangeRate = this.currencyForm.get('ExrateValue');

    if (this.CurrencyState) {
      currencyCode.setValidators(Validators.required);
      exchangeRate.setValidators(Validators.required);
      this.requiredVal = true;
    }
    else {
      currencyCode.clearValidators();
      exchangeRate.clearValidators();
      this.requiredVal = false;
    }
    currencyCode.updateValueAndValidity();
    exchangeRate.updateValueAndValidity();
  }

  changeCurrency(event: any) {
    const currencyCode = event.value;
    if (currencyCode != "") {
      this.cs.getExchangeRate(currencyCode).subscribe(
        data => {
          this.currencyForm.controls.ExrateValue.setValue(data);
          this.currencyObj.CurrencyCode = currencyCode;
          this.currencyObj.ExrateValue = data as number;
        }
      );
    }
  }

  editMode(CRG_CUR_CODE:string)
  {
    if (CRG_CUR_CODE != "")
    {
      this.cs.getExchangeRate(CRG_CUR_CODE).subscribe(
        data => {
          this.currencyForm.patchValue(
            {
              CurrencyCode: CRG_CUR_CODE,
              ExrateValue: data.toString()
            });

          this.currencyObj.CurrencyCode = CRG_CUR_CODE;
          this.currencyObj.ExrateValue = data as number;
        }
      );
    }
  }

  createCurrencyForm()
  {
    this.currencyForm = this.cs.fb.group({
      CurrencyCode: [''],
      ExrateValue: ['']
    });
  }

  beginAddMode()
  {
    this.cs.resetForm(this.currencyForm);
    this.createCurrencyForm();
  } 


 
}



