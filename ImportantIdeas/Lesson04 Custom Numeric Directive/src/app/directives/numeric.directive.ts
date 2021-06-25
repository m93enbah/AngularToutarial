import { Directive, ElementRef, OnInit, HostListener, Input, Self, ChangeDetectorRef } from '@angular/core';
import { NumberTypes } from '../Model/model';
import { NgModel, NgControl } from '@angular/forms';
import { DecimalPipe, PercentPipe,CurrencyPipe } from '@angular/common';
import { NumericPie } from '../pipes/numeric-pie';


@Directive({
  selector: '[NumFor]'
})
export class NumericDirective implements OnInit {



  private inputElement: HTMLInputElement;
  @Input() numberType;
  @Input() minDecimalPoint;
  @Input() maxDecimalPoint;
  @Input() allowNegative;
  @Input() min;
  @Input() max;
  @Input() currencyFormat;
  @Input() value;

//we using ngControl to bind the change to DOM Html element
  constructor(private elementRef: ElementRef,private ngControl: NgControl,private ngModel: NgModel,private cdRef: ChangeDetectorRef,private numerPie:NumericPie){
    this.inputElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
    if (this.ngModel.name !== null) {
      this.transform(this.ngModel.model);

      this.ngModel.update.emit(this.inputElement.value);
      this.cdRef.detectChanges();
    }
    else {
      this.transform(this.inputElement.value);
    }
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    if (value)
      this.transform(value);
  }

  @HostListener("focus", ["$event.target.value"])
  onfocus(value) {
    if (value)
      this.transform(value);
  }

  transform(value) {
    if (this.allowNegative == "false" && value < 0) {
      value = value * -1;
    }
    let digitInfo = "1.";
    let numericValue = "0";

    if (this.numberType == NumberTypes.Decimal) {
      digitInfo += this.minDecimalPoint ? this.minDecimalPoint : '0';
      digitInfo += this.maxDecimalPoint ? '-' + this.maxDecimalPoint : '-3';

     numericValue = this.numerPie.transform(value, this.numberType, digitInfo);
      if (!this.currencyFormat)
        numericValue = numericValue.replace(",", "");
    }
    else if (this.numberType == NumberTypes.Percentage) {
      digitInfo += this.minDecimalPoint ? this.minDecimalPoint : '0';
      digitInfo += this.maxDecimalPoint ? '-' + this.maxDecimalPoint : '-3';
      numericValue = this.numerPie.transform(value, this.numberType, digitInfo);
    }
    else if (this.numberType == NumberTypes.Integer) {
      digitInfo += '0-0';
     numericValue = this.numerPie.transform(value, this.numberType, digitInfo);
    }
    else if (this.numberType == NumberTypes.Currency) {
      digitInfo += this.minDecimalPoint ? this.minDecimalPoint : '0';
      digitInfo += this.maxDecimalPoint ? '-' + this.maxDecimalPoint : '-3';
      numericValue = this.numerPie.transform(value, this.numberType, digitInfo,this.currencyFormat);
    }
    else
      numericValue = value;

    if (this.min && this.numerPie.parse(numericValue) < this.min)
      numericValue = this.numerPie.transform(this.min, this.numberType, digitInfo);
    if (this.max && this.numerPie.parse(numericValue) > this.max)
      numericValue = this.numerPie.transform(this.max, this.numberType, digitInfo);
    this.ngControl.control.patchValue(numericValue);
    this.inputElement.value = numericValue;   
  }

  @HostListener('keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.numberType != undefined && this.numberType != '') {
      let regexStr = '^[0-9_\\.\\-]*$';
      return new RegExp(regexStr).test(event.key);
    }
  } 
}
