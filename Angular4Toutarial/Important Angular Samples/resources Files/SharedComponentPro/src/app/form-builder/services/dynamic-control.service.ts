import { Injectable, EventEmitter, Inject, forwardRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ControlBase } from '../dynamic-controls/control-models/control-base';
import { labelValuePair } from '../models/models';
import { SelectItem } from 'primeng/api';
import { CommonService } from 'src/app/shared/services/common.service';
import { Subject } from 'rxjs';



@Injectable()
export class DynamicControlService {
  currentFormControls : ControlBase<any>[] = [];
  subjectArray =new Subject <ControlBase<any>[]> ();
  test : ControlBase<any>[] = [];
  constructor(private cs :CommonService  ) { }
  toFormGroup(controls: ControlBase<any>[]) {
    let group: any = {};

    controls.forEach(control => {
      if (control.hasSubFormGroup == true) {
        group[control.key] = this.arrayToFormGroup(control.subFormGroupKeys);
      } else {
        group[control.key] = this.convertToBoolean(control.required) ? new FormControl({ value: control.value, disabled: this.convertToBoolean(control.disabled) } || '', Validators.required)
          : new FormControl({ value: control.value, disabled: this.convertToBoolean(control.disabled) } || '');
      }

    });
    return new FormGroup(group);
  }

  AddControlToFormGroup(formGroup: FormGroup, control: ControlBase<any>) {

    if (control.hasSubFormGroup == true) {

      formGroup.addControl(control.key, this.arrayToFormGroup(control.subFormGroupKeys));
      formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });

      console.log(formGroup);

    } else {
      let formControl: FormControl = this.convertToBoolean(control.required) ? new FormControl({ value: control.value, disabled: this.convertToBoolean(control.disabled) } || '', Validators.required)
        : new FormControl({ value: control.value, disabled: this.convertToBoolean(control.disabled) } || '');
      formGroup.addControl(control.key, formControl);
      formGroup.updateValueAndValidity();
    }

  }

  checkFormGroupUpdates(formGroup: FormGroup, control: ControlBase<any>) {

    if (control.hasSubFormGroup == true) {

      if (formGroup.contains(control.key)) {


        formGroup.setControl(control.key, this.arrayToFormGroup(control.subFormGroupKeys));
        formGroup.updateValueAndValidity();


      }


    }
  }


  RemoveControlFromFormGroup(formGroup: FormGroup, control: ControlBase<any>) {

    formGroup.removeControl(control.key);

    formGroup.updateValueAndValidity();

  }

  arrayToFormGroup(array: SelectItem[]) {

    let group: any = {};

    array.forEach(item => {
      // item.value ==''?false :item.value || ''
      group[item.label] = new FormControl(item.value);

    });



    return new FormGroup(group)

  }


  entityToFormGroup(entity: any) {
    let group: any = {};
    Object.keys(entity).forEach(prop => {

      group[prop] = new FormControl(  entity[prop] || '');

    });

    return new FormGroup(group);

  }

  saveControlSettingsFromFG(selectedControl: ControlBase<any>, controlOptions: FormGroup) {

    Object.keys(selectedControl).forEach(prop => {
      var proptype = typeof selectedControl[prop];
      if (proptype === "boolean") {
        selectedControl[prop] = this.convertToBoolean(controlOptions.controls[prop].value);
      }
      else {
        selectedControl[prop] = controlOptions.controls[prop].value
      }
    });

    return selectedControl;
  }


  saveControlSettings(selectedControl: ControlBase<any>, editedControl: ControlBase<any>) {

    Object.keys(selectedControl).forEach(prop => {
      selectedControl[prop] = editedControl[prop]

    });

    return selectedControl;
  }

  convertToBoolean(value: any) {

    if (value == 'false' || value == false  ) {
      return false;
    } else if (value == 'true' || value == true ) {
      return true;
    } else  if( ! isNaN(value)){
      return Number(value)==1?true :false;
    } else {
      return value;
    }
  }



  updateFromValueControl(formGroup: FormGroup, parentControl: any, event: any, control: any) {

    if (event.target.checked == true) {
      formGroup.get(parentControl).get(control).patchValue(true);
    } else {
      formGroup.get(parentControl).get(control).patchValue(false);
    }

  }



  getOptionSource() {

    return [
      { label: 'Domains', value: 1 },
      { label: 'Api', value: 2 },
      { label: 'Static', value: 3 }
    ];
  }


  getWidthOptions() {

    return [
      { label: 'Sm', value: 1 },
      { label: 'Md', value: 2 },
      { label: 'Lg', value: 3 },
      { label: 'XL', value: 4 }
    ];
  }

  getViewOptions() {

    return [
      { label: 'Horizontal', value: 1 },
      { label: 'Vertical', value: 2 }
    ];
  }

  /*
   *this function for deepClone OF array
   */

  getCloneArray(array: any[]) {

    let clonedObject: any;
    let copyArray: any[] = [];
    copyArray = array.map(obj => ({ ...obj }));
    return copyArray;
  }

   setCurrentFormControls   (formControls : any[]){

     this.currentFormControls=formControls;
      console.log('************');
     console.log(this.currentFormControls);


   }


   getCurrentFormControls(){

    return this.currentFormControls;
   }


   validateControlKey(oldKey:string ,newKey:string){

      let  MatchingControlKey: any = {};
      if (oldKey == newKey ){
         this.cs.clearMessages();
         return true;

         }else {
          MatchingControlKey= this.getCurrentFormControls().find(control => control.key === newKey);
          console.log(MatchingControlKey);
          if (MatchingControlKey==undefined){
            this.cs.clearMessages();
             return true ;
          }else {
            this.cs.clearMessages();
          this.cs.pushMessageNotify('settings','error', 'Error', 'The key already Exists on'+MatchingControlKey.name);
          return false;
           }
         }


    }


   convertEnumToOptions(option:any){
     let options:{ label:string, value: number } [] = [];
      for(var n in option) {
        if (typeof option[n] !== 'number') {
          options.push({label: option[n], value: Number(n)});
        }
       }

        return options;
      }

}
