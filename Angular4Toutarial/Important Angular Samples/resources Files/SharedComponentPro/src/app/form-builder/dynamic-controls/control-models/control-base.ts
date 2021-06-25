
import { Item, columnWidth } from '../../models/models';
import { SelectItem } from 'primeng/api';


export class ControlBase<T> {

  value: T;
  key: string;
  name: string;
  name2: string;
  order: number;
  required: boolean;
  disabled: boolean;
  icon: string;
  containerId: number;
  refControlId: number;
  controlType: number;
  notes: string;
  subControls: ControlBase<T>[];
  width: columnWidth;
  hasSubFormGroup: boolean = false;
  subFormGroupKeys: SelectItem[] = [];



  constructor(options: {

    key?: string,
    value?: T,
    name?: string,
    name2?: string,
    required?: boolean,
    disabled?: boolean
    order?: number,
    icon?: string,
    containerId?: number,
    refControlId?: number,
    notes?: string,
    controlType?: number,
    width?: columnWidth,
    hasSubFormGroup?: boolean,
    subFormGroupKeys?: SelectItem[]



  } = {}) {

    this.key = options.key || '';
    this.value = options.value;
    this.name = options.name || '';
    this.name2 = options.name2 || '';
    this.required = !! options.required ;
    this.icon=options.icon || '';
    this.order =  options.order === undefined ? 1 : +options.order;
    this.containerId =  options.containerId;
    this.refControlId = +options.refControlId;
    this.controlType = +options.controlType || 1;
    this.width =  options.width || 1;
    this.notes = options.notes || '';
    this.hasSubFormGroup = !! options.hasSubFormGroup;
    this.subFormGroupKeys = options.subFormGroupKeys || [];
    this.disabled = !! options.disabled  ;

  }
}


