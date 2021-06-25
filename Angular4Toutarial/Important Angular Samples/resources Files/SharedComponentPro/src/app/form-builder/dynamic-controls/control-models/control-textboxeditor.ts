import { ControlBase } from "./control-base";
import { ControlTypes } from '../../models/models';

export class ControlTextboxEditor extends ControlBase<string> {
  controlType = ControlTypes.TextBoxEditor;
  placeholder?: string;
  constructor(options: {} = {}) {
    super(options);
    this.placeholder = options['placeholder'] || null;

  }
}

