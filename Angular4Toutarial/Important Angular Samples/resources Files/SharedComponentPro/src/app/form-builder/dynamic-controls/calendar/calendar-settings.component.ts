import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlCalendar, DateSelectionMode } from '../control-models/control-calendar';
import { SelectItem } from 'primeng/api';
import { DynamicControlService } from '../../services/dynamic-control.service';

@Component({
  selector: 'fb-calendar-settings',
  templateUrl: './calendar-settings.component.html',
  styleUrls: ['./calendar-settings.component.css']
})
export class CalendarSettingsComponent implements OnInit {
  @Input() control: ControlCalendar;
  @Output() saveSettings = new EventEmitter<any>();

  keys;
  form: FormGroup;
  selectionType = DateSelectionMode;
  widthOptions: SelectItem[] = this.dcs.getWidthOptions();

  constructor(private dcs: DynamicControlService) {
    this.keys = Object.keys(DateSelectionMode);
  }

  ngOnInit() {
    this.form = this.dcs.entityToFormGroup(this.control);
    this.bindEvents();
  }

  bindEvents() {
    const calendarControls = (<any>this.form).controls;
    const selectionModeChanges$ = calendarControls.selectionMode.valueChanges;

    /* Calendar Selection Mode Change Event */
    selectionModeChanges$.subscribe(selectionModeSelected => {
      this.control.selectionMode = selectionModeSelected;
    })
  }

  save() {
    if (this.dcs.validateControlKey(this.control.key,this.form.controls.key.value)==true ){
    if (!this.form.invalid) {
      this.control.required = this.dcs.convertToBoolean(this.control.required);
      this.dcs.saveControlSettingsFromFG(this.control, this.form);

      this.saveSettings.emit(this.control);
    }
  }
  }
}
