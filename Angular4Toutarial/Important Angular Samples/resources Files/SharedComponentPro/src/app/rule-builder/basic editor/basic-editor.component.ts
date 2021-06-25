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

  constructor(private form: FormBuilder, private elRef: ElementRef) {
    this.conditions1 = [
      { label: 'Select', value: null },
      { label: 'Sum Insured', value: 1 },
      { label: 'Income', value: 2 },
      { label: 'Name', value:3 },
      { label: 'Age', value: 4 },
      { label: 'Birth Date', value: 5 }
    ];
    this.conditions2 = [
      { label: 'Select', value: null },
      { label: 'Start With', value: 1 },
      { label: 'Equal', value: 2 },
      { label: 'End With', value: 3 }
    ];
    this.conditionsArray = [
      { label: 'Select Condition', value: null },
      { label: 'Any', value: 1 },
      { label: '', value: 2 }
    ];
    this.actions = [
      { label: 'Show Filed', value: 1 },
      { label: 'Hide Filed', value: 2 },
      { label: 'Require Filed', value: 3 },
      { label: 'Enable Filed', value: 4 },
      { label: 'Disable Filed', value: 5 },
      { label: 'Preform Action', value: 6 },
      { label: 'Show Calculation', value: 7 }
    ];
    this.radioName = ["ruleMode"]
  }

  clearText(i: number) {
    (<FormArray>this.basicRuleForm.controls['conditions']).at(i).patchValue({ name: "" });
  }

  newAnd(){
    return new FormGroup({
      condition1: new FormControl(),
      condition2: new FormControl(),
      name: new FormControl()
    })
  }
  addAnd(i: number){
    
    const control = (<FormArray>this.basicRuleForm.controls['conditions']).at(i).get('ands') as FormArray;
    control.push(this.newAnd());
    console.log(control);
  }

  getands(form){
    return form.controls.ands.controls;
  }

  newConditions() {
    return new FormGroup({
      ands: new FormArray([
        this.newAnd()
      ])
    })
  }

  addCondition() {
    const control = <FormArray>this.basicRuleForm.get('conditions');
    control.push(this.newConditions());
  }

  getConditions(form) {
    return form.controls.conditions.controls;
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
      selectedValue: new FormControl(1)
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
