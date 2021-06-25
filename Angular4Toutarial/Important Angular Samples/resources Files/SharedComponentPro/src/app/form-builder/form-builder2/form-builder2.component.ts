import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { SelectItem, MessageService, Message, ConfirmationService } from 'primeng/api';
import { FormGroup } from '@angular/forms';

import { DynamicControlService } from '../services/dynamic-control.service';

import { trigger, transition, state, style, animate } from '@angular/animations';
import { flipInY, fadeIn } from 'ng-animate';
import { FormBuilderService } from '../services/form-builder.service';
import { ControlBase } from '../dynamic-controls/control-models/control-base';
import { AsyncPipe } from '@angular/common';

import { FormContainer, Option, ControlTypes, ComponentItem, ControlItem, SstComponents } from '../models/models';
import { ComponentsService, ComponentSearchCriteria } from '../services/components.service';
import { ContainerService } from '../services/container.service';
import { ControlsFactoryService } from '../services/controls-factory.service';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/app/shared/services/common.service';


@Component({
  selector: 'shc-form-builder2',
  templateUrl: './form-builder2.component.html',
  styleUrls: ['./form-builder2.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate('800ms', style({ opacity: 1 }))
      ])
    ])],
  providers: [ConfirmationService]
})
export class FormBuilder2Component implements OnInit, OnChanges {

  msgs: any = this.cs.msgs;
  controls: ControlItem[] = [];
  globalComponents: ComponentItem[] = [];        //SstComponents[] = [];
  libraryFields: ComponentItem[] = [];
  libraryComponents: ComponentItem[] = [];

  selectedComponent: ComponentItem = new ComponentItem();

  filteredControls: ControlItem[] = [];
  filteredGlobalComponents: ComponentItem[] = [];
  filteredlibraryFields: ComponentItem[] = [];
  filteredlibraryComponents: ComponentItem[] = [];

  @Input() formcontrols: ControlBase<any>[] = [];
  formContainers: FormContainer[] = [];
  selectedContainerIndex: number = 0;
  selectedControl: ControlBase<any>;
  draggedControl: ControlItem;
  draggedComponent: ComponentItem;
  form: FormGroup = new FormGroup({});
  showSettings: boolean = false;
  rows: Option[] = [];
  cols: any[] = [
    { field: "label", header: "label", hidden: false },
    { field: "value", header: "value", hidden: false }
  ];

  searchType = searchType;
  editable: boolean = false;
  previewDialog: boolean = false;
  showCompEntryDialog: boolean = false;

  constructor(private dcs: DynamicControlService, private cs: CommonService,
    private messageService: MessageService,
    private factoryService: ControlsFactoryService,
    private componentService: ComponentsService,
    private containerService: ContainerService, private fbs: FormBuilderService, private confirmationService: ConfirmationService) {

  }

  beginEditContainerHeader() {
    this.editable = true;
  }

  endEditContainerHeader(event: any, index: number) {
    this.formContainers[index].containerHeader = event.target.value;
  }

  enableHeaderEditing(selectedIndex) {
    return (this.editable && selectedIndex == this.selectedContainerIndex);
  }
  testFactoryContent: FormContainer[] = [];
  ngOnInit() {

    this.cs.messageUpdated.subscribe(
      (message: Message[]) => {
        message.forEach(msg => {
          this.messageService.add({ severity: msg.severity, summary: msg.summary, detail: msg.detail })
        })

      }
    );
 
    this.AddRow();

    this.form = this.dcs.toFormGroup(this.formcontrols);
    this.controls = this.fbs.getAvailableControls();
    this.dcs.setCurrentFormControls(this.formcontrols);
  
 
    this.componentService.GetByCriteria(new ComponentSearchCriteria(1, '', null, true)).subscribe(res1 => {
      res1.data.forEach(comp => {
        this.globalComponents.push({ name: comp.name, icon: comp.icon, componentId: comp.id });
        this.filteredGlobalComponents.push({ name: comp.name, icon: comp.icon, componentId: comp.id });
      });
    });

    this.componentService.GetByCriteria(new ComponentSearchCriteria(1, "ADMIN", true, false)).subscribe(res3 => {
      res3.data.forEach(comp => {
        this.libraryFields.push({ name: comp.name, icon: comp.icon, componentId: comp.id });
        this.filteredlibraryFields.push({ name: comp.name, icon: comp.icon, componentId: comp.id });
      });
    });

    this.componentService.GetByCriteria(new ComponentSearchCriteria(1, "ADMIN", false, false)).subscribe(res2 => {
      res2.data.forEach(comp => {
        this.libraryComponents.push({ name: comp.name, icon: comp.icon, componentId: comp.id });
        this.filteredlibraryComponents.push({ name: comp.name, icon: comp.icon, componentId: comp.id });
      });
    });

    

    this.filteredControls = [...this.controls];
  }
  ngOnChanges() {
    // console.log('ngOnChanges');
  }
  ngDoCheck() {
    // console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.dcs.setCurrentFormControls(this.formcontrols);
  }
  ngOnDestroy() {
    // console.log('ngOnDestory');
  }

  setSelectedContainer(index) {
    this.selectedContainerIndex = index;
  }

  dragStart(event, ctrl: ControlItem) {
    this.draggedControl = ctrl;
  }

