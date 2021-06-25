import { Injectable } from '@angular/core';

import { ControlDropdown } from '../dynamic-controls/control-models/control-dropdown';
import { ControlRadioButton } from '../dynamic-controls/control-models/control-radiobutton';
import { ControlCalendar } from '../dynamic-controls/control-models/control-calendar';
import { ControlFileUpload } from '../dynamic-controls/control-models/control-fileupload';
import { ControlTypes, SstContainers, SstComponents, FormContainer, SstFormControls, FormContent } from '../models/models';
import { ControlBase } from '../dynamic-controls/control-models/control-base';
import { ControlTextbox } from '../dynamic-controls/control-models/control-textbox';
import { DebugRenderer2 } from '@angular/core/src/view/services';
import { FormControl } from '@angular/forms';
import { ControlCheckBox } from '../dynamic-controls/control-models/control-checkbox';
import { ControlTextarea } from '../dynamic-controls/control-models/control-textarea';
import { ControlTextboxEditor } from '../dynamic-controls/control-models/control-textboxeditor';

@Injectable({
  providedIn: 'root'
})
export class ControlsFactoryService {

  constructor() { }
  componentId: number = 0;

  generateOptionsObject(sstFormControl: SstFormControls): any {

    let options: any = {};

    try {
      options = JSON.parse(sstFormControl.options.substring(1, sstFormControl.options.length - 1));
    } catch (e) {
      console.log('Json parsing error at control' || sstFormControl.key);
      //read basic options from sstFormControl object
      options["key"] = sstFormControl.key;
      options["value"] = sstFormControl.value;

      options["name"] = sstFormControl.name;
      options["required"] = sstFormControl.required == 1 ? true : false;
      options["order"] = sstFormControl.order;
      options["controlType"] = sstFormControl.type;

      options["hasSubFormGroup"] = sstFormControl.hasSubformControls == 1 ? true : false;
      options["disabled"] = sstFormControl.disabled == 1 ? true : false;
    }

    return options;
  }



  generateControlObject(controlType: number, option: any) {

    return new DynamicControl(controlType, option);
  }

  BuildFormBuilderContent(ComponentContent: SstContainers[]): FormContent {

    var formContainers: FormContainer[] = [];
    var formGroupControls: ControlBase<any>[] = [];
    var formContent: FormContent = new FormContent();
    ComponentContent.forEach(container => {
      this.componentId = container.componentId;
      formContainers.push(new FormContainer(container.type, container.key, []));
      container.sstFormControls.forEach(control => {
        var options = this.generateOptionsObject(control);
        var formControl = this.createFormControl(control.type, options);

        formContainers[formContainers.length - 1].formControls.push(formControl);
        formGroupControls.push(formControl);
      }
      )
    })

    formContent.formContainers = formContainers;
    formContent.formGroupControls = formGroupControls;


    console.log(formContent);
    return formContent;
  }

  createFormControl(controlType: number, opts: any): ControlBase<any> {
    var storeMatchingType: any = {};

    storeMatchingType = Store.find(store => store.controlType === controlType);

    let factory = new Factory()
    return factory.create(storeMatchingType.Type, opts);

  }


  BuildComponentContent(formContent: FormContainer[]): SstContainers[] {
    var componentContent: SstContainers[] = [];

    formContent.forEach(container => {
      console.log(container);
      let sstContainer = new SstContainers();
      let sstFormControls: SstFormControls[] = [];
      // obj.id= 1;
      sstContainer.key = container.containerHeader;
      sstContainer.type = container.containerType;
      sstContainer.creationUser = 'ADMIN';
      sstContainer.creationDate = new Date();
      sstContainer.componentId = this.componentId;

      container.formControls.forEach(control => {

        let sstFormControl = new SstFormControls();
        // put values
        sstFormControl.name = control.name;
        sstFormControl.name2 = control.name2;
        sstFormControl.options = '"' + JSON.stringify(control) + '"';
        sstFormControl.key = control.key;
        sstFormControl.width = control.width;
        sstFormControl.disabled = control.disabled == true ? 1 : 0;
        sstFormControl.required = control.required == true ? 1 : 0;
        sstFormControl.type = control.controlType;
        sstFormControl.creationUser = "ADMIN";
        sstFormControl.creationDate = new Date();
        sstFormControl.hasSubformControls = control.hasSubFormGroup == true ? 1 : 0;
        sstFormControl.value = control.value;
        sstFormControl.order = control.order;
        sstFormControls.push(sstFormControl);
        // componentContent[componentContent.length - 1].sstFormControls.push(sstFormControl);
        console.log(control);
      });
      sstContainer.sstFormControls = sstFormControls;

      console.log(sstFormControls);
      componentContent.push(sstContainer);

    });

    console.log(componentContent);
    return componentContent;
  }
}

export class Setting {
  code: string;
  value: any;
  constructor() {

  }
}

export class DynamicControl {
  storeMatchingType: any = {};
  constructor(controlType: number, opts: any) {
    this.storeMatchingType = Store.find(store => store.controlType === controlType);

    let factory = new Factory()
    return factory.create(this.storeMatchingType.Type, opts);
  }
}



export const Store:
  any = [
    { controlType: ControlTypes.TextBox, Type: ControlTextbox },
    { controlType: ControlTypes.RadioButton, Type: ControlRadioButton },
    { controlType: ControlTypes.DropDown, Type: ControlDropdown },
    { controlType: ControlTypes.Calender, Type: ControlCalendar },
    { controlType: ControlTypes.FileUpload, Type: ControlFileUpload },
    { controlType: ControlTypes.CheckBox, Type: ControlCheckBox},
    { controlType: ControlTypes.TextArea, Type: ControlTextarea},
    { controlType: ControlTypes.TextBoxEditor, Type: ControlTextboxEditor}
    ];

class Factory {
  create<T, V>(type: (new (V) => T), opt: any): T {
    return new type(opt);
  }
}


