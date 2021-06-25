import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { DynamicControlService } from '../../services/dynamic-control.service';
import { ControlFileUpload } from '../control-models/control-fileupload';
import { SelectItem } from 'primeng/api';
import { BaseControlSettingsComponent,Option } from '../../models/models';


@Component({
  selector: 'sch-file-upload-settings',
  templateUrl: './file-upload-settings.component.html',
  styleUrls: ['./file-upload-settings.component.css']
})
export class FileUploadSettingsComponent  implements OnInit, BaseControlSettingsComponent {

  @Input() control:ControlFileUpload;
  widthOptions: SelectItem[] = this.dcs.getWidthOptions();


  form: FormGroup;
  options: Option[] = [];

  @Output() saveSettings = new EventEmitter<any>();


  constructor(private dcs: DynamicControlService) { }

  ngOnInit() {
   this.form = this.dcs.entityToFormGroup(this.control);
 }

  viewSettings() {
    Object.keys(this.control).forEach(prop => {
      let option: Option = new Option(prop, this.control[prop]);
      this.options.push(option)
    });
  }

  save(event: any) {
  if (this.dcs.validateControlKey(this.control.key,this.form.controls.key.value)==true ){
   this.dcs.saveControlSettingsFromFG(this.control,this.form );
   this.saveSettings.emit(this.control);
  }
  }

}
