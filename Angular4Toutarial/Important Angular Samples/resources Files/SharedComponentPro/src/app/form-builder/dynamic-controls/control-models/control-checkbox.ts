import { ControlBase } from "./control-base";
import { ControlTypes, OptionSource } from '../../models/models';

export class ControlCheckBox  extends ControlBase<string> {
  controlType = ControlTypes.CheckBox;

  options ?:  { key: string, value: string }[];
  optionSource =OptionSource ;
  apiUrl?:string;
  domainId?:number;
  view?:number;
  constructor(options: {} = {}) {
   super(options);
   this.options= options['options'] || [] ;
   this.optionSource= options['optionSource'] || null ;
   this.apiUrl= options['apiUrl'] || null ;
   this.domainId= options['domainId'] || null ;
   this.view= options['view'] || 1;
      }
}


