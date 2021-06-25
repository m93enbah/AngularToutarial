import { ControlBase } from "./control-base";
import { ControlTypes  } from '../../models/models';


export class ControlFileUpload extends ControlBase<string> {
  controlType = ControlTypes.FileUpload;
  multiple?: boolean;
  fileType?: String;
  files?:  any [] ;

  constructor(options: {} = {}) {
    super(options);

    this.multiple = options['multiple'] || false;
    this.fileType = options['fileType'] || 'image/*';
     this.files    = options['files'] || [ ];
  }
}
