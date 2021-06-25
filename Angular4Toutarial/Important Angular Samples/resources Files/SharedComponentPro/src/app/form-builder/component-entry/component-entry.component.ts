import { Component, OnInit, ViewEncapsulation, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { CommonService } from 'src/app/shared/services/common.service';
import { ComponentsService } from '../services/components.service';
import { SstComponents } from '../models/models';


@Component({
  selector: 'shc-component-entry',
  templateUrl: './component-entry.component.html',
  styleUrls: ['./component-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentEntryComponent implements OnInit, OnChanges {
  componetEntryForm: FormGroup = new FormGroup({});
  model: SstComponents = new SstComponents();

  iconcss: string;
  @Output() saveCompleted = new EventEmitter<SstComponents>();

  @Input() ComponentId: number;
  options: SelectItem[] =
    [{ label: 'Tabular', value: 1 },
    { label: 'Columnar', value: 2 }];
  data: any;

  constructor(private cs: CommonService, private componentService: ComponentsService) { }

  ngOnInit() {
    this.createForm();
    this.resetForm();
  }
  ngOnChanges() {

    console.log(this.ComponentId);

    if (this.ComponentId > 0) {
      this.setFormValues();

    } else {

      this.resetForm();

    }



  }
  createForm() {

    this.componetEntryForm = this.cs.fb.group(
      {
        name: ['', Validators.required],
        name2: '',
        layoutType: '',
        formType: '',
        notes: '',
        icon: ''
      }
    );
    this.bindEvents();
  }
  bindEvents() {
    //bind events if their is dependency betweenn controls
  }

  resetForm() {
    this.cs.resetForm(this.componetEntryForm);
  }

  setFormValues() {
    this.componentService.GetById(this.ComponentId).subscribe(

      data => {
        this.data = data.data;
        this.model = data.data;
        this.componetEntryForm.patchValue({
          name: this.model.name,
          name2: this.model.name2,
          layoutType: this.model.layoutType,
          formType: this.model.formType == 2 ? true : false,
          notes: this.model.notes,
          icon: this.model.icon
        })
      });
  }
  saveComponent() {

    const formModel = this.componetEntryForm.value;
    this.model.name = formModel.name;
    this.model.name2 = formModel.name2;
    this.model.layoutType = Number(formModel.layoutType);
    this.model.formType = formModel.formType==true ? 2 : 1;
    //Number(formModel.formType);
    this.model.notes = formModel.notes;
    this.model.icon = formModel.icon;

    if (this.model.id > 0) {
      this.model.modificationUser = "ADMIN";

      this.model.modificationDate = new Date();

      this.componentService.Put(this.model).subscribe(
        data => {
          console.log(data);
          this.cs.addMessage(data.status == 1 ? 'success' : 'error', data.status == 1 ? 'Success ' : 'Error', data.status == 1 ? 'Updated successfully' : 'Error in updating component');

          if (data.status == 1) {
            this.saveCompleted.emit(this.model);
          }
        },

        err => {
          this.cs.addMessage('error', 'Error', 'Error in saving component');
        }
      );

    } else {
      this.model.creationUser = "ADMIN";
      this.model.creationDate = new Date();
      this.model.companyId = 1;
      this.componentService.Post(this.model).subscribe(
        data => {
          this.model.id = data.data.id;
          console.log(data);
          this.cs.addMessage(data.status == 1 ? 'success' : 'error', data.status == 1 ? 'Success ' : 'Error', data.status == 1 ? 'Updated successfully' : 'Error in updating component');

          if (data.status == 1) {
            this.model.id = 1;
            this.saveCompleted.emit(this.model);
          }

        },

        err => {
          this.cs.addMessage('error', 'Error', 'Error in saving component');
          console.log(err);
        }
      );
    }



  }

  onIconPickerSelect(icon: string): void {
    this.componetEntryForm.get('icon').setValue(icon);
  }

  isFieldValid(field: string) {
    return this.cs.isFieldValid(this.componetEntryForm, field);
  }
}
