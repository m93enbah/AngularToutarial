import { ControlBase } from './control-base';
import { ControlTypes } from '../../models/models';


export class ControlTextarea extends ControlBase<string> {
  controlType = ControlTypes.TextArea;

  cols: number;
  rows: number;
  maxlength: number;
  minlength: number;
  wrap: string;
  name: string;
  placeholder: string;
  readonly: boolean; 4
  size: number;
  //multiLine: boolean;

  constructor(properties: {} = {}) {
    super(properties);

    this.rows = properties['rows'];
    this.cols = properties['cols'];
    this.maxlength = properties['maxlength'] || '';
    this.minlength = properties['minlength'] || '';

    this.wrap = properties['wrap'] || "";
    this.name = properties['name'] || "";
    this.placeholder = properties['placeholder'] || "";
    this.size = properties['size'] || 20;
    this.readonly = properties['readonly'] || false;
  }
}
