import { Directive, OnInit, ElementRef, Input, HostListener, OnChanges, SimpleChanges, Self } from '@angular/core';
import { DecimalPipe, PercentPipe } from '@angular/common';

import { NgControl } from '@angular/forms';
import { NumberTypes } from '../models/models';


@Directive({
  selector: '[fbNumeric]',
  providers: [DecimalPipe, PercentPipe]
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

  constructor(@Self() private ngControl: NgControl, private elementRef: ElementRef, private decimalPipe: DecimalPipe, private percentagePipe: PercentPipe) {
    this.inputElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.getNumericValue(this.inputElement.value);
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    if (value)
      this.getNumericValue(value);
  }

  @HostListener("focus", ["$event.target.value"])
  onfocus(value) {
    if (value)
      this.getNumericValue(value);
  }

  getNumericValue(value) {
    if (!this.allowNegative && value < 0) {
      value = value * -1;
    }
    let digitInfo = "1.";
    let numericValue = "0";

    if (this.numberType == NumberTypes.Decimal) {
      digitInfo += this.minDecimalPoint ? this.minDecimalPoint : '0';
      digitInfo += this.maxDecimalPoint ? '-' + this.maxDecimalPoint : '-3';
      if (value.indexOf(',') > -1) {
        let arrValue = value.split(',');
        let v = '';
        arrValue.forEach(element => {
          v += element;
        });
        value = parseFloat(v);
      }

      numericValue = this.decimalPipe.transform(value, digitInfo);
      if (!this.currencyFormat)
        numericValue = numericValue.replace(",", "");
    }

    else if (this.numberType == NumberTypes.Percentage) {
      numericValue = this.percentagePipe.transform((parseFloat(value) / 100), "1.0-5");
    }
    else if (this.numberType == NumberTypes.Integer) {
      digitInfo += '0-0';
      numericValue = this.decimalPipe.transform(value, digitInfo).replace(",", "");
    }
    else
      numericValue = value;

    if (this.min && numericValue < this.min)
      numericValue = this.min;
    if (this.max && numericValue > this.max)
      numericValue = this.max;

    this.inputElement.value = numericValue;
    this.ngControl.control.patchValue(this.inputElement.value);
  }

  @HostListener('keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.numberType != undefined && this.numberType != '') {
      let regexStr = '^[0-9_\\.\\-]*$';
      return new RegExp(regexStr).test(event.key);
    }
  }
}
