import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../shared/services/common.service';
import { DomainId, Application, FacOutward, FacOutwardInstallments, FacInward, CustomerRole, CompanyType, FacOutwardAttachments, NumberTypes } from '../models/data-models';
import { SelectItem } from 'primeng/api';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { FacOutwardService } from '../shared/services/fac-outward.service';
import { FacOutwardInstallmentsService } from '../shared/services/fac-outward-installments.service';
import { FacultativeProcessingService } from '../shared/services/FacultativeProcessingService';
import { FacOutwardAttachmentsService } from '../shared/services/fac-outward-attachments.service';
import { FileUploadComponent } from '../shared/controls/file-upload/file-upload.component';
import { NumericPipe } from '../shared/pipes/numeric.pipe';

@Component({
  selector: 'ribms-fac-outward',
  templateUrl: './fac-outward.component.html',
  styleUrls: ['./fac-outward.component.scss']
})
export class FacOutwardComponent extends BaseComponentComponent implements OnInit, OnChanges {
  facOutwardForm: FormGroup;
  @ViewChild('fileUploader') fileUploader: FileUploadComponent;

  @Input() krnFacInwardId: number = 0;
  model: FacOutward = new FacOutward();
  modelInstallments: FacOutwardInstallments = new FacOutwardInstallments();
  modelFacInward: FacInward = new FacInward();
  FacCompanyName: string = "";

  selectedItem: FacOutward = new FacOutward();
  selectedItems: FacOutward[] = [];
  selectedAttachments: FacOutwardAttachments[] = [];
  FacOutwardAttachments: FacOutwardAttachments[] = [];

  insuranceCompanyList: SelectItem[];
  insuranceCompanySuggestions: SelectItem[] = [];
  paymentFrequencyList: SelectItem[];
  statusList: SelectItem[];

  loading: boolean = false;
  showSaveUpdate: boolean = false;
  showSaveUpdateInstallments: boolean = false;
  show: boolean = false;

  summationPercentage: number;

  constructor(private cs: CommonService, private facOutwardService: FacOutwardService, private facOutwardInstallmentsService: FacOutwardInstallmentsService,
    private facOutwardAttachmentsService: FacOutwardAttachmentsService, private facultativeProcessingService: FacultativeProcessingService, private numericPipe: NumericPipe) {
    super();
  }

