import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormGroup } from '@angular/forms';

import { DynamicControlService } from '../services/dynamic-control.service';

import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInY } from 'ng-animate';
import { FormBuilderService } from '../services/form-builder.service';
import { ControlBase } from '../dynamic-controls/control-models/control-base';
import { FormContainer, Option, ControlTypes, ContinerSearchCriteria, ControlItem } from '../models/models';
import { ControlsFactoryService } from '../services/controls-factory.service';
import { ContainerService } from '../services/container.service';

@Component({
  selector: 'shc-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  controls: ControlItem[] = [];
  @Input() formcontrols: ControlBase<any>[] = [];
  formContent: FormContainer[] = [];
  testFactoryContent: FormContainer[] = [];
  // testFactoryContent =this.factoryService.BuildFormBuilderContent(this.factoryService.FormContent);
  selectedContainerIndex: number = 0;
  selectedControl: ControlBase<any>;
  draggedControl: ControlItem;
  form: FormGroup = new FormGroup({});
  showSettings: boolean = false;
  rows: Option[] = [];
  cols: any[] = [
    { field: "label", header: "label", hidden: false },
    { field: "value", header: "value", hidden: false }
  ];

  editable: boolean = false;
  constructor(private dcs: DynamicControlService,
    private fbs: FormBuilderService,
    private factoryService: ControlsFactoryService,
    private containerService: ContainerService) { }

  beginEditContainerHeader() {
    this.editable = true;
  }

  endEditContainerHeader(event: any, index: number) {
    this.formContent[index].containerHeader = event.target.value;
  }

  enableHeaderEditing(selectedIndex) {
    return (this.editable && selectedIndex == this.selectedContainerIndex);
  }
  ngOnInit() {
    debugger;

    this.AddRow();
    // this.containerService.GetByCriteria(new ContinerSearchCriteria(1)).subscribe(res => {
    //   console.log(res);

    //   this.testFactoryContent = this.factoryService.BuildFormBuilderContent(res.data);
    //   this.formcontrols = this.testFactoryContent[0].formControls;
    //   this.form = this.dcs.toFormGroup(this.formcontrols);
    //   this.controls = this.fbs.getAvailableControls();
    //   this.formContent = this.testFactoryContent;
    //   //  this.factoryService.BuildComponentContent(this.formContent);



    // });





  }
  save() {

    this.containerService.PostBulk(this.formContent).subscribe(res => {
      console.log(res);


      //  this.factoryService.BuildComponentContent(this.formContent);



    });

  }
  setSelectedContainer(index) {
    this.selectedContainerIndex = index;
  }

  dragStart(event, ctrl: ControlItem) {
    this.draggedControl = ctrl;
  }

  drop(event) {
    if (this.draggedControl) {

      if (this.draggedControl.controlType == ControlTypes.Row) {
        this.AddRow();
      }
      else if (this.draggedControl.controlType == ControlTypes.FieldSet) {
        this.AddPanel();
      }
      else {
        this.formcontrols = this.fbs.addControlToForm(this.formcontrols, this.draggedControl);

        let draggedformControl = this.formcontrols[this.formcontrols.length - 1];

        this.dcs.AddControlToFormGroup(this.form, draggedformControl);
        this.formContent[this.selectedContainerIndex].formControls.push(draggedformControl);

      }

      this.draggedControl = null;
    }
  }

  dragEnd(event) {
    this.draggedControl = null;
  }

  viewSettings(selectedControl: ControlBase<any>) {

    this.selectedControl = selectedControl;
    this.showSettings = true;
  }

  remove(removedControl: ControlBase<any>) {

    //Remove From Form Group
    this.formcontrols.splice(this.formcontrols.indexOf(removedControl), 1);
    this.dcs.RemoveControlFromFormGroup(this.form, removedControl);
    //Remove From Selected Container
    var indexOfRemovedControl = this.formContent[this.selectedContainerIndex].formControls.indexOf(removedControl);
    this.formContent[this.selectedContainerIndex].formControls.splice(indexOfRemovedControl, 1);

  }

  removeContainer(index: number) {
    this.formContent[index].formControls.forEach(ctrl => {
      var ctrlToBeRemoved = this.formcontrols.filter(c => c.key == ctrl.key);
      this.formcontrols.splice(this.formcontrols.indexOf(ctrlToBeRemoved[0]), 1);
      this.dcs.RemoveControlFromFormGroup(this.form, ctrl);
    });

    this.formContent.splice(this.selectedContainerIndex, 1);
  }

  saveSettings(editedControl: ControlBase<any>) {
    this.selectedControl = this.dcs.saveControlSettings(this.selectedControl, editedControl);
    this.dcs.checkFormGroupUpdates(this.form, this.selectedControl);
  }


  AddRow() {
    var rowHeader = this.fbs.generateContainerHeader(this.formContent, 1);
    this.formContent.push(new FormContainer(1, rowHeader, []));
    this.selectedContainerIndex = this.formContent.length - 1;
  }

  AddPanel() {
    var panelHeader = this.fbs.generateContainerHeader(this.formContent, 2);
    this.formContent.push(new FormContainer(2, panelHeader, []));
    this.selectedContainerIndex = this.formContent.length - 1;
  }

  resetShowSettings() {
    this.showSettings = false;
  }
}
