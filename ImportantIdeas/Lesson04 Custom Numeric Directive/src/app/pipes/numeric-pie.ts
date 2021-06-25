import { Pipe, Input, PipeTransform } from '@angular/core';
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';
import {NumberTypes} from '../Model/model';

@Pipe({
  name: 'numeric'
})
export class NumericPie implements PipeTransform {

  @Input('numeric') digitInfo: string = "1.3-3";

  constructor(private decimalPipe: DecimalPipe, private percent: PercentPipe,private cur1:CurrencyPipe) { }

  transform(value, numberType, digitInfo: string,currencyFormat:string = "") {
    if(value == undefined || value == "") { value = "0"}  
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
    // digitInfo += '0-0';
     return numericValue = this.decimalPipe.transform(value, digitInfo).replace(",", "");
    }
    else if (numberType == NumberTypes.Currency )
    {
      debugger;
      if(!value.includes('$'))
      {
        numericValue = this.cur1.transform(value,currencyFormat,true,digitInfo);
      }
      else
      {
        let cur = value.split('$');
        numericValue = this.cur1.transform(cur[1],currencyFormat,true,digitInfo);

      }
      return numericValue
    }
    else
      return numericValue = value;   
  }
//this method used to convert the Numeric format like 123,000 to 123.000
  parse(value) {
    if(value != ""){
    if (value.toString().includes(','))
      value = value.replace(",", "");

    if (value.toString().includes('%'))
      value = parseInt(value.substring(0, value.length - 1));

    return parseFloat(value);
    }
    else
    {
      return parseFloat("0.00");
    }
  }
}
