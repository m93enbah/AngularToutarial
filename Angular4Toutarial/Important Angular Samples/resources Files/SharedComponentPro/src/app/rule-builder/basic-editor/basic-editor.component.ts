import { Component, OnInit, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-editor',
  templateUrl: './basic-editor.component.html',
  styleUrls: ['./basic-editor.component.css']
})
export class BasicEditorComponent implements OnInit {
  radioName: string[];
  private counter: number = 0;
  conditions1: SelectItem[];
  conditions2: SelectItem[];
  conditionsArray: SelectItem[];
  actions: SelectItem[];
  basicRuleForm: FormGroup;
  andbool: boolean[];
  andActionbool: boolean[];
  orbool: boolean[];
  orActionbool: boolean[];

  constructor(private form: FormBuilder, private elRef: ElementRef) {
    this.conditions1 = [
      { label: 'Select', value: null },
      { label: 'Sum Insured', value: 1 },
      { label: 'Income', value: 2 },
      { label: 'Name', value: 3 },
      { label: 'Age', value: 4 },
      { label: 'Birth Date', value: 5 }
    ];
    this.conditions2 = [
      { label: 'Select', value: null },
      { label: 'Start With', value: 7 },
      { label: 'End With', value: 8},
      { label: '>', value: 1 },
      { label: '<', value: 2 },
      { label: '==', value: 3 },
      { label: '!=', value: 4 },
      { label: '>=', value: 5 },
      { label: '<=', value: 6 }
    ];
    this.conditionsArray = [
      { label: 'Select', value: null },
      { label: 'Any', value: 1 },
      { label: '', value: 2 }
    ];
    this.actions = [
      { label: 'Select', value: null },
      { label: 'Show', value: 1 },
      { label: 'Hide', value: 2 },
      { label: 'Require', value: 3 },
      { label: 'Enable', value: 4 },
      { label: 'Disable', value: 5 },
      { label: 'Preform Action', value: 6 },
      { label: 'Show Calculation', value: 7 }
    ];
    this.radioName = ["ruleMode"];
    this.andbool = [false];
    this.orbool = [false];
    this.andActionbool = [false];
    this.orActionbool = [false];
  }

  andClick(i:number) {
    this.andbool[i] = !this.andbool[i];
    this.andbool.push(false);
    this.addCondition();
  }

  andActionClick(i: number) {
    this.andActionbool[i] = !this.andActionbool[i];
    this.andActionbool.push(false);
    this.addAction();
  }

  orClick(i: number) {
    this.orbool[i] = !this.orbool[i];
    this.orbool.push(false);
    this.addCondition();
  }
  orActionClick(i: number) {
    this.orActionbool[i] = !this.orActionbool[i];
    this.orActionbool.push(false);
    this.addAction();
  }

  clearText() {
    this.basicRuleForm.controls['conditions'].patchValue({ name: "" });
   // (<FormArray>this.basicRuleForm.controls['conditions']).at(i).patchValue({ name: "" });
  }

  newConditions() {
    return new FormGroup({
      condition1: new FormControl(),
      condition2: new FormControl(),
      name: new FormControl()
    })
  }

  removeCondition(i) { 
    const control = <FormArray>this.basicRuleForm.controls.conditions;
    this.andbool[i] = !this.andbool[i];
    this.orbool[i] = !this.orbool[i];
    control.removeAt(i);
    this.andbool.splice(i, 1);
    this.orbool.splice(i, 1);
  }

  addCondition() {
    const control = <FormArray>this.basicRuleForm.controls.conditions;
    console.log("Add");
    console.log(control);
    control.push(this.newConditions());
  }

   getConditions(form) {
     return form.controls.conditions.controls;
   }
  removeActions(i: number) {
    const control = <FormArray>this.basicRuleForm.get('actions');
    this.andActionbool[i] = !this.andActionbool[i];
    this.orActionbool[i] = !this.orActionbool[i];
    control.removeAt(i);
    this.andActionbool.splice(i, 1);
    this.orActionbool.splice(i, 1);
  }

  addAction() {
    const control = <FormArray>this.basicRuleForm.get('actions');
    this.radioName.push(this.radioName[0] +  this.counter++);
    control.push(this.newActions());
  }

  getActions(form) {
    return form.controls.actions.controls;
  }

  newActions() {
    return new FormGroup({
      action: new FormControl(),
      actionName: new FormControl(),
      selectedValue: new FormControl(1),
      condition1: new FormControl()
    })
  }

  ngOnInit() {
    this.basicRuleForm = this.form.group({
      condition: [''],
      conditions: new FormArray([
        this.newConditions()
      ]),
      actions: new FormArray([
        this.newActions()
      ])
    });
  }
}
