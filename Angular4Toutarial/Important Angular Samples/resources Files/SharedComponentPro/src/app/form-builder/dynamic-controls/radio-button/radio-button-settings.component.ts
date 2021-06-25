import {
  Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { ControlRadioButton } from '../control-models/control-radiobutton';

import { DynamicControlService } from '../../services/dynamic-control.service';
import { FormGroup } from '@angular/forms';

import { SelectItem } from 'primeng/api';
import { BaseControlSettingsComponent,Option } from '../../models/models';



@Component({
  selector: 'shc-radio-button-settings',
  templateUrl: './radio-button-settings.component.html',
  styleUrls: ['./radio-button-settings.component.css']
})
export class RadioButtonSettingsComponent
  implements OnInit, BaseControlSettingsComponent {
  @Input() control: ControlRadioButton;
  form: FormGroup;
  options: Option[] = [];
  optionSource: SelectItem[] = this.dcs.getOptionSource();
  widthOptions: SelectItem[] = this.dcs.getWidthOptions();
  displayDialog: boolean = false;
  selectOption: any = {};


  @Output() saveSettings = new EventEmitter<any>();
  constructor(private dcs: DynamicControlService, private cd: ChangeDetectorRef) { }
  rows: any[] = [];

  ngOnInit() {
    this.form = this.dcs.entityToFormGroup(this.control);
    this.rows = this.dcs.getCloneArray(this.control.options);
    this.bindEvents();
    // if (this.control != undefined)
    //   this.viewSettings();

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
      this.rows = prop == 'options' ? option.value : [];

      this.options.push(option);


    });
    console.log(this.options);

  }

  save(event: any) {
   if (this.dcs.validateControlKey(this.control.key,this.form.controls.key.value)==true ){
    this.control.required = this.dcs.convertToBoolean(this.control.required);
    this.dcs.saveControlSettingsFromFG(this.control, this.form);
    this.saveSettings.emit(this.control);
    this.rows = this.dcs.getCloneArray(this.control.options);
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


}
