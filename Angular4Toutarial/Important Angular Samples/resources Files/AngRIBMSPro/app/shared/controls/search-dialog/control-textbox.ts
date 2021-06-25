import { ControlBase } from "./control-base";

export class ControlTextbox  extends ControlBase<string> {
    controlType = 'textbox';
    type: string;
  
    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
}
