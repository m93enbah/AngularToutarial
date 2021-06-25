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
  selectedRow: SelectItem;
  cols: any[];
  colsElement: any[];
  draggedItem: Operater;
  counter: number = 0;
  radioName: string[];

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
      selectedValue: new FormControl(1)
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

  constructor(private form: FormBuilder) {
    this.ElementsList = [
      { label: "Elements", value: 1 },
      { label: "Mathematical Operations", value: 2 },
      { label: "Logical Operations", value: 3 },
      { label: "Relational Operations", value: 4 },
      { label: "Trigonometric Function", value: 5 }
    ];
    
    this.logicalOperations = [
      { name: "==", desc: "Equal to", value: 1 },
      { name: "!=", desc: "Not Equal", value: 2 }
    ];

    this.MathematicalOperations = [
      { name: "+", desc: "Addition", value: 3 },
      { name: "-", desc: "Subtraction", value: 4 }
    ];

    this.Elements = [
      { name: "*", desc: "", value: 5 },
      { name: "/", desc: "", value: 6 }
    ];

    this.RelationalOperations = [
      {name: ">", desc: "",value:7}
    ];

    this.TrigonometricFunction = [
      {name: ": ?", desc: "",value:8}
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

    this.cols = [
      { field: 'name', header: 'Operator' },
      { field: 'desc', header: 'Name' }
    ];

    this.colsElement = [
      { field: 'name', header: 'Abbreviation' },
      { field: 'desc', header: 'Name' }
    ];

    this.radioName =["ruleMode"]
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