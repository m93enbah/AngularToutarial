import { ControlBase } from "./control-base";
import { ControlTypes } from '../../models/models';


export class ControlCalendar extends ControlBase<string> {
  controlType = ControlTypes.Calender;

  minDate: Date;
  maxDate: Date;
  defaultDate: Date;

  hourFormat: string;
  dateFormat: string;
  placeholder: string;
  selectionMode: string;
  yearRange: string;

  showTime: boolean;
  timeOnly: boolean;
  showIcon: boolean;
  monthNavigator: boolean;
  yearNavigator: boolean;
  showButtonBar: boolean;
  constructor(options: {} = {}) {
    super(options);

    this.defaultDate = options['defaultDate'];
    this.selectionMode = options['selectionMode'] || DateSelectionMode.Single;
    this.placeholder = options['placeholder'] || 'dd/mm/yy';
    this.dateFormat = options['dateFormat'] || 'dd/mm/yy';
    this.minDate = options['minDate'] || '';
    this.maxDate = options['maxDate'] || '';
    this.hourFormat = options['hourFormat'] || '12';

    this.showIcon = true;
    this.showTime = options['showTime'] || false;
    this.timeOnly = options['timeOnly'] || false;
    this.showButtonBar = options['showButtonBar'] || true;
  }
}

export enum DateSelectionMode {
  Single = "single",
  Multiple = "multiple",
  Range = "range",
}
