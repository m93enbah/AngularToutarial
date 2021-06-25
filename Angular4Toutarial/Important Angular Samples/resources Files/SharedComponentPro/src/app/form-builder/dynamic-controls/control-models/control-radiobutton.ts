import { ControlBase } from "./control-base";
import { ControlTypes, OptionSource } from '../../models/models';


export class ControlRadioButton  extends ControlBase<string> {
  controlType = ControlTypes.RadioButton;
  options ?:  { label: string, value: string }[];
  optionSource = OptionSource;
  apiUrl?:string;
  domainId?:number;
  view?:number;
  constructor(options: {} = {}) {
   super(options);
   this.options= options['options'] || [] ;
   this.apiUrl= options['apiUrl'] || null ;
   this.domainId= options['domainId'] || null ;
   this.view= options['view'] || null ;
   this.optionSource= options['optionSource'] || null ;


      }
}
