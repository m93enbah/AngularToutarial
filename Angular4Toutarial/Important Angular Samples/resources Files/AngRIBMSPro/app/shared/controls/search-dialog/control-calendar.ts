import { ControlBase } from "./control-base";

export class ControlCalendar extends ControlBase<string> {
    controlType = 'calendar';
    type: string;
  
    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
}
