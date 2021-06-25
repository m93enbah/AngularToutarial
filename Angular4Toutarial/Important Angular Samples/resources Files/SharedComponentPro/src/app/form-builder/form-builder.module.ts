import { NgModule } from '@angular/core';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { DynamicControlEditorComponent } from './Editors/dynamic-control-editor/dynamic-control-editor.component';
import { SettingsEditorComponent } from './Editors/settings-editor/settings-editor.component';
import { TextBoxComponent } from './dynamic-controls/text-box/text-box.component';
import { TextBoxSettingsComponent } from './dynamic-controls/text-box/text-box-settings.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DynamicChildDirective } from './directives/dynamic-child-directive.directive';
import { DynamicControlService } from './services/dynamic-control.service';
import { ControlsFactoryService } from "./services/controls-factory.service";
import { DropDownComponent } from './dynamic-controls/drop-down/drop-down.component';
import { FormBuilderService } from './services/form-builder.service';
import { RadioButtonComponent } from './dynamic-controls/radio-button/radio-button.component';
import { CheckBoxComponent } from './dynamic-controls/check-box/check-box.component';
import { FileUploadComponent } from './dynamic-controls/file-upload/file-upload.component';
import { TextAreaComponent } from './dynamic-controls/text-area/text-area.component';
import { TextBoxEditorComponent } from './dynamic-controls/text-box-editor/text-box-editor.component';

import { RadioButtonSettingsComponent } from './dynamic-controls/radio-button/radio-button-settings.component';
import { CheckBoxSettingsComponent } from './dynamic-controls/check-box/check-box-settings.component';
import { FileUploadSettingsComponent } from './dynamic-controls/file-upload/file-upload-settings.component';
import { TextAreaSettingsComponent } from './dynamic-controls/text-area/text-area-settings.component';
import { TextBoxEditorSettingsComponent } from './dynamic-controls/text-box-editor/text-box-editor-settings.component';
import { DropDownSettingsComponent } from './dynamic-controls/drop-down/drop-down-settings.component';
import { DynamicControlComponent } from './dynamic-controls/dynamic-control.component';
import { PreviewComponent } from './dynamic-controls/preview/preview.component';
import { DisableDirective } from './directives/disable.directive';
import { RequiredDirective } from './directives/required.directive';
import { NumericDirective } from './directives/numeric.directive';
import { CalendarSettingsComponent } from './dynamic-controls/calendar/calendar-settings.component';
import { SharedModule } from '../shared/shared.module';
import { CalendarComponent } from './dynamic-controls/calendar/calendar.component';
import { FormBuilder2Component } from './form-builder2/form-builder2.component';
import {ComponentsService} from './services/components.service';
import { ComponentEntryComponent } from './component-entry/component-entry.component';
 import {ContainerService} from './services/container.service';

@NgModule({
  declarations: [
    DynamicControlEditorComponent,
    SettingsEditorComponent,
    TextBoxComponent,
    TextBoxSettingsComponent,
    RadioButtonComponent,
    RadioButtonSettingsComponent,
    CheckBoxComponent,
    CheckBoxSettingsComponent,
    FileUploadComponent,
    FileUploadSettingsComponent,
    TextAreaComponent,
    TextAreaSettingsComponent,
    TextBoxEditorComponent,
    TextBoxEditorSettingsComponent,
    DropDownComponent,
    DropDownSettingsComponent,
    FormBuilderComponent,
    DynamicControlComponent,
    DynamicControlEditorComponent,
    SettingsEditorComponent,
    CalendarSettingsComponent,
    PreviewComponent,
    DynamicChildDirective,
    DisableDirective,
    RequiredDirective,
    NumericDirective,
     CalendarComponent,
    FormBuilder2Component,
    ComponentEntryComponent
],
  imports: [
    FormBuilderRoutingModule,
    SharedModule

  ],
  providers:[
    FormBuilderService,
    DynamicControlService,
    ControlsFactoryService,
    ComponentsService,
    ContainerService
  ]
})
export class FormBuilderModule {

  constructor(){
  console.log("lazy loaded");
  }
 }
