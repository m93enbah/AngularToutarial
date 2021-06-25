import { Component, OnInit, EventEmitter, ViewChild, Output, Input, ComponentFactoryResolver, ChangeDetectionStrategy, OnChanges } from '@angular/core';

import { DynamicChildDirective } from '../../directives/dynamic-child-directive.directive';
import { DropDownSettingsComponent } from '../../dynamic-controls/drop-down/drop-down-settings.component';

import { FormBuilderService } from '../../services/form-builder.service';
import { RadioButtonSettingsComponent } from '../../dynamic-controls/radio-button/radio-button-settings.component';
import { CheckBoxSettingsComponent } from '../../dynamic-controls/check-box/check-box-settings.component';
import { FileUploadSettingsComponent } from '../../dynamic-controls/file-upload/file-upload-settings.component';
import { TextAreaSettingsComponent } from '../../dynamic-controls/text-area/text-area-settings.component';
import { trigger, useAnimation, transition } from '@angular/animations';
import { slideInLeft, flipInY } from 'ng-animate';
import { CalendarSettingsComponent } from '../../dynamic-controls/calendar/calendar-settings.component';
import { TextBoxEditorSettingsComponent } from '../../dynamic-controls/text-box-editor/text-box-editor-settings.component';
import { TextBoxSettingsComponent } from '../../dynamic-controls/text-box/text-box-settings.component';
import { ControlBase } from '../../dynamic-controls/control-models/control-base';
import { BaseControlSettingsComponent, ComponentType } from '../../models/models';

@Component({
  selector: 'shc-settings-editor',
  templateUrl: './settings-editor.component.html',
  entryComponents: [TextBoxSettingsComponent, DropDownSettingsComponent, RadioButtonSettingsComponent,
    CheckBoxSettingsComponent, FileUploadSettingsComponent, TextAreaSettingsComponent,
    CalendarSettingsComponent, TextBoxEditorSettingsComponent],
  styleUrls: ['./settings-editor.component.css'],
  animations: [trigger('slideInLeft', [transition('* => *', useAnimation(flipInY, {
    // Set the duration to 5seconds and delay to 2seconds
    params: { timing: 1, delay: 0 }
  }))])]
})
export class SettingsEditorComponent implements OnInit {

  @Input() control: ControlBase<any>;

  @ViewChild(DynamicChildDirective) dynHost: DynamicChildDirective;
  @Output() saveSettings = new EventEmitter<any>();
  @Output() exitSettings = new EventEmitter<any>();

  slideInLeft: any;

  constructor(private fbs: FormBuilderService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges() {
    this.slideInLeft = !this.slideInLeft;
    this.loadComponent();
  }

  ngOnInit() {
  }

  loadComponent() {
    let componentType = this.fbs.getControlComponentType(this.control.controlType, ComponentType.Setting);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.dynHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);

    (<BaseControlSettingsComponent>componentRef.instance).control = this.control;
    (<BaseControlSettingsComponent>componentRef.instance).saveSettings = this.saveSettings;
  }

  onExitSettings() {
    this.exitSettings.emit(false);

  }
}