  componentdragStart(event, comp: ComponentItem) {
    this.draggedComponent = comp;
  }


  drop(event) {
    if (this.draggedComponent) {
      var getContent$ = this.fbs.getComponentContent(this.draggedComponent.componentId);

      getContent$.subscribe(formContent => {

        this.formcontrols = formContent.formGroupControls;
        this.form = this.dcs.toFormGroup(this.formcontrols);
        this.formContainers = formContent.formContainers;
        // this.dcs.setCurrentFormControls(this.formcontrols);
        // this.dcs.subjectArray.next(this.formcontrols);

      });

      Object.assign(this.selectedComponent, this.draggedComponent);
      //Load component by component Id form content from container service
    }
    if (this.draggedControl) {

      if (this.draggedControl.controlType == ControlTypes.Row) {
        this.AddRow();
      }
      else if (this.draggedControl.controlType == ControlTypes.FieldSet) {
        this.AddPanel();
      }
      else {
        if (this.formContainers.length > 0) {
          this.formcontrols = this.fbs.addControlToForm(this.formcontrols, this.draggedControl);

          let draggedformControl = this.formcontrols[this.formcontrols.length - 1];

          this.dcs.AddControlToFormGroup(this.form, draggedformControl);

          this.formContainers[this.selectedContainerIndex].formControls.push(draggedformControl);
        }
      }

      this.draggedControl = null;
      this.draggedComponent = null;
    }
  }

  dragEnd(event) {
    // this.dcs.setCurrentFormControls(this.formcontrols);
    // this.dcs.subjectArray.next(this.formcontrols);
    this.draggedControl = null;
    this.draggedComponent = null;
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
    var indexOfRemovedControl = this.formContainers[this.selectedContainerIndex].formControls.indexOf(removedControl);
    this.formContainers[this.selectedContainerIndex].formControls.splice(indexOfRemovedControl, 1);

  }

  removeContainer(index: number) {
    this.formContainers[index].formControls.forEach(ctrl => {
      var ctrlToBeRemoved = this.formcontrols.filter(c => c.key == ctrl.key);
      this.formcontrols.splice(this.formcontrols.indexOf(ctrlToBeRemoved[0]), 1);
      this.dcs.RemoveControlFromFormGroup(this.form, ctrl);
    });

    this.formContainers.splice(index, 1);
  }

  saveSettings(editedControl: ControlBase<any>) {
    this.selectedControl = this.dcs.saveControlSettings(this.selectedControl, editedControl);
    this.dcs.checkFormGroupUpdates(this.form, this.selectedControl);
  }


  AddRow() {
    var rowHeader = this.fbs.generateContainerHeader(this.formContainers, 1);
    this.formContainers.push(new FormContainer(1, rowHeader, []));
    this.selectedContainerIndex = this.formContainers.length - 1;
  }

  AddPanel() {
    var panelHeader = this.fbs.generateContainerHeader(this.formContainers, 2);
    this.formContainers.push(new FormContainer(2, panelHeader, []));
    this.selectedContainerIndex = this.formContainers.length - 1;
  }

  resetShowSettings() {
    this.showSettings = false;
  }

  displayPreview() {
    this.previewDialog = !this.previewDialog;
  }

  displayEntryComp() {
    this.showCompEntryDialog = !this.showCompEntryDialog;
  }

  exitSettings(exitSetting: boolean) {
    this.showSettings = exitSetting;
  }


  searchControls(query: string, searchInputType: searchType)//pass search type 1: controls, 2:predefined controls, 3: Library Components
  {

    switch (searchInputType) {

      case (searchType.Controls):
        this.filteredControls = this.controls.filter(x => x.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
        break;

      case (searchType.Predefined):
        this.filteredGlobalComponents = this.globalComponents.filter(x => x.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
        break;

      case (searchType.LibraryField):
        this.filteredlibraryFields = this.libraryFields.filter(x => x.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
        break;

      case (searchType.LibraryComponent):
        this.filteredlibraryComponents = this.libraryComponents.filter(x => x.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
        break;
    }
  }

  saveComponentContent() {
    if (this.selectedComponent.componentId > 0) {
      //Insert bulk after sending container to factory service
      this.formcontrols.forEach(control => {
        console.log(JSON.stringify(control));
      })
    }
    else {
      // alert("Please save components details first");

      this.formcontrols.forEach(control => {
        console.log(JSON.stringify(control));
      })
      this.cs.addMessage('warn', 'Warn Message', 'Please save components details first');

      this.showCompEntryDialog = !this.showCompEntryDialog;
    }
  }

  saveComponentCompleted(event: SstComponents) {
    console.log(event);
    this.showCompEntryDialog = false;
    this.selectedComponent.componentId = event.id;
    this.selectedComponent.icon = event.icon;
    this.selectedComponent.name = event.name;
  }

  clearComponents() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to erase all components ?',
      header: 'Confirmation',
      accept: () => {
        this.formcontrols = [];
        this.formContainers = [];
        this.selectedComponent = new ComponentItem();
      },
    });
  }

  deleteComponent() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to erase the selected component ?',
      header: 'Confirmation',
      accept: () => {
        this.componentService.Delete(this.draggedComponent.componentId);
      },
    });


  }

}

export enum searchType {
  Controls = 1,
  Predefined = 2,
  LibraryField = 3,
  LibraryComponent = 4,

}
