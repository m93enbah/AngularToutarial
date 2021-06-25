import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, OnDestroy, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { TextBoxComponent } from './text-box/text-box.component';
import { DropDownComponent } from './drop-down/drop-down.component';

import { FormBuilderService } from '../services/form-builder.service';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextBoxEditorComponent } from './text-box-editor/text-box-editor.component';
import { DynamicChildDirective } from '../directives/dynamic-child-directive.directive';
import { CalendarComponent } from './calendar/calendar.component';
import { ControlBase } from './control-models/control-base';
import { ComponentType, BaseControlComponent } from '../models/models';

@Component({
  selector: 'shc-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  entryComponents:[TextBoxComponent, DropDownComponent,
    RadioButtonComponent, CheckBoxComponent, FileUploadComponent,
    TextAreaComponent, TextBoxEditorComponent, CalendarComponent]
})
export class DynamicControlComponent implements OnInit , OnDestroy{
  @Input() control: ControlBase<any>;
  @Input() form: FormGroup;
  @ViewChild(DynamicChildDirective) dynHost: DynamicChildDirective;
  get isValid() { return this.form.controls[this.control.key].valid; }

  componentRef:ComponentRef<any>;

  constructor(private fbs: FormBuilderService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let componentType = this.fbs.getControlComponentType(this.control.controlType,ComponentType.Basic);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.dynHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<BaseControlComponent>this.componentRef.instance).control = this.control;
    (<BaseControlComponent>this.componentRef.instance).form = this.form;
  }

  ngOnDestroy()
  {
    this.componentRef.destroy();
  }
}
