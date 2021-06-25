import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SelectItem } from 'primeng/api';
import { ControlTextbox } from '../control-models/control-textbox';
import { DynamicControlService } from '../../services/dynamic-control.service';
import { NumberTypes, BaseControlSettingsComponent, Option, InputType } from '../../models/models';


@Component({
  selector: 'shc-text-box-settings',
  templateUrl: './text-box-settings.component.html',
  styleUrls: ['./text-box-settings.component.css']
})

export class TextBoxSettingsComponent implements OnInit, BaseControlSettingsComponent {
  @Input() control: ControlTextbox;
  @Output() saveSettings = new EventEmitter<any>();

  keys;
  form: FormGroup;
  percentage; decimal;
  options: Option[] = [];
  numberTypes = NumberTypes;
  widthOptions: SelectItem[] = this.dcs.getWidthOptions();
  //inputOptions = ['text', 'number', 'email'];


  constructor(private dcs: DynamicControlService) {
    this.keys = Object.keys(this.numberTypes).filter(Number);
    this.decimal = this.keys[1];
    this.percentage = this.keys[2];
  }

  ngOnInit() {
    this.form = this.dcs.entityToFormGroup(this.control);
    if (this.control != undefined)
      this.viewSettings();
    this.bindEvents();
  }

  bindEvents() {
    const textBoxControls = (<any>this.form).controls;
    const numberTypeChanges$ = textBoxControls.numberType.valueChanges;

    /* Number Type Change Event*/
    numberTypeChanges$.subscribe(numberTypeSelected => {
      this.control.numberType = parseInt(numberTypeSelected);
      this.inputTypeChange();
    })
  }

  save() {
    if (this.dcs.validateControlKey(this.control.key,this.form.controls.key.value)==true ){
    this.control.required = this.dcs.convertToBoolean(this.control.required);
    this.dcs.saveControlSettingsFromFG(this.control, this.form);
    this.inputTypeChange();
    this.saveSettings.emit(this.control);
    }
  }

  viewSettings() {
    Object.keys(this.control).forEach(prop => {
      let option: Option = new Option(prop, this.control[prop]);
      this.options.push(option)
    });
  }



  inputTypeChange() {
    switch (parseInt(this.control.numberType.toString())) {
      case NumberTypes.Number:
      case NumberTypes.Decimal:
      case NumberTypes.Integer:
        this.control.inputType = InputType.Number;
        break;
      case NumberTypes.Percentage:
        this.control.inputType = InputType.Text
        break;
      default:

        break;
    }
    if (this.control.currencyFormat) {
      this.control.inputType = 'text';
    }
  }
}
