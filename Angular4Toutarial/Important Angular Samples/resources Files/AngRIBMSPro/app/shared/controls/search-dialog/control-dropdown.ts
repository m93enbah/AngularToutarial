import { ControlBase } from "./control-base";

export class ControlDropdown  extends ControlBase<string> {
    controlType = 'dropdown';
    options: {label: string, value: string}[] = [];
  
    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
    }
  }