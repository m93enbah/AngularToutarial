import { ControlBase  } from "./control-base";

import { ControlTypes, NumberTypes } from '../../models/models';
export class ControlTextbox extends ControlBase<string> {
  controlType = ControlTypes.TextBox;
  // type: string;
  inputType = 'text';
  placeholder: string;
  readonly: boolean;

  pattern: string;
  // size: number;
  maxlength: number;
  minlength: number;

  /* number type input attributes/properties */
  max: number;
  min: number;
  step: number;
  numberType: NumberTypes;
  allowNegative: boolean;
  minDecimalPoint: number;
  maxDecimalPoint: number;
  currencyFormat: boolean;

  constructor(options: {} = {}) {
    super(options);
    // this.type = options['type'] || '';
    this.inputType = options['inputType'] || 'text';

    this.readonly = options['readonly'] || false;
    this.placeholder = options['placeholder'] || '';

    // this.size = options['size'] || 20;
    this.minlength = options['minlength'] || '';
    this.maxlength = options['maxlength'] || '';

    if (this.inputType == 'email')
      this.pattern = options['pattern'] || '([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+';
    else {
      this.pattern = options['pattern'] || '';
    }
    //(number type only) A string value of any means that no stepping is implied
    this.step = options['step'] || '';
    this.min = options['min'] || '';
    this.max = options['max'] || '';
    this.numberType = options['numberType'] || '';
    this.allowNegative = options['allowNegative'] || false;
    this.minDecimalPoint = options['minDecimalPoint'] || '';
    this.maxDecimalPoint = options['maxDecimalPoint'] || '';
    this.currencyFormat = options['currencyFormat'] || false;

    /*(email type only) ******************************************************* */
    // this.multiple = options['multiple'] || false;
    //this.spellcheck = options['spellcheck'] || false;

  }
}
