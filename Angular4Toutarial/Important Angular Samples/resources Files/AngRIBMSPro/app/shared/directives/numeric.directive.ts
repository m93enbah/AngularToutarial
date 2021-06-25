import { Directive, ElementRef, OnInit, HostListener, Input, Self, ChangeDetectorRef } from '@angular/core';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { NgControl, NgModel } from '@angular/forms';
import { NumericPipe } from '../pipes/numeric.pipe';
import { NumberTypes } from 'src/app/models/data-models';

@Directive({
  selector: '[NumericFormat]'
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

  constructor(private elementRef: ElementRef, private ngControl: NgControl, private ngModel: NgModel,  private numericPipe: NumericPipe, private cdRef: ChangeDetectorRef) {
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

      numericValue = this.numericPipe.transform(value, this.numberType, digitInfo);
      if (!this.currencyFormat)
        numericValue = numericValue.replace(",", "");
    }
    else if (this.numberType == NumberTypes.Percentage) {
      digitInfo += this.minDecimalPoint ? this.minDecimalPoint : '0';
      digitInfo += this.maxDecimalPoint ? '-' + this.maxDecimalPoint : '-3';
      numericValue = this.numericPipe.transform(value, this.numberType, digitInfo);
    }
    else if (this.numberType == NumberTypes.Integer) {
      digitInfo += '0-0';
      numericValue = this.numericPipe.transform(value, this.numberType, digitInfo);
    }
    else
      numericValue = value;

    if (this.min && numericValue < this.min)
      numericValue = this.min;
    if (this.max && numericValue > this.max)
      numericValue = this.max;

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
