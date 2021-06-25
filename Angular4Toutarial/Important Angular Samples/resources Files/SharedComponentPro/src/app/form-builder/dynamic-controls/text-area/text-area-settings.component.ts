import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SelectItem } from 'primeng/api';
import { BaseControlSettingsComponent } from '../../models/models';
import { ControlTextarea } from '../control-models/control-textarea';
import { DynamicControlService } from '../../services/dynamic-control.service';

@Component({
  selector: 'shc-text-area-settings',
  templateUrl: './text-area-settings.component.html',
  styleUrls: ['./text-area-settings.component.css']
})
export class TextAreaSettingsComponent implements OnInit, BaseControlSettingsComponent {
  @Input() control: ControlTextarea;
  @Output() saveSettings = new EventEmitter<any>();

  form: FormGroup;
  widthOptions: SelectItem[] = this.dcs.getWidthOptions();

  constructor(private dcs: DynamicControlService) { }

  ngOnInit() {
    this.form = this.dcs.entityToFormGroup(this.control);
  }

  save() {
   if (this.dcs.validateControlKey(this.control.key,this.form.controls.key.value)==true ){
    this.control.required = this.dcs.convertToBoolean(this.control.required);
    this.dcs.saveControlSettingsFromFG(this.control, this.form);
    this.saveSettings.emit(this.control);
    }
  }
}
