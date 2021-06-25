import { Injectable } from '@angular/core';
import { TextBoxComponent } from '../dynamic-controls/text-box/text-box.component';
import { TextBoxSettingsComponent } from '../dynamic-controls/text-box/text-box-settings.component';
import { DropDownComponent } from '../dynamic-controls/drop-down/drop-down.component';
import { DropDownSettingsComponent } from '../dynamic-controls/drop-down/drop-down-settings.component';
import { Type } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ControlCalendar } from '../dynamic-controls/control-models/control-calendar';
import { ControlTextbox } from '../dynamic-controls/control-models/control-textbox';

import { RadioButtonComponent } from '../dynamic-controls/radio-button/radio-button.component';
import { RadioButtonSettingsComponent } from '../dynamic-controls/radio-button/radio-button-settings.component';
import { ControlRadioButton } from '../dynamic-controls/control-models/control-radiobutton';
import { CheckBoxComponent } from '../dynamic-controls/check-box/check-box.component';
import { CheckBoxSettingsComponent } from '../dynamic-controls/check-box/check-box-settings.component';
import { ControlCheckBox } from '../dynamic-controls/control-models/control-checkbox';
import { FileUploadComponent } from '../dynamic-controls/file-upload/file-upload.component';
import { FileUploadSettingsComponent } from '../dynamic-controls/file-upload/file-upload-settings.component';
import { ControlFileUpload } from '../dynamic-controls/control-models/control-fileupload';
import { TextAreaSettingsComponent } from '../dynamic-controls/text-area/text-area-settings.component';
import { TextAreaComponent } from '../dynamic-controls/text-area/text-area.component';
import { ControlTextarea } from '../dynamic-controls/control-models/control-textarea';
import { CalendarComponent } from '../dynamic-controls/calendar/calendar.component';
import { CalendarSettingsComponent } from '../dynamic-controls/calendar/calendar-settings.component';
import { TextBoxEditorComponent } from '../dynamic-controls/text-box-editor/text-box-editor.component';
import { ControlTextboxEditor } from '../dynamic-controls/control-models/control-textboxeditor';
import { TextBoxEditorSettingsComponent } from '../dynamic-controls/text-box-editor/text-box-editor-settings.component';
import { ControlsFactoryService, DynamicControl } from './controls-factory.service';
import { ControlTypes, FormContainer, ComponentType, SstComponents, ContinerSearchCriteria, FormContent, ControlItem, NumberTypes, InputOptions, InputType } from '../models/models';
import { ControlBase } from '../dynamic-controls/control-models/control-base';
import { ComponentsService, ComponentSearchCriteria } from './components.service';
import { ControlDropdown } from '../dynamic-controls/control-models/control-dropdown';

