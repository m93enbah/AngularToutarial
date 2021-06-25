import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators } from "@angular/forms";
import { questionnaireService } from '../services/questionnaire.service';
import { SelectItem } from 'primeng/api';
import { Application } from '../../shared/models/models';

@Component({
  selector: 'shc-questionnaire-entry',
  templateUrl: './questionnaire-entry.component.html',
  styleUrls: ['./questionnaire-entry.component.scss']
})
export class QuestionnaireEntryComponent implements OnInit {
  QuestionnaireSearchfrm: FormGroup;
  QuestionnaireEntryfrm: FormGroup;

  InsuranceSystem: SelectItem[] = [
    { label: 'General Insurance', value: Application.GeneralInsurance },
    { label: 'Medical Insurance', value: Application.MedicalInsurance },
    { label: 'Life Insurance', value: Application.LifeInsurance }

  ];
  constructor(private cs: questionnaireService) { }

  ngOnInit() {


  }
  QuestionnaireListRows: any[];

  QuestionnaireListCols: any[] =
    [
      { field: "Id", header: "Id", hidden: true },
      { field: "Serial", header: "Serial", hidden: false },
      { field: "Name", header: "Name", hidden: false },
      { field: "Description", header: "Description", hidden: false },
     
     
    ];


  createForm() {
    this.QuestionnaireSearchfrm = this.cs.fb.group({
      Name: [''],
      Name2: [''],
      SystemId: ['']

    });
  }

}
