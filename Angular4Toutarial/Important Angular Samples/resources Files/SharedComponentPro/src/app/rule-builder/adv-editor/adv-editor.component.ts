import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Operater } from './Operation';

@Component({
  selector: 'app-adv-editor',
  templateUrl: './adv-editor.component.html',
  styleUrls: ['./adv-editor.component.css']
})
export class AdvEditorComponent implements OnInit {
  advRuleForm: FormGroup;
  ElementsList: SelectItem[];
  Elements: Operater[];
  logicalOperations: Operater[];
  MathematicalOperations: Operater[];
  RelationalOperations: Operater[];
  TrigonometricFunction: Operater[];
  actions: SelectItem[];
  source: Operater[];
  colSource: any[];
  conditions1: SelectItem[];
  selectedRow: SelectItem;
  cols: any[];
  colsElement: any[];
  draggedItem: Operater;
  counter: number = 0;
  radioName: string[];
  andActionbool: boolean[];
  orActionbool: boolean[];

  drop() {
    if (this.draggedItem) {
      this.advRuleForm.controls['expreesion'].setValue(this.advRuleForm.controls['expreesion'].value.concat(this.draggedItem.name));
      this.draggedItem = null;
    }
  }

  dragStart(item: Operater) {
    this.draggedItem = item;
  }

  dragEnd() {
    this.draggedItem = null;
  }

  addAction() {
    const control = <FormArray>this.advRuleForm.get('actions');
    this.radioName.push(this.radioName[0] + "" + this.counter++);
    control.push(this.newActions());
  }

  getActions(form) {
    return form.controls.actions.controls;
  }

  newActions() {
    return new FormGroup({
      action: new FormControl(''),
      actionName: new FormControl(''),
      selectedValue: new FormControl(1),
      condition1: new FormControl(1)
    })
  }

  onRowSelect(event: SelectItem) {
    if (event.value == 1) {
      this.source = Object.assign([], this.Elements);
      this.colSource = Object.assign([], this.colsElement);
    }
    else if (event.value == 2) {
      this.source = Object.assign([], this.MathematicalOperations);
      this.colSource = Object.assign([], this.cols);
    }
    else if (event.value == 3) {
      this.source = Object.assign([], this.logicalOperations);
      this.colSource = Object.assign([], this.cols);
    }
    else if (event.value == 4) {
      this.source = Object.assign([], this.RelationalOperations);
      this.colSource = Object.assign([], this.cols);
    }
    else if (event.value == 5) {
      this.source = Object.assign([], this.TrigonometricFunction);
      this.colSource = Object.assign([], this.colsElement);
    }
  }

  removeActions(i: number) {
    const control = <FormArray>this.advRuleForm.get('actions');
    this.andActionbool[i] = !this.andActionbool[i];
    this.orActionbool[i] = !this.orActionbool[i];
    control.removeAt(i);
    this.andActionbool.splice(i, 1);
    this.orActionbool.splice(i, 1);
  }
  andActionClick(i: number) {
    this.andActionbool[i] = !this.andActionbool[i];
    this.andActionbool.push(false);
    this.addAction();
  }
  orActionClick(i: number) {
    this.orActionbool[i] = !this.orActionbool[i];
    this.orActionbool.push(false);
    this.addAction();
  }

  constructor(private form: FormBuilder) {
    this.ElementsList = [
      { label: "Elements", value: 1 },
      { label: "Mathematical Operations", value: 2 },
      { label: "Logical Operations", value: 3 },
      { label: "Relational Operations", value: 4 },
      { label: "Trigonometric Function", value: 5 }
    ];

    this.logicalOperations = [
      { name: "AND", desc: "True AND True = True", value: 1 },
      { name: "OR", desc: "True OR False = True", value: 2 },
      { name: "XOR", desc: "True XOR False = True", value: 3 }
    ];

    this.MathematicalOperations = [
      { name: "+", desc: "Addition", value: 3 },
      { name: "-", desc: "Subtraction", value: 4 },
      { name: "*", desc: "Multiplication", value: 5 },
      { name: "/", desc: "Division", value: 6 },
      { name: "%", desc: "Modulo (reminder)", value: 7 }
    ];

    this.Elements = [
      { name: 'SI', desc: 'Sum Insured', value: 1 },
      { name: 'Income', desc: 'Income', value: 2 },
      { name: 'Name', desc: 'Name', value: 3 },
      { name: 'Age', desc: 'Age', value: 4 },
      { name: 'DOB', desc: 'Birth Date', value: 5 }
    ];

    this.RelationalOperations = [
      { name: "<", desc: "Less than", value: 7 },
      { name: ">", desc: "Greater than", value: 8 },
      { name: "<=", desc: "Less than or equal to", value: 9 },
      { name: ">=", desc: "Greater than or equal", value: 10 },
      { name: "==", desc: "Greater than or equal", value: 11 },
    ];

    this.TrigonometricFunction = [
      { name: "acos(x)", desc: "Inverse cosine", value: 8 },
      { name: "asin(x)", desc: "Inverse sine", value: 8 },
      { name: "atan(x)", desc: "Inverse tangent", value: 8 },
      { name: "atan2(x,y)", desc: "Inverse tangent of x/y", value: 8 },
      { name: "cos(x)", desc: "Cosine", value: 8 }
      
    ];

    this.actions = [
      { label: 'Show', value: 1 },
      { label: 'Hide', value: 2 },
      { label: 'Require', value: 3 },
      { label: 'Enable', value: 4 },
      { label: 'Disable', value: 5 },
      { label: 'Preform Action', value: 6 },
      { label: 'Show Calculation', value: 7 }
    ];

    this.cols = [
      { field: 'name', header: 'Operator' },
      { field: 'desc', header: 'Name' }
    ];

    this.colsElement = [
      { field: 'name', header: 'Abbreviation' },
      { field: 'desc', header: 'Name' }
    ];

    this.conditions1 = [
      { label: 'Select', value: null },
      { label: 'Sum Insured', value: 1 },
      { label: 'Income', value: 2 },
      { label: 'Name', value: 3 },
      { label: 'Age', value: 4 },
      { label: 'Birth Date', value: 5 }
    ];
    this.radioName = ["ruleMode"];
    this.andActionbool = [false];
    this.orActionbool = [false];
  }

  ngOnInit() {
    this.advRuleForm = this.form.group({
      expreesion: [''],
      actions: new FormArray([
        this.newActions()
      ])
    });

    this.source = Object.assign([], this.Elements);
    this.colSource = Object.assign([], this.colsElement);
  }
}