import { Observable } from 'rxjs';
import { ContainerService } from './container.service';
import { finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private factoryService: ControlsFactoryService, private containerService: ContainerService, private componentService: ComponentsService) { }

  getAvailableControls(): ControlItem[] {
    return [

      { name: "Text Box", controlType: ControlTypes.TextBox, subControlType: InputOptions.Text, icon: "fa fa-text-width" },

      { name: "Numeric Box", controlType: ControlTypes.TextBox, subControlType: InputOptions.Number, icon: "fa fa-sort-numeric-asc" },

      { name: "Email", controlType: ControlTypes.TextBox, subControlType: InputOptions.Email, icon: "fa fa-envelope" },

      { name: "Text Editor", controlType: ControlTypes.TextBoxEditor, subControlType: null, icon: "fa fa-chain-broken" },

      { name: "Text Area", controlType: ControlTypes.TextArea, subControlType: null, icon: "fa fa-text-width" },

      { name: "Calendar", controlType: ControlTypes.Calender, subControlType: null, icon: "fa fa-calendar" },

      { name: "Drop Down", controlType: ControlTypes.DropDown, subControlType: null, icon: "fa fa-caret-down" },

      { name: "Radio Button", controlType: ControlTypes.RadioButton, subControlType: null, icon: "fa fa-check-circle" },

      { name: "Check Box", controlType: ControlTypes.CheckBox, subControlType: null, icon: "fa fa-check-square-o" },

      { name: "Upload", controlType: ControlTypes.FileUpload, subControlType: null, icon: "fa fa-upload" },

      { name: "Panel", controlType: ControlTypes.FieldSet, subControlType: null, icon: "	glyphicon glyphicon-list-alt" },

      { name: "Row", controlType: ControlTypes.Row, subControlType: null, icon: "glyphicon glyphicon-align-justify " }
    ];
  }

  generateContainerHeader(formContent: FormContainer[], containerType: number): string {

    var contentByControlType = formContent.filter(container => container.containerType == containerType);
    var intialHeader = (containerType == 1 ? "Row " : "Panel Header ");
    var lastContainerHeader = contentByControlType.length > 0 ? contentByControlType[contentByControlType.length - 1].containerHeader : '0';
    var containerHeader = intialHeader + (Number(lastContainerHeader.replace(/[^0-9]/g, '')) + 1);
    return containerHeader;
  }

  getControlComponentType(controlType: number, componentType: number): Type<any> {


    switch (controlType) {
      case ControlTypes.TextBox: //textbox
        {
          return componentType == ComponentType.Basic ? TextBoxComponent : TextBoxSettingsComponent;
        }

      case ControlTypes.TextArea: //textbox
        {
          return componentType == ComponentType.Basic ? TextAreaComponent : TextAreaSettingsComponent;
        }

      case ControlTypes.TextBoxEditor: //TextBoxEditor
        {
          return componentType == ComponentType.Basic ? TextBoxEditorComponent : TextBoxEditorSettingsComponent;
        }

      case ControlTypes.DropDown: //dropdown
        {
          return componentType == ComponentType.Basic ? DropDownComponent : DropDownSettingsComponent;
        }
      case ControlTypes.RadioButton: //Radio
        {

          return componentType == ComponentType.Basic ? RadioButtonComponent : RadioButtonSettingsComponent;
        }

      case ControlTypes.CheckBox: //Check Box

        {
          return componentType == ComponentType.Basic ? CheckBoxComponent : CheckBoxSettingsComponent;
        }

      case ControlTypes.FileUpload: //File Upload

        {
          return componentType == ComponentType.Basic ? FileUploadComponent : FileUploadSettingsComponent;
        }
      case ControlTypes.Calender: //calender
        {
          return componentType == ComponentType.Basic ? CalendarComponent : CalendarSettingsComponent;
        }

      default:
        return TextBoxComponent;
    }



  }

  addControlToForm(formControls: ControlBase<any>[], draggedControl: ControlItem) {
    if (draggedControl) {


      var control: any;
      var lastControlKey = formControls.length > 0 ? formControls[formControls.length - 1].key : "0";
      var controlKey = 'control' + (Number(lastControlKey.replace(/[^0-9]/g, '')) + 1);
      console.log(controlKey);
      var controlOrder = formControls.length + 1;





      switch (draggedControl.controlType) {
        case ControlTypes.TextBox: //textbox
          {
            switch (draggedControl.subControlType) {
              case InputOptions.Text:
                control = new ControlTextbox({
                  key: controlKey,
                  required: false,
                  inputType: InputType.Text,
                  order: controlOrder,
                  name: draggedControl.name,               
                });
                break;
              case InputOptions.Number:
                control = new ControlTextbox({
                  key: controlKey,
                  required: false,
                  inputType: InputType.Number,
                  order: controlOrder,
                  name: draggedControl.name,
                  numberType: NumberTypes.Number,
                });
                break;
              case InputOptions.Email:
                control = new ControlTextbox({
                  key: controlKey,
                  required: false,
                  inputType: InputType.Email,
                  order: controlOrder,
                  name: draggedControl.name,
                });
                break;
              default:
                control = new ControlTextbox({
                  key: controlKey,
                  required: false,
                  inputType: InputType.Text,
                  order: controlOrder,
                  name: draggedControl.name,
                  numberType: NumberTypes.Number,
                });
                break;
            }
            break;
          }








        case ControlTypes.TextArea: //TextArea
          {
            control = new ControlTextarea({
              key: controlKey,
              name: 'Text Area',
              required: false,
              order: controlOrder,
              width: 4,
              cols: 98
            });

            break;
          }

        case ControlTypes.TextBoxEditor: //TextArea
          {
            control = new ControlTextboxEditor({
              key: controlKey,
              name: 'Text Box Editor',
              disabled: false,
              placeholder: 'Text Box ',
              order: controlOrder,
              width: 4
            });

            break;
          }

        case ControlTypes.DropDown: //dropdown
          {

            control = new ControlDropdown({
              key: controlKey,
              name: 'Drop Down',
              required: false,
              order: controlOrder,
              optionSource: 1,
              disabled: false,
              options: [
                { label: 'Option 1', value: 'Option 1' },
                { label: 'Option 2', value: 'Option 2' },
                { label: 'Option 3', value: 'Option 3' }
              ],
              hasSubFormGroup: false,
              subFormGroupKeys: []
            });
            break;
          }

        case ControlTypes.CheckBox: //CheckBox
          {
            control = new ControlCheckBox({
              key: controlKey,
              name: 'CheckBox',
              required: false,
              disabled: false,
              styleClass: "back",
              optionSource: 1,
              hasSubFormGroup: true,
              subFormGroupKeys: [
                { label: 'Option 1', value: false },
                { label: 'Option 2', value: false }]
              ,
              order: controlOrder,

            });

            break;
          }
        case ControlTypes.Calender: //calender
          {
            control = new ControlCalendar({
              key: controlKey,
              name: 'Calender',
              required: false,
              order: controlOrder
            });

            break;
          }

        case ControlTypes.RadioButton:
          control = new ControlRadioButton({
            key: controlKey,
            name: 'Radio Button',
            optionSource: 1,
            required: false,
            disabled: false,
            options: [
              { label: 'Option 1', value: 'Option 1' },
              { label: 'Option 2', value: 'Option 2' },
              { label: 'Option 3', value: 'Option 3' }],
            hasSubFormGroup: false,
            subFormGroupKeys: [],
            order: controlOrder,
          });
          break;

        case ControlTypes.FileUpload: //FileUpload

          {

            control = new ControlFileUpload({
              key: controlKey,
              name: 'File Upload',
              fileType: 'image/*',
              multiple: false,
              order: controlOrder,
              width: 2

            });



            break;

          }
      }

      return formControls = [...formControls, control];

    }
  }

  getTestControls(): ControlBase<any>[] {


    let array = [new ControlTextbox({
      key: 'control1',
      required: false,
      name: '',
      order: 1,
      inputType: 'text',
    }),
    new ControlTextarea({
      key: 'control2',
      name: 'Text Area',
      required: false,
      order: 1,
    })
    ]

    return array;
  }


  getComponents(companyId?: number, userName?: string, isField?: boolean, global?: boolean): Observable<SelectItem[]> {
    let criteria = new ComponentSearchCriteria(companyId, userName, isField, global);
    let componentItems: SelectItem[] = [];

    var getComponents$ = this.componentService.GetByCriteria(criteria).pipe(

      map(response => {
        console.log('mapped');
        response.data.forEach(comp => {

          componentItems.push({ label: comp.name, icon: comp.icon, value: comp.id })

        });

        return componentItems;
      }),
      finalize(() => { console.log('completed') }));

    return getComponents$;

  }

  getComponentContent(componentId: number): Observable<FormContent> {
    var getContent$ = this.containerService.GetByCriteria(new ContinerSearchCriteria(componentId)).pipe(
      map(response => {
        console.log('mapped')
        return this.factoryService.BuildFormBuilderContent(response.data);
      }),
      finalize(() => { console.log('completed') })
    );

    return getContent$;
  }



}
