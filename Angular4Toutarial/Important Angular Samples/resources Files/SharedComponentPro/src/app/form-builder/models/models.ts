import { ControlBase } from '../dynamic-controls/control-models/control-base';
import { FormGroup, FormControl } from "@angular/forms";
import { EventEmitter } from "@angular/core";

import { Type } from '@angular/core';
import { SelectItem } from 'primeng/api';

export class Mapper<T> {
  private items: { [key: string]: T };

  constructor() {
    this.items = {};
  }

  add(key: string, value: T): void {
    this.items[key] = value;
  }

  has(key: string): boolean {
    return key in this.items;
  }

  get(key: string): T {
    return this.items[key];
  }
}




export enum Application {
  GeneralInsurance = 1,
  MedicalInsurance = 2,
  LifeInsurance = 3,
  Greeting = 4,
  Schedular = 306,
  iCore3 = 32
}

export enum DomainId {
  Languages = 3144,
  ApplicationType = 102983,
  EventType = 102984,
  Status = 102985,
  Notificationtype = 102987,
  RunEvery = 102991,
  Execution = 102986,
  DataSource = 102988,
  RecipientType = 102990,
  ProviderStatus = 102985,
  ColumnTypes = 102995,
  MandatoryTypes = 102996

}

export enum DataSource {
  Query = 1,
  API = 2,
  None = 5,
  QueryDML = 4
}


export enum ProviderStatus {
  Active = 1,
  Inactive = 2
}

export class loginInfo {
  userName: string;
  password: string;
  companyId: number;
  branchId: number;
  languageId: number;
}


export class User {
  companyId: number;
  userName: string;
  branchId: number;
  language: number;
}


export class MenuItem {
  Id: Number;
  Name: string;
  AlternativeName: string;
  Url: string;
  Icon: string;
  Application: Application;
  Pages: MenuItem[];
}


export interface BaseControlComponent {
  control: ControlBase<any>;
  form: FormGroup;
}

export interface BaseControlEditorComponent {
  control: ControlBase<any>;
  form: FormGroup;
}



export interface BaseControlComponent {
  control: ControlBase<any>;
  form: FormGroup;
}

export interface BaseControlEditorComponent {
  control: ControlBase<any>;
  form: FormGroup;
}


export class ControlComponentType {
  constructor(public component: Type<any>, public controlType: number) { }
}


export interface BaseControlSettingsComponent {
  control: ControlBase<any>;
  saveSettings: EventEmitter<any>;
}

export class Item {

  label: string;
  value: any;

  constructor(label: string, value: any) {

    this.label = label;
    this.value = value;
  }
}


export enum NumberTypes {
  Number = 1,
  Decimal = 2,
  Percentage = 3,
  Integer = 4,
}

export enum InputOptions {
  Text = 1,
  Number = 2,
  Email = 3,
}

export enum InputType {
  Text = "text",
  Number = "number",
  Email = "email",
}

export class labelValuePair {
  label: string;
  value: any;
  constructor(label: string, value: any) {
    this.label = label;
    this.value = value;
  }
}



export class Option extends labelValuePair {


}

export enum ControlTypes {
  TextBox = 1,
  DropDown = 2,
  Calender = 3,
  Row = 4,
  FieldSet = 5,
  FileUpload = 6,
  CheckBox = 7,
  RadioButton = 8,
  TextArea = 9,
  TextBoxEditor = 10
}


export enum columnWidth {
  Sm = 1,
  Md = 2,
  Lg = 3,
  Xl = 4
}


export enum ComponentType {
  Basic = 1,
  Setting = 2
}


export enum OptionSource {
  Domains = 1,
  API = 2,
  Static = 3
}
/**
 *SstComponentsApi
 */
export class SstComponents {
  public id: number;
  public name: string;
  public name2: string;
  public icon: string;
  public formType?: number;
  public layoutType?: number;
  public notes: string;
  public systemId?: number;
  public companyId: number;
  public creationUser: string;
  public creationDate: Date;
  public modificationUser: string;
  public modificationDate?: Date;
  sstContainers: Array<SstContainers>;

}

/**
 *SstSettingValuesApi
 */
export class SstSettingValues {
  public id: number;
  public name: string;
  public name2: string;
  public value: string;
  public controlId: number;
  public settingId: number;
  public creationUser: string;
  public creationDate: Date;
  public modificationUser: string;
  public modificationDate?: Date;
  public control: SstFormControls;
  public setting: SstControlSettings;

}
/**
*SstContainerssApi
*/

export class SstContainers {
  public id: number;
  public key: string;
  public type?: number;
  public name: string;
  public name2: string;
  public order?: number;
  public componentId?: number;
  public refContainerId?: number;
  public notes: string;
  public creationUser: string;
  public creationDate: Date;
  public modificationUser: string;
  public modificationDate?: Date;
  public component: SstComponents;
  public refContainer: SstContainers;
  public inverseRefContainer: Array<SstContainers>;
  public sstFormControls: Array<SstFormControls>;
}

export class ContinerSearchCriteria {
  ComponentId: number = 0;

  constructor(ComponentId: number) {
    this.ComponentId = ComponentId;

  }
}


/**
*SstControlSettingsApi
*/
export class SstControlSettings {
  public id: number;
  public code: string;
  public name: string;
  public creationUser: string;
  public creationDate: Date;
  public modificationUser: string;
  public modificationDate?: Date;
  public sstSettingValues: Array<SstSettingValues>;
}
/**
*SstFormControlsApi
*/
export class SstFormControls {
  public id: number;
  public key: string;
  public type?: number;
  public name: string;
  public name2: string;
  public order?: number;
  public value?: string;
  public controlValue?: number;
  public controlOrder?: number;
  public icon: string;
  public width?: number;
  public required: number;
  public disabled: number;
  public hasSubformControls?: number;
  public containerId?: number;
  public refControlId?: number;
  public notes: string;
  public creationUser: string;
  public creationDate: Date;
  public modificationUser: string;
  public modificationDate?: Date;
  public options?: string;
  public container: SstContainers;
  public refControl: SstFormControls;
  public inverseRefControl: Array<SstFormControls>;

}


/* form builder models */
export class ControlItem {
  name?: string;
  controlType: number;
  subControlType: number;
  icon?: string;

}


export class ComponentItem {
  name?: string = '';
  componentId: number = 0;
  icon?: string = '';
}

export class FormContainer {
  containerType: number;
  containerHeader: string;
  formControls: ControlBase<any>[] = [];
  constructor(containerType: number, containerHeader: string, formControls: ControlBase<any>[]) {
    this.containerType = containerType || 1;
    this.containerHeader = containerHeader || '';
    this.formControls = formControls || [];
  }
}

export class FormContent {
  formContainers: FormContainer[] = [];
  formGroupControls: ControlBase<any>[] = [];
}

