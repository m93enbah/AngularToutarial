import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';


import { DynamicControlService } from '../../services/dynamic-control.service';
import { FormGroup } from '@angular/forms';

import { SelectItem } from 'primeng/api';
import { ControlDropdown } from '../control-models/control-dropdown';
import { BaseControlSettingsComponent ,Option, columnWidth, OptionSource} from '../../models/models';

@Component({
  selector: 'shc-drop-down-settings',
  templateUrl: './drop-down-settings.component.html',
  styleUrls: ['./drop-down-settings.component.css']
})
export class DropDownSettingsComponent implements OnInit, BaseControlSettingsComponent {
  @Input() control: ControlDropdown;
  form: FormGroup;
  options: Option[] = [];

  displayDialog: boolean = false;
  selectOption: any = {};
  optionSource: SelectItem[] =  this.dcs.convertEnumToOptions(OptionSource);
  widthOptions: SelectItem[] = this.dcs.convertEnumToOptions(columnWidth);

  rows: any[] = [];


  @Output() saveSettings = new EventEmitter<any>();
  constructor(private dcs: DynamicControlService ) { }




  ngOnInit() {

    this.form = this.dcs.entityToFormGroup(this.control);
    this.rows = this.dcs.getCloneArray(this.control['options']);
    this.bindEvents();
  }

  bindEvents() {
    const formCtrls = (<any>this.form).controls;
    const optionSourceChanges$ = formCtrls.optionSource.valueChanges;
     optionSourceChanges$.subscribe(change => {
       this.control.optionSource=change;
       });
  }
  viewSettings() {
    Object.keys(this.control).forEach(prop => {
      let option: Option = new Option(prop, this.control[prop]);
      this.options.push(option);
     });


  }
  save(event: any) {

  if (this.dcs.validateControlKey(this.control.key,this.form.controls.key.value)==true ){
    this.control.required = this.dcs.convertToBoolean(this.control.required);
    this.dcs.saveControlSettingsFromFG(this.control, this.form);
    this.saveSettings.emit(this.control);
    this.rows = this.dcs.getCloneArray(this.control['options']);

  }
  }


  select(event: any) {
    this.selectOption = event;
    this.displayDialog = true;
  }


  saveRow(event: any) {
    this.form.controls['options'].patchValue(event);
    this.displayDialog = false;

  }

  delete(event: any) {
    this.form.controls['options'].patchValue(event);

  }
  showOptions() {
    this.displayDialog = !this.displayDialog;
  }
  onChanges(): void {

    this.form.get('optionSource').valueChanges.subscribe(val => {
      console.log(val);
      this.control['optionSource'] = val;
    });
  }
}
