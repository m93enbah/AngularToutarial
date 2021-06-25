import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators } from "@angular/forms";
import { SelectItem } from 'primeng/api';
import { Application, DocumentGroups, Documents, User } from '../models/data-models';
import { DocumentgroupsService } from '../shared/services/documentgroups.service';
import { DocumentsService } from '../shared/services/documents.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  InsuranceSystem: SelectItem[] = [
    { label: '', value: undefined },
    { label: 'General Insurance', value: Application.GeneralInsurance },
    { label: 'Medical Insurance', value: Application.MedicalInsurance },
    { label: 'Life Insurance', value: Application.LifeInsurance }

  ];

  InsuranceClassesSearch: SelectItem[];
  ClassesPolicyTypesSearch: SelectItem[];

  InsuranceClassesEntry: SelectItem[];
  InsuranceApplytoEntry: SelectItem[];
  ClassesPolicyTypesEntry: SelectItem[];

  DocumentGroupHeader: string = "Documents Group List";
  DocumentGroupCols: any[] =
    [
      { field: "Id", header: "Id", hidden: true },
      { field: "InsuranceSystem", header: "Insurance System", hidden: false },
      { field: "InsuranceClass", header: "Insurance Class", hidden: false },
      { field: "PolicyTypeName", header: "Sub Line Of Business", hidden: false },
      { field: "Name", header: "Document Group Name", hidden: false },
      { field: "type", header: "Apply To", hidden: false },
      { field: "Notes", header: "Notes", hidden: false }
    ];

  DocumentHeader: string = "Documents Group List";
  DocumentCols: any[] =
    [
      { field: "Id", header: "Id", hidden: true },
      { field: "Name", header: "Attachment Name", hidden: false },
      { field: "Name2", header: "Attachment Name2", hidden: false },
      { field: "Notes", header: "Notes", hidden: false },
      { field: "IsRequired", header: "Required", hidden: false, type: "checkbox", disable: false }

    ];

  private DocumentGroupsGrid: DocumentGroups[] = new Array<DocumentGroups>();
  private DocumentGroupsEntry: DocumentGroups = new DocumentGroups();
  private DocumentGroupsSearch: DocumentGroups = new DocumentGroups();
  private DocumentsGrid: Documents[] = new Array<Documents>();
  private DocumentsEntry: Documents = new Documents();
  private RequiredDGEvent: any = { field: "", value: "" };
  private DGEntryAction: string = "Save"
  private DEntryAction: string = "Save"
  private loading: boolean = false;
  loggedInUser: User = new User();
  DocuemntGroupsEntryfrm: FormGroup;
  DocumentsEntryfrm: FormGroup;
  DocumentsGroupSearchfrm: FormGroup;
  constructor(private cs: CommonService, private docg: DocumentgroupsService, private doc: DocumentsService) {

    this.SearchDocumentGroups();

  }

  ngOnInit() {

    this.loggedInUser = this.cs.getLoggedInUser();
    this.createForm()
  }

  SearchDocumentGroups() {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);

    this.DocumentGroupsSearch.CompanyId= this.loggedInUser.companyId;
    this.DocumentGroupsSearch.CreationUser= this.loggedInUser.userName;

    this.docg.SearchDocumentGroups(this.DocumentGroupsSearch).subscribe(docg => {
      this.DocumentGroupsGrid = docg;
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
    }, err => {
      console.log(err); this.DocumentGroupsGrid = new Array<DocumentGroups>();
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
    })

  }

  onCheckboxSelectedDG(event: any) {
    this.GetDocumentGroupEntry(event.Id, event.CompanyId);

    this.DGEntryAction = "Update";
  }

  onCheckboxSelectedD(event: any) {

    this.GetDocumentEntry(event.Id, this.DocumentGroupsEntry.CompanyId);
    //Object.assign(this.DocumentsEntry, event.row || new DocumentGroups());
    

    this.DEntryAction = "Update";

  }

  SubmitDocumentsEntryForm(form: NgForm) {
    if (form.valid) {
      this.SaveDocuments()
    }
  }


  SubmitDocumentGroupsSearchForm() {
    this.setDocumentGroupsSearchValues()

    this.SearchDocumentGroups();

  }


  SubmitDocumentGroupsEntryForm(form: NgForm) {
    if (form.valid) {
      this.SaveDocumentGroups();


    }
  }



  ResetDocumentGroupsEntryForm() {
    this.DocumentGroupsEntry = new DocumentGroups();
    this.DocumentsGrid = new Array<Documents>();
    this.DocumentsEntry = new Documents();
    this.DGEntryAction = "Save";

    this.DocuemntGroupsEntryfrm.reset();

  }

  ResetDocumentGroupsSearchForm() {
    this.DocumentGroupsSearch = new DocumentGroups();

    this.DocumentsGroupSearchfrm.reset();



  }

  ResetDocumentsEntryForm() {
    this.DocumentsEntry = new Documents();
    this.DEntryAction = "Save";
    this.DocumentsEntryfrm.reset();

  }

  SaveDocuments() {
    this.setDocumentsValues()
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);
    if (this.DocumentsEntry.Id == null || this.DocumentsEntry.Id == undefined) {
      this.DocumentsEntry.GroupId = this.DocumentGroupsEntry.Id;

       this.DocumentsEntry.CreationUser= this.loggedInUser.userName;

       this.doc.SaveDocuments(this.DocumentsEntry).subscribe(doc => {
        this.GetDocuments(); this.DocumentsEntry.Id = doc
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushMessage("success", "Success", "Record Saved Successfully");
      }, err => {

        console.log(err)
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushError(err);

      })

    }
    else {
      this.loading = true;
      this.cs.showOrHideSpinner(this.loading);

      this.DocumentsEntry.ModificationUser= this.loggedInUser.userName;

      this.doc.UpdateDocuments(this.DocumentsEntry).subscribe(doc => {
        this.GetDocuments();
        this.RequiredDGEvent= { field: "", value: "" };
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushMessage("success", "Success", "Record Updated Successfully");
      }, err => {

        console.log(err)
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushError(err);

      })

    }

  }


  SaveDocumentGroups() {

    this.setDocumentGroupsValues();
    if (this.DocumentGroupsEntry.Id == null || this.DocumentGroupsEntry.Id == undefined) {
      this.loading = true;
      this.cs.showOrHideSpinner(this.loading);

      this.DocumentGroupsEntry.CompanyId= this.loggedInUser.companyId;
      this.DocumentGroupsEntry.CreationUser= this.loggedInUser.userName;

      this.docg.SaveDocumentGroups(this.DocumentGroupsEntry).subscribe(docg => {
        this.SearchDocumentGroups();
        this.DocumentGroupsEntry.Id = docg;
        console.log(this.DocumentGroupsEntry.Id);
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushMessage("success", "Success", "Record Saved Successfully");
      }, err => {
        console.log(err)
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushError(err);
      })

    }
    else {
      this.loading = true;
      this.cs.showOrHideSpinner(this.loading);

      this.DocumentGroupsEntry.CompanyId= this.loggedInUser.companyId;
      this.DocumentGroupsEntry.ModificationUser= this.loggedInUser.userName;


      this.docg.UpdateDocumentGroups(this.DocumentGroupsEntry).subscribe(docg => {
        this.setDocumentGroupsValues()
        this.SearchDocumentGroups();
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushMessage("success", "Success", "Record Updated Successfully");
      }, err => {
        console.log(err)
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushError(err);
      })

    }

  }

  RemoveDocuments() {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);

    this.doc.RemoveDocuments(this.DocumentsEntry).subscribe(doc => {
      this.GetDocuments();
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
      this.cs.pushMessage("success", "Success", "Record Removed Successfully");

    }, err => {
      console.log(err)
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
      this.cs.pushError(err);
    })

  }


  RemoveDocumentGroups() {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);
    this.docg.RemoveDocumentGroups(this.DocumentGroupsEntry).subscribe(docg => {
      this.SearchDocumentGroups();
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
      this.cs.pushMessage("success", "Success", "Record Removed Successfully");
    }, err => {
      console.log(err)
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
      this.cs.pushError(err);
    })

  }



  GetDocuments() {
    this.DocumentGroupsEntry.CompanyId= this.loggedInUser.companyId;

    this.doc.GetDocuments(this.DocumentGroupsEntry).subscribe(doc => { this.DocumentsGrid = doc; console.log(this.DocumentGroupsGrid) }, err => { console.log(err); this.DocumentGroupsGrid = new Array<DocumentGroups>(); })

  }

  GetDocumentEntry(Id: number, CompanyId: number) {

    this.doc.GetDocumentEntry(Id, CompanyId).subscribe(doc => {
      this.DocumentsEntry = doc;
       this.GetDocumentsValues();
       if (this.RequiredDGEvent.field == "IsRequired") {
        if (this.RequiredDGEvent.value == true) { this.DocumentsEntry.IsRequired = 1 } else { this.DocumentsEntry.IsRequired = 0 }
        this.SaveDocuments()
            }
    }, err => { console.log(err); this.DocumentsEntry = new Documents(); })

  }


  GetDocumentGroupEntry(Id: number, CompanyId: number) {

    this.docg.GetDocumentGroupEntry(Id, CompanyId).subscribe(docg => {
      this.DocumentGroupsEntry = docg;
      this.GetDocumentGroupsValues()
      this.InsuranceSystemValuechangeEntry(docg.SystemId);
      this.InsuranceClassesValuechangeEntry(docg.ClassId);
      this.GetDocuments();
    }, err => { console.log(err); this.DocumentGroupsEntry = new Documents(); })

  }

  RequiredCheckboxChange(event: any) {

    this.RequiredDGEvent = event;

  }




  InsuranceSystemValuechangeSearch(event: any) {
    
    this.cs.getInsuranceClasses(event, this.loggedInUser.companyId).subscribe(data => {

      this.InsuranceClassesSearch = data
      this.InsuranceClassesSearch.unshift({ label: "", value: "" })
    }, err => { console.log(err); });

  }

  InsuranceClassesValuechangeSearch(event: any) {

    this.cs.getSubLineofBusiness(event, this.loggedInUser.companyId).subscribe(data => {

      this.ClassesPolicyTypesSearch = data
      this.ClassesPolicyTypesSearch.unshift({ label: "", value: "" })
    }, err => { console.log(err); });

  }


  InsuranceSystemValuechangeEntry(event: any) {
    this.cs.getInsuranceClasses(event, this.loggedInUser.companyId).subscribe(data => {

      this.InsuranceClassesEntry = data;
      this.InsuranceClassesEntry.unshift({ label: "", value: "" })
    },
      err => { console.log(err); });

//the apply to code will apply after domain value is done
    /*this.cs.getDomainValues(0, event, 1).subscribe(data => {
      this.InsuranceApplytoEntry = data
    }, err => { console.log(err); });*/

  }

  InsuranceClassesValuechangeEntry(event: any) {

    this.cs.getSubLineofBusiness(event, this.loggedInUser.companyId).subscribe(
      data => {
        this.ClassesPolicyTypesEntry = data;
        this.ClassesPolicyTypesEntry.unshift({ label: "", value: "" })
      },
      err => { console.log(err); });

  }





  createForm() {


    this.DocumentsGroupSearchfrm = this.cs.fb.group({
      SystemId: [''],
      ClassId: [''],
      PolicyType: [''],
      Name: ['']

    });

    this.DocuemntGroupsEntryfrm = this.cs.fb.group({
      SystemId: ['', [Validators.required]],
      ClassId:  [''],
      PolicyType:  [''],
      Name: ['', [Validators.required]],
      Name2: [''],
      type:  [''],
      Notes: ['']

    });


    this.DocumentsEntryfrm = this.cs.fb.group({
      Name: ['', [Validators.required]],
      Name2: [''],
      Notes: ['']

    });


  }


  setDocumentGroupsValues() {

    this.DocumentGroupsEntry.SystemId = this.DocuemntGroupsEntryfrm.value.SystemId;
    this.DocumentGroupsEntry.ClassId = this.DocuemntGroupsEntryfrm.value.ClassId;
    this.DocumentGroupsEntry.PolicyType = this.DocuemntGroupsEntryfrm.value.PolicyType;
    this.DocumentGroupsEntry.Name = this.DocuemntGroupsEntryfrm.value.Name;
    this.DocumentGroupsEntry.Name2 = this.DocuemntGroupsEntryfrm.value.Name2;
    this.DocumentGroupsEntry.type = this.DocuemntGroupsEntryfrm.value.type;
    this.DocumentGroupsEntry.Notes = this.DocuemntGroupsEntryfrm.value.Notes;

  }


  GetDocumentGroupsValues() {
    this.DocuemntGroupsEntryfrm.patchValue({
      SystemId: this.DocumentGroupsEntry.SystemId,
      ClassId: this.DocumentGroupsEntry.ClassId.toString(),
      PolicyType: this.DocumentGroupsEntry.PolicyType.toString(),
      Name: this.DocumentGroupsEntry.Name,
      Name2: this.DocumentGroupsEntry.Name2,
      type: this.DocumentGroupsEntry.type,
      Notes: this.DocumentGroupsEntry.Notes
    })

  }


  setDocumentsValues() {

    this.DocumentsEntry.Name = this.DocumentsEntryfrm.value.Name;
    this.DocumentsEntry.Name2 = this.DocumentsEntryfrm.value.Name2;
    this.DocumentsEntry.Notes = this.DocumentsEntryfrm.value.Notes;

  }


  GetDocumentsValues() {
    this.DocumentsEntryfrm.patchValue({
      Name: this.DocumentsEntry.Name,
      Name2: this.DocumentsEntry.Name2,
      Notes: this.DocumentsEntry.Notes
    })

  }


  setDocumentGroupsSearchValues() {

    this.DocumentGroupsSearch.SystemId = this.DocumentsGroupSearchfrm.value.SystemId;
    this.DocumentGroupsSearch.ClassId = this.DocumentsGroupSearchfrm.value.ClassId;
    this.DocumentGroupsSearch.PolicyType = this.DocumentsGroupSearchfrm.value.PolicyType;
    this.DocumentGroupsSearch.Name = this.DocumentsGroupSearchfrm.value.Name;

  }


  GetDocumentGroupsSearchValues() {
    this.DocumentsGroupSearchfrm.patchValue({
      SystemId: this.DocumentGroupsSearch.SystemId,
      ClassId: this.DocumentGroupsSearch.ClassId.toString(),
      PolicyType: this.DocumentGroupsSearch.PolicyType.toString(),
      Name: this.DocumentGroupsSearch.Name
    })

  }



}
