import { ControlBase } from "./control-base";
import { ControlTypes, OptionSource } from '../../models/models';


export class ControlDropdown extends ControlBase<string> {
  controlType = ControlTypes.DropDown;
  options?: { label: string, value: string }[];
  optionSource =OptionSource;
  // name?: String;
  filter?: boolean;
  filterBy?: string;
  dropdownIcon?: string;
  emptyFilterMessage?: string;
  multiSelect?: boolean;
  styleClass?: string;
  apiUrl?: string;
  domainId?: number;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    // this.name = options['name'] || null;
    this.multiSelect = options['multiSelect'] ||  false;
    this.filterBy = options['filterBy'] || 'label';
    this.filter = options['filter'] || false;
    this.styleClass = options['styleClass'] || null;
    this.apiUrl = options['apiUrl'] || null;
    this.domainId = options['domainId'] || null;
    this.optionSource= options['optionSource'] || null ;

  }
}
