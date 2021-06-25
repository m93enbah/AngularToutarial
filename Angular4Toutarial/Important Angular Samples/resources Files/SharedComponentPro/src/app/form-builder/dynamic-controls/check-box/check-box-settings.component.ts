import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

import { DynamicControlService } from '../../services/dynamic-control.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ControlCheckBox } from '../control-models/control-checkbox';
import { BaseControlSettingsComponent} from '../../models/models';
@Component({
  selector: 'shc-check-box-settings',
  templateUrl: './check-box-settings.component.html',
  styleUrls: ['./check-box-settings.component.css']
})
export class CheckBoxSettingsComponent
  implements OnInit, BaseControlSettingsComponent {
  @Input() control : ControlCheckBox;
  form: FormGroup;

  optionSource: SelectItem[] = this.dcs.getOptionSource();
  widthOptions: SelectItem[] = this.dcs.getWidthOptions();
  displayDialog: boolean;
  selectOption: any = {};

  @Output() saveSettings = new EventEmitter<any>();
  constructor(private dcs: DynamicControlService) { }
  rows: any[] = [];

  ngOnInit() {
    this.form = this.dcs.entityToFormGroup(this.control);
    this.rows = this.dcs.getCloneArray(this.control.subFormGroupKeys);
    this.bindEvents();

  }
  bindEvents() {
    const formCtrls = (<any>this.form).controls;
    const optionSourceChanges$ = formCtrls.optionSource.valueChanges;
     optionSourceChanges$.subscribe(change => {
       this.control.optionSource=change;
       });
  }

  save(event: any) {
  if (this.dcs.validateControlKey(this.control.key,this.form.controls.key.value)==true ){
    this.dcs.saveControlSettingsFromFG(this.control, this.form);
    this.saveSettings.emit(this.control);
    this.rows = this.dcs.getCloneArray(this.control.subFormGroupKeys);
    }
  }


  select(event: any) {
    this.selectOption = event;
    this.displayDialog = true;
  }

  saveRow(event: any) {
    this.form.controls['subFormGroupKeys'].patchValue(event);
    this.displayDialog = false;

  }

  delete(event: any) {
    this.form.controls['subFormGroupKeys'].patchValue(event);
  }
  showOptions() {
    this.displayDialog = !this.displayDialog;
  }
}
