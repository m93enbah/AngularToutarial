import { Pipe, Input, PipeTransform } from '@angular/core';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { NumberTypes } from 'src/app/models/data-models';

@Pipe({
  name: 'numeric'
})
export class NumericPipe implements PipeTransform {
  @Input('numeric') digitInfo: string = "1.3-3";

  constructor(private decimalPipe: DecimalPipe, private percent: PercentPipe) { }

  transform(value, numberType, digitInfo: string) {
    let numericValue = "0";
    if (numberType == NumberTypes.Decimal) {

      if (value.toString().includes(',')) {
        if (value.indexOf(',') > -1) {
          let arrValue = value.split(',');
          let v = '';
          arrValue.forEach(element => {
            v += element;
          });
          value = parseFloat(v);
        }
      }
      return numericValue = this.decimalPipe.transform(value, digitInfo);
    }
    else if (numberType == NumberTypes.Percentage) {      
      return numericValue = this.percent.transform((parseFloat(value) / 100), digitInfo);
    }
    else if (numberType == NumberTypes.Integer) {
      digitInfo += '0-0';
      return numericValue = this.decimalPipe.transform(value, digitInfo).replace(",", "");
    }
    else
      return numericValue = value;   
  }

  parse(value) {
    if (value.toString().includes(','))
      value = value.replace(",", "");

    if (value.toString().includes('%'))
      value = parseInt(value.substring(0, value.length - 1));

    return parseFloat(value);
  }
}
