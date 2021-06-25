import { ControlBase } from "./control-base";
import { EventEmitter } from '@angular/core';

export class ControlAutoComplete  extends ControlBase<string> {
  controlType = 'autoComplete';
  options: { label: string, value: string }[] = [];
    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
    }




}