  gridHeader: string = 'Fac. Outward Distributions';
  rows: any[] = [];
  facultativeOuts: FacOutward[] = [];
  cols: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "FacCompanyName", header: "FAC Company Name", hidden: false },
    { field: "SigningDownShare", header: "Signing Down Share %", hidden: false, percentColumn: true },
    { field: "FacPremiumAmt", header: "FAC Premium", hidden: false },
    { field: "CommPer", header: "Commission", hidden: false, percentColumn: true },
    { field: null, header: "Installments", hidden: false, commandCol: true, commandName: 'View Installments' },
    { field: "Status", header: "Status", hidden: false },
    { field: null, header: "Voucher", hidden: false, commandCol: true, commandName: 'Create Voucher' }];

  gridHeaderInstallments: string = 'Table of Installments';
  rowsInstallments: FacOutwardInstallments[] = [];
  colsInstallments: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "DueDate", header: "Due Date", hidden: false, editableDateCol: true, requiredCol: true },
    { field: "SigningDownSharePer", header: "Percentage %", hidden: false, editablePercentCol: true, requiredCol: true },
    { field: "CrgCurCode", header: "Currency", hidden: false },
    { field: "FacPremiumAmt", header: "Fac Premium Amount", hidden: false },
    { field: "CommPer", header: "Commission", hidden: false },
    { field: "InsuranceCompany", header: "Insurance Company", hidden: false }];

  rowsAttachments: FacOutwardAttachments[] = [];
  colsAttachments: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "KrnFacOutwardId", header: "FacOutwardId", hidden: true },
    { field: "Serial", header: "Serial", hidden: true },
    { field: "AttachmentPath", header: "Attachment Path", hidden: false },
    { field: "Notes", header: "Note", hidden: true },
    { field: null, header: "Download File", hidden: false, commandCol: true, commandName: "Download File"}
  ]
  
  ngOnInit() {
    this.cs.getDomainValues(DomainId.CompanyType, Application.ReinsuranceBMS)
      .subscribe(insuranceCompanies => {
        this.insuranceCompanyList = insuranceCompanies;
      });

    this.cs.getDomainValues(DomainId.InstallmentCycle, Application.ReinsuranceBMS)
      .subscribe(paymentFrequencies => {
        this.paymentFrequencyList = paymentFrequencies;
      });

    this.cs.getDomainValues(DomainId.FacInStatus, Application.ReinsuranceBMS)
      .subscribe(status => {
        this.statusList = status;
      });

    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getFacInwardInfo(changes.krnFacInwardId);
  }

  createForm() {
    this.facOutwardForm = this.cs.fb.group({
      insuranceCompany: ['', Validators.required],
      insuranceCompanySugg: ['', Validators.required],
      sumInsured: [{ value: 0, disabled: true }],
      signingDownShare: [0, Validators.required],
      commission: [0, Validators.compose([Validators.required, Validators.max(100)])],
      facPremium: [0, Validators.required],
      facPremiumShare: [0, Validators.required],
      deductibleAmount: [0, Validators.required],
      excessAmount: [0, Validators.required],
      paymentFrequency: ['', Validators.required],
      uploadFile: '',
      notes: '',
      status: ['', Validators.required],
    });
    this.showSaveUpdate = false;
  }

  resetForm() {
    this.createForm();
    this.cs.resetForm(this.facOutwardForm);
    this.createForm();
    this.model = new FacOutward();
    this.modelInstallments = new FacOutwardInstallments();
    this.fileUploader.clearFileUploader();

    if (this.modelFacInward) {
      this.facOutwardForm.controls.sumInsured.patchValue(this.numericPipe.transform(this.modelFacInward.BaseSumInsured, NumberTypes.Decimal, '1.2-2'));
    }    
  }

  fillInsuranceCompany(event) {
    let query = event.query;
    if (this.facOutwardForm.value.insuranceCompany == "" || this.facOutwardForm.value.insuranceCompany == null)
      this.cs.getSuggestCompanies(1, CustomerRole.InsuranceCompany, 1, query).subscribe(
        data => this.insuranceCompanySuggestions = data,
        err => console.log(err)
      );
    else
      this.cs.getSuggestCompanies(1, this.facOutwardForm.controls.insuranceCompany.value, 1, query).subscribe(
        data => this.insuranceCompanySuggestions = data,
        err => console.log(err)
      );
  }
  
  OnCheckboxSelected(selectedRows: FacOutward[]) {
    this.selectedItems = selectedRows;
  }

  OnCheckboxSelectedAttachments(selectedRows: FacOutwardAttachments[]) {
    this.selectedAttachments = selectedRows;
  }

  OnLinkSelected(event: any) {
    if (event.commandCol.commandName == "View Installments")
      this.viewInstallments(event.commandRow);
    else if (event.commandCol.commandName == "Create Voucher")
      this.createVoucher();
  }

  OnRowClicked(selectedRow: FacOutward) {
    this.selectedItem = selectedRow;
    this.facOutwardService.getData(this.selectedItem.Id, 1).subscribe(data => {
      this.model = data.model;
      this.FacCompanyName = data.FacCompanyName;
      this.rowsAttachments = data.model.KrnFacOutwardAttachments;
      if (this.model.Id > 0) {
        this.setFormValues();
        this.showSaveUpdate = true;
      }
    });
  }

  setFormValues() {
    this.facOutwardForm.patchValue({
      insuranceCompany: CompanyType.InsuranceCompany.toString(),
      insuranceCompanySugg: { value: this.model.FcsCstId.toString(), label: this.FacCompanyName },
      signingDownShare: this.numericPipe.transform(this.model.SigningDownShare, NumberTypes.Percentage, '1.2-2'),
      commission: this.numericPipe.transform(this.model.CommPer, NumberTypes.Percentage, '1.2-2'),
      facPremium: this.numericPipe.transform(this.model.FacPremiumAmt, NumberTypes.Decimal, '1.2-2'),
      facPremiumShare: this.numericPipe.transform(this.model.FacPremiumForShare, NumberTypes.Decimal, '1.2-2'),
      deductibleAmount: this.numericPipe.transform(this.model.DeductibleAmnt, NumberTypes.Decimal, '1.2-2'),
      excessAmount: this.numericPipe.transform(this.model.ExcessAmnt, NumberTypes.Decimal, '1.2-2'),
      paymentFrequency: this.model.InstallmentCycle.toString(),
      uploadFile: this.model.AttachmentPath,
      notes: this.model.Notes,
      status: this.model.Status.toString(),
    });    
  }

  setModelValues() {
    this.model.KrnFacInwardId = this.krnFacInwardId;
    this.model.FcsCstId = this.facOutwardForm.value.insuranceCompanySugg.value;
    this.model.SigningDownShare = this.numericPipe.parse(this.facOutwardForm.value.signingDownShare);
    this.model.CommPer = this.numericPipe.parse(this.facOutwardForm.value.commission);
    this.model.FacPremiumAmt = this.numericPipe.parse(this.facOutwardForm.value.facPremium);
    this.model.FacPremiumForShare = this.numericPipe.parse(this.facOutwardForm.value.facPremiumShare);
    this.model.DeductibleAmnt = this.numericPipe.parse(this.facOutwardForm.value.deductibleAmount);
    this.model.ExcessAmnt = this.numericPipe.parse(this.facOutwardForm.value.excessAmount);
    this.model.InstallmentCycle = this.facOutwardForm.value.paymentFrequency;
    this.model.AttachmentPath = this.facOutwardForm.value.uploadFile;
    this.model.Notes = this.facOutwardForm.value.notes;
    this.model.Status = this.facOutwardForm.value.status;

    this.model.KrnFacOutwardAttachments = this.FacOutwardAttachments;
  }

  saveUpdateFacOutward() {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);
    this.setModelValues();
    if (this.model.Id > 0) {
      this.model.ModifiedBy = "admin";// this.cs.getLoggedInUser().userName;
      this.model.ModificationDate = new Date;
      this.facOutwardService.put(this.model, this.modelFacInward.BaseGrossPrem, this.modelFacInward.BaseGrossPremForShare).subscribe(
        data => {
          this.model = data;
          this.setFormValues();
          this.getFacOutwards(this.krnFacInwardId, 1);
          this.getFacOutwardsAttachments(this.model.Id);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.showSaveUpdate = true;
        },
        err => {
          console.log(err);
          this.cs.pushError(err);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
        }
      );
    }
    else {
      this.model.CreatedBy = "admin";// this.cs.getLoggedInUser().userName;
      this.model.CreationDate = new Date;
      this.facOutwardService.post(this.model, this.modelFacInward.BaseGrossPrem, this.modelFacInward.BaseGrossPremForShare).subscribe(
        data => {
          this.model = data;
          this.setFormValues();
          this.getFacOutwards(this.krnFacInwardId, 1);
          this.getFacOutwardsAttachments(this.model.Id);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.cs.pushMessage("success", "Success", "Record Saved Successfully");
          this.showSaveUpdate = true;
        },
        err => {
          console.log(err);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.cs.pushError(err);
        });
    }
  }

  saveUpdateFacOutwardInstallments() {
    this.summationPercentage = 0;
    this.rowsInstallments.forEach(row => {
      this.summationPercentage += this.numericPipe.parse(row.SigningDownSharePer);
    });
    if (this.summationPercentage != 100) {
      this.cs.pushMessage("error", "error", "Ins. Share must equal 100%");
      return;
    }

    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);
    if (this.model.Id > 0) {
      this.model.ModifiedBy = this.cs.getLoggedInUser().userName;
      this.model.ModificationDate = new Date;
      this.facOutwardInstallmentsService.put(this.rowsInstallments).subscribe(
        data => {
          this.rowsInstallments = data;
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.showSaveUpdateInstallments = true;
        },
        err => {
          console.log(err);
          this.cs.pushError(err);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
        }
      )
    }
    else {
      this.model.CreatedBy = this.cs.getLoggedInUser().userName;
      this.model.CreationDate = new Date;
      this.facOutwardInstallmentsService.post(this.rowsInstallments).subscribe(
        data => {
          this.rowsInstallments = data;
          console.log(data);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.cs.pushMessage("success", "Success", "Record Saved Successfully");
          this.showSaveUpdateInstallments = true;
        },
        err => {
          console.log(err);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.cs.pushError(err);
        });
    }
  }

  getFacInwardInfo(facInwardId: SimpleChange) {
    this.resetForm();

    if (facInwardId.currentValue > 0) {
      this.facultativeProcessingService.getData(facInwardId.currentValue).subscribe(
        data => {
          this.modelFacInward = data;
          this.facOutwardForm.controls.sumInsured.patchValue(this.numericPipe.transform(this.modelFacInward.BaseSumInsured, NumberTypes.Decimal, '1.2-2'));
        }
      );
      this.getFacOutwards(facInwardId.currentValue, 1);
    }
  }

  getFacOutwards(facInwardId: number, companyId: number) {
    this.facOutwardService.getByInwardId(facInwardId, companyId).subscribe(
      data => {
        this.rows = data;
      });
  }

  getFacOutwardsAttachments(facOutwardId: number) {
    this.selectedItems = [];
    this.facOutwardAttachmentsService.get(facOutwardId).subscribe(
      data => {
        this.rowsAttachments = data;
      });
  }

  deleteFacOutwards() {
    if (this.selectedItems === undefined || this.selectedItems.length == 0) {
      this.cs.pushMessage("warn", "Warn Message", "No rows selected.");
    }
    else {
      this.cs.confirmationService.confirm({
        message: 'Are you sure you want to delete these records?',
        header: 'Delete Confirmation',
        icon: 'fa fa-trash',
        accept: () => {
          this.loading = true;
          this.cs.showOrHideSpinner(this.loading);
          this.facOutwardService.deleteBulk(this.selectedItems, 1).subscribe(
            data => {
              this.resetForm();
              this.getFacOutwards(this.krnFacInwardId, 1);
              this.loading = false;
              this.selectedItems = [];
              this.cs.showOrHideSpinner(this.loading);
              this.cs.pushMessage("success", "Success", "Record Deleted Successfully");
            },
            err => {
              console.log(err);
              this.loading = false;
              this.cs.showOrHideSpinner(this.loading);
              this.cs.pushError(err);
            }
          )
        },
        reject: () => {
          this.selectedItems = [];
        }
      });
    }
  }

  deleteFacOutwardAttachments() {
    if (this.selectedAttachments === undefined || this.selectedAttachments.length == 0) {
      this.cs.pushMessage("warn", "Warn Message", "No rows selected.");
    }
    else {
      this.cs.confirmationService.confirm({
        message: 'Are you sure you want to delete these records?',
        header: 'Delete Confirmation',
        icon: 'fa fa-trash',
        accept: () => {
          this.loading = true;
          this.cs.showOrHideSpinner(this.loading);
          this.facOutwardAttachmentsService.deleteBulkAttachments(this.selectedAttachments).subscribe(
            data => {
              this.getFacOutwardsAttachments(this.selectedItem.Id);
              this.loading = false;
              this.selectedAttachments = [];
              this.cs.showOrHideSpinner(this.loading);
              this.cs.pushMessage("success", "Success", "Record Deleted Successfully");
            },
            err => {
              this.selectedAttachments = [];
              console.log(err);
              this.loading = false;
              this.cs.showOrHideSpinner(this.loading);
              this.cs.pushError(err);
            }
          )
        },
        reject: () => {
          this.selectedAttachments = [];
        }
      });
    }
  }

  uploadHandler(event: string[]) {
    let FacOutAttachment = new FacOutwardAttachments();
    this.FacOutwardAttachments = [];

    event.forEach(attachment => {
      FacOutAttachment.AttachmentPath = attachment;
      this.FacOutwardAttachments.push(FacOutAttachment);
    });
  }

  viewInstallments(item: any) {
    this.model = item;
    this.facOutwardInstallmentsService.getInstallments(this.model.Id).subscribe(      
      data => {
        this.rowsInstallments = data },
      err => console.log(err)
    );
    this.show = true;
  }

  createVoucher() {
  }

  closePopupInstallments() {
    this.show = false;
  }

  viewFile() {
  }
}
