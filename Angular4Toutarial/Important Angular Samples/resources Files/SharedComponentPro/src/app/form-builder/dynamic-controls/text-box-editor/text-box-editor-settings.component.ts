import {
  Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef
} from '@angular/core';

import { DynamicControlService } from '../../services/dynamic-control.service';
import { FormGroup } from '@angular/forms';

import { SelectItem, ConfirmationService } from 'primeng/api';
import { ControlTextboxEditor } from '../control-models/control-textboxeditor';
import { BaseControlSettingsComponent, Option } from '../../models/models';


@Component({
  selector: 'shc-text-box-editor-settings',
  templateUrl: './text-box-editor-settings.component.html',
  styleUrls: ['./text-box-editor-settings.component.css']
})
export class TextBoxEditorSettingsComponent implements
  OnInit, BaseControlSettingsComponent {
  @Input()  control: ControlTextboxEditor ;
  form: FormGroup;
  options: Option[] = [];

  widthOptions: SelectItem[] = this.dcs.getWidthOptions();

  @Output() saveSettings = new EventEmitter<any>();
  constructor(private dcs: DynamicControlService) { }
  rows: any[] = [];

  ngOnInit() {
    this.form = this.dcs.entityToFormGroup(this.control);
     // if (this.control != undefined)
    //   this.viewSettings();

  }
  viewSettings() {
    Object.keys(this.control).forEach(prop => {
      let option: Option = new Option(prop, this.control[prop]);
      this.rows = prop == 'options' ? option.value : [];
      this.options.push(option);
      });
  }

  save(event: any) {
    if (this.dcs.validateControlKey(this.control.key,this.form.controls.key.value)==true ){
    this.control.required = this.dcs.convertToBoolean(this.control.required);
    this.dcs.saveControlSettingsFromFG(this.control, this.form);
    this.saveSettings.emit(this.control);
    }
  }


}
