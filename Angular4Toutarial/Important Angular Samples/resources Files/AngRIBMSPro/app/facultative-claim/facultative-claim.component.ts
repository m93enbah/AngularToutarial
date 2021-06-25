import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FacClaims, DomainId, Application, FacClaimDetails, Currency, FacInward, FacClaimAttachments, NumberTypes } from '../models/data-models';
import { SelectItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { CommonService } from '../shared/services/common.service';
import { Router } from '@angular/router';
import { FacultativeClaimService } from '../shared/services/FacultativeClaimService';
import { Observable } from 'rxjs';
import { ControlTextbox } from '../shared/controls/search-dialog/control-textbox';
import { ControlDropdown } from '../shared/controls/search-dialog/control-dropdown';
import { ControlBase } from '../shared/controls/search-dialog/control-base';
import { ControlCalendar } from '../shared/controls/search-dialog/control-calendar';
import { SearchDialogComponent} from '../shared/controls/search-dialog/search-dialog.component';
import { DatePipe } from '@angular/common';
import { ControlAutoComplete } from '../shared/controls/search-dialog/control-autocomplete';
import { CurrencyComponent } from '../shared/controls/currency/currency.component';
import { error } from '@angular/compiler/src/util';
import { FacOutwardService } from '../shared/services/fac-outward.service';
import { DataTable } from 'primeng/primeng';
import { DatatableComponent } from '../shared/controls/datatable/datatable.component';
import { TooltipModule } from 'primeng/tooltip';
import { FacClaimAttachmentsService } from '../shared/services/fac-claim-attachments.service';
import { FileUploadComponent } from '../shared/controls/file-upload/file-upload.component';
import { NumericPipe } from '../shared/pipes/numeric.pipe';

@Component({
  selector: 'ribms-facultative-claim',
  templateUrl: './facultative-claim.component.html',
  styleUrls: ['./facultative-claim.component.scss']
})
export class FacultativeClaimComponent extends BaseComponentComponent implements OnInit, OnChanges{

  //Initialize properities
  IncreaseDecrease: any;
  tdInstallments: any;
  //End

  facClaimForm: FormGroup;
  facClaimDetailForm: FormGroup;
  @Input() krnFacInwardId: number = 0;
  claimControlList: SelectItem[];
  countriesLst: SelectItem[];
  reinsurerLst: any[] = [];

  calenderDateFormat = environment.calenderDateFormat;
  
  claim: FacClaims = new FacClaims();
  claimDetail: FacClaimDetails = new FacClaimDetails();

  clmCur: Currency = new Currency();
  clmSetCur: Currency = new Currency();
  @ViewChild('clmChldCur') private claimCurrency: CurrencyComponent;
  @ViewChild('clmChldSetCur') private claimSetCurrency: CurrencyComponent;


  inwardClaimSuggestions: SelectItem[];
  outwardClaimSuggestions: any[];

  showClaimSaveUpdate: boolean;

  showClaimDetailSaveUpdate: boolean;

  btnPolicyDetailsState: boolean;

  /*Claim Details GridView Part*/
  gridHeader: string = "Claim Details";
  clmDetailsRows: FacClaimDetails[];

  selectedAttachments: FacClaimAttachments[] = [];
  FacClaimAttachments: FacClaimAttachments[] = [];
  @ViewChild('fileUploader') fileUploader: FileUploadComponent;

  cols: any[] =
    [
      { field: "Id", header: "Id", hidden: true },
      //{ field: "FacCompanyName", header: "Fac Company Name", hidden: false },
      { field: "SigningDownShare", header: "Signed Line %", hidden: false },
      { field: "ClaimAmount", header: "Claim Amount", hidden: false },
      { field: "ReserveAmountForShare", header: "Reserve Amount", hidden: false },
      { field: "PaidProportionAmount", header: "Paid Proportion", hidden: false },
      { field: "OutstandingAmount", header: "OutStanding Amount", hidden: false },
      { field: "LastPaymentDate", header: "Date Of Last Payment", dateColumn: true }
    ];
  reinsurerName: string = "";

  /*Claim Search Panel Part*/
  dialogTitle: string = "Faculative Claim Processing Search";
  searchTitle: string = "Search";
  resultTitle: string = "Faculative Claims"; 
  loading: boolean = false;
  show: boolean = false;
  claimCols: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "ClaimControl", header: "Claim Control", hidden: false },
    { field: "ClaimSourceRef", header: "Claim Source Ref", hidden: false },
    { field: "ClaimOurRef", header: "Claim Our Ref", hidden: false },
    { field: "DateLoss", header: "Date Of Loss", dateColumn: true },
    { field: "ClaimAmount", header: "Claim Amount", hidden: false },
    { field: "DateFirstAdvice", header: "Date of 1st Advice", dateColumn: true },
    { field: "ClaimReserveAmount", header: "Claim Reserve Amount", hidden: false },
    { field: "DateFirstReserve", header: "DateFirstReserve", dateColumn: true }
    //{ field: "lossLocation", header: "Loss Location", hidden: false },
    //{ field: "lossAdjuster", header: "Loss Adjuster", hidden: false }
  ];
  claimRows: any[];

  rowsAttachments: FacClaimAttachments[] = [];
  colsAttachments: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "KrnFacClaimId", header: "KrnFacClaimId", hidden: true },
    { field: "Serial", header: "Serial", hidden: true },
    { field: "AttachmentPath", header: "Attachment Path", hidden: false },
    { field: "Notes", header: "Note", hidden: true },
    { field: null, header: "Download File", hidden: false, commandCol: true, commandName: "Download File" }];

  controls: ControlBase<any>[] = [];

  constructor(private cs: CommonService, private _router: Router, private fcs: FacultativeClaimService, private fos: FacOutwardService,
    private dp: DatePipe, private facClaimAttachmentsService: FacClaimAttachmentsService, private numericPipe: NumericPipe)
  { super(); }

  ngOnInit() {
    this.performSettings();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fillClaimInwardAndOutwards(changes.krnFacInwardId.currentValue)
  }

  performSettings()
  {
    this.fillClaimDropDownList();
    this.createClaimForm();
    this.createClaimDetailForm();
    this.bindEvents();

    this.fillClaimInwardSuggest("");
    if (this.krnFacInwardId > 0)
    {
      this.fillClaimInwardAndOutwards(this.krnFacInwardId);
    }

    if (this.claim.Id > 0) {
      this.btnPolicyDetailsState = true;
      if (this.claimDetail != null) {
      }
    }
    else {
      this.btnPolicyDetailsState = false;
    }
    this.generateSearchControls();
    this.fillClaimDropDownList();
    this.showClaimDetailSaveUpdate = false;
    this.showClaimSaveUpdate = false;
  }


  fillClaimInwardAndOutwards(krnFacInwardID: number) {
    this.fillClaimInwardSuggest("");
    this.facClaimForm.patchValue(
      {
        claimInward: {
          label: this.inwardClaimSuggestions.filter(i => i.value == krnFacInwardID.toString())[0].label,
          value: krnFacInwardID
        }
      });
    this.fillReinsurer(krnFacInwardID);
  }

  fillClaimDropDownList()
  {
    this.cs.getDomainValues(DomainId.ClaimControlType, Application.ReinsuranceBMS)
      .subscribe(data => this.claimControlList = data);
    this.fillCountries();
  }

  fillCountries() {
    this.cs.getCountries("").subscribe(
      data => {
        this.countriesLst = data
      },
      error => { console.log(error); });
  }

  fillClaimInwardSuggest(event) {
    let query = (event.query != null) ? event.query : "";

    this.fcs.FillClaimsInward(query).subscribe(
      (data) => {
        this.inwardClaimSuggestions = data;
      },
      err => console.log(err)
    );
  }

  fillReinsurer(event)
  {
    if (this.facClaimForm.value.claimInward.value > 0) {
      let query = (event.query != null) ? event.query : "";
      this.fos.getByInwardId(this.facClaimForm.value.claimInward.value, 1).subscribe(
        (data) => {
          this.reinsurerLst = data;
        },
        err => console.log(err)
      );
    }
    else
    {
      this.cs.pushMessage("error", "Errors", "Please Choose Claim Inward First!");
    }
  }

  createClaimForm() {
    this.facClaimForm = this.cs.fb.group({
      claimInward:['',[Validators.required]],
      claimControl: ['', [Validators.required]],
      sourceClaimReference: ['', [Validators.required]],
      ourClaimReference:['',[Validators.required]],
      dateOfLoss: ['', [Validators.required]],
      claimAmount: ['', [Validators.required]],
      dateFirstAdvice: ['', [Validators.required]],
      claimReverseAmount: ['', [Validators.required]],
      dateFirstReserve: ['', [Validators.required]],
      lossLocation: ['', [Validators.required]],
      lossAdjuster: [''],
      claimDescription: ['', [Validators.required]],
      subRegionRecovery: [''],
      dateClosed: [''],
      claimHandler: [''],
      comments: ['', [Validators.required]],
      attachments:['']

    });
  }

  createClaimDetailForm()
  {
    this.facClaimDetailForm = this.cs.fb.group({
      reinsurer: ['', [Validators.required]],
      dateOfFirstAdvise: ['', [Validators.required]],
      signedLine: ['', [Validators.required]],
      claimAmountForShare: ['', [Validators.required]],
      reserveAmountForShare: ['', [Validators.required]],
      paidPropotion: ['', [Validators.required]],
      outStandingAmount: ['', [Validators.required]],
      dateOfLastPayment: ['', [Validators.required]],
      comments: ['', [Validators.required]]
    });
  }



  bindEvents() {

    const claimAmountChanges$ = this.facClaimForm.controls.claimAmount.valueChanges;
    const claimReverseAmountChanges$ = this.facClaimForm.controls.claimReverseAmount.valueChanges;
    const signedLineAmountChanges$ = this.facClaimDetailForm.controls.signedLine.valueChanges;
    const paidPropotionAmountChanges$ = this.facClaimDetailForm.controls.paidPropotion.valueChanges;
    const claimAmountForShareChanges$ = this.facClaimDetailForm.controls.claimAmountForShare.valueChanges;

    const reinsurerChanges$ = this.facClaimDetailForm.controls.reinsurer.valueChanges;

    reinsurerChanges$.subscribe(krnFacOutward => {
      if (krnFacOutward != null) { 
        this.fos.getData(krnFacOutward.Id , 1).subscribe(FacOutward => {
        this.claimDetail.FcsCstId = FacOutward.model.FcsCstId;
        })
      }
    });

    claimAmountChanges$.subscribe(claimAmount => {
      if (this.facClaimDetailForm.controls.signedLine.value != "") {
        this.facClaimDetailForm.patchValue(
          {
            claimAmountForShare: claimAmount * this.numericPipe.parse(this.facClaimDetailForm.controls.signedLine.value)
          }
        );
      }
    });

    claimReverseAmountChanges$.subscribe(claimReverse => {
      if (this.facClaimDetailForm.controls.signedLine.value != "") {
        this.facClaimDetailForm.patchValue(
          {
            reserveAmountForShare: claimReverse * this.numericPipe.parse(this.facClaimDetailForm.controls.signedLine.value)
          }
        );
      }
    });
  
    signedLineAmountChanges$.subscribe(signedLinePercent => {
      if (this.facClaimForm.controls.claimAmount.value != null && this.facClaimForm.controls.claimReverseAmount.value != null) {
        this.facClaimDetailForm.patchValue(
          {
            reserveAmountForShare: this.numericPipe.parse(this.facClaimForm.controls.claimReverseAmount.value) * signedLinePercent,
            claimAmountForShare: this.numericPipe.parse(this.facClaimForm.controls.claimAmount.value) * signedLinePercent,
            outStandingAmount: (this.numericPipe.parse(this.facClaimForm.controls.claimAmount.value) * signedLinePercent) - (this.numericPipe.parse(this.facClaimDetailForm.controls.paidPropotion.value))

          }
        );
      }



    });

    paidPropotionAmountChanges$.subscribe(paidPropotionAmount => {

      if (this.facClaimDetailForm.controls.claimAmountForShare.value != null) {
        this.facClaimDetailForm.patchValue(
          {
            outStandingAmount: (this.numericPipe.parse(this.facClaimDetailForm.controls.claimAmountForShare.value)) - paidPropotionAmount

          }
        );
      }

    });

    claimAmountForShareChanges$.subscribe(claimAmount => {
      if (this.facClaimDetailForm.controls.paidPropotion.value != "") {
        this.facClaimDetailForm.patchValue(
          {
            outStandingAmount: claimAmount - this.numericPipe.parse(this.facClaimDetailForm.controls.paidPropotion.value)
          }
        );
      }

    });

  }

  resetClaimForm() {
    this.cs.resetForm(this.facClaimForm);
    this.createClaimForm();
    this.showClaimSaveUpdate = false;
    this.claimCurrency.beginAddMode();
    this.claimSetCurrency.beginAddMode();

    this.cs.resetForm(this.facClaimDetailForm);
    this.createClaimDetailForm();
    this.showClaimDetailSaveUpdate = false;
 
    this.claim = new FacClaims();
    this.claimDetail = new FacClaimDetails();

    this.claimRows = [];
    this.clmDetailsRows = [];
    this.fileUploader.clearFileUploader();
  }

  resetClaimDetailForm()
  {
    this.cs.resetForm(this.facClaimDetailForm);
    this.createClaimDetailForm();
    this.showClaimDetailSaveUpdate = false;
    this.showClaimDetails();
    this.claimDetail = new FacClaimDetails();
  }

  deleteFacClaim() {
    this.cs.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        if (this.claim.Id > 0) {
          this.loading = true;
          this.cs.showOrHideSpinner(this.loading);

          this.fcs.DeleteClaim(this.claim).subscribe(
            data => {
              this.resetClaimForm();
              this.resetClaimDetailForm();
              this.clmDetailsRows = null;
              this.claim = new FacClaims();
              this.claimDetail = new FacClaimDetails();
              this.showClaimDetails();
              this.loading = false;
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
        }
      },
      reject: () => {
      }
    });
  }

  deleteFacClaimDetail()
  {
    this.cs.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        if (this.claim.Id > 0) {
          this.loading = true;
          this.cs.showOrHideSpinner(this.loading);
          this.fcs.DeleteClaimDetails(this.claimDetail).subscribe(
            data => {
              this.resetClaimDetailForm();
              this.showClaimDetails();
              this.claimDetail = new FacClaimDetails();
              this.showClaimDetails();
              this.loading = false;
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
        }
      },
      reject: () => {
      }
    });
  }

  saveFacClaim()
  {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);
    this.mapClaimModel();
    if (this.claim.Id > 0) {
      //this.claim. = this.cs.getLoggedInUser().userName;
      this.claim.ModifiedBy = "ADMIN";
      this.claim.ModificationDate = new Date;
      this.fcs.PutClaim(this.claim).subscribe(
        data => {
          this.getFacClaimAttachments(this.claim.Id);
          this.claim = new FacClaims();
          this.claimDetail = new FacClaimDetails();
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.cs.pushMessage("success", "Success", "Record Updated Successfully");
          this.resetClaimForm();
          this.resetClaimDetailForm();
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
      //this.claim.CreatedBy = this.cs.getLoggedInUser().userName;
      this.claim.CreatedBy = "ADMIN";
      this.claim.CreationDate = new Date;
      this.fcs.PostClaim(this.claim).subscribe(
        data => {
          this.claim = data;
          this.getFacClaimAttachments(this.claim.Id);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.cs.pushMessage("success", "Success", "Record Added Successfully");
          this.resetClaimDetailForm();
          this.showClaimSaveUpdate = true;
        },
        err => {
          console.log(err);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.cs.pushError(err);
        });
    }
  }

  saveFacClaimDetail() {
    if (this.claim.Id > 0) {
      this.loading = true;
      this.cs.showOrHideSpinner(this.loading);
      this.mapClaimDetailModel();
        if (this.claimDetail.Id > 0) {
          //this.claimDetail.ModifiedBy = this.cs.getLoggedInUser().userName;
          this.claimDetail.ModifiedBy = "Admin";
          this.claimDetail.ModificationDate = new Date;
          this.fcs.PutClaimDetail(this.claimDetail).subscribe(
            data => {
              this.claimDetail = new FacClaimDetails();
              this.loading = false;
              this.cs.showOrHideSpinner(this.loading);
              this.cs.pushMessage("success", "Success", "Record Updated Successfully");
              this.resetClaimDetailForm();
              this.showClaimDetails();
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
          // this.claimDetail.CreatedBy = this.cs.getLoggedInUser().userName;
          this.claimDetail.CreatedBy = "Admin";
          this.claim.CreationDate = new Date;
          this.fcs.PostClaimDetail(this.claimDetail).subscribe(
            data => {
              this.claimDetail = data;
              this.loading = false;
              this.cs.showOrHideSpinner(this.loading);
              this.cs.pushMessage("success", "Success", "Record Added Successfully");
              this.showClaimDetailSaveUpdate = true;
              this.showClaimDetails();
              //  this.btnSaveClaimDetailState = true;
            },
            err => {
              console.log(err);
              this.loading = false;
              this.cs.showOrHideSpinner(this.loading);
              this.cs.pushError(err);
            });
        }
    }
    else {
      this.cs.pushMessage("error", "Errors", "Please Choose Claim First!");
    }

  }

  showClaimDetails()
  {
      this.fcs.GetClaimDetailsByClaimID(this.claim.Id).subscribe(
        (data) => {
          this.clmDetailsRows = data;
        },
        err => console.log(err));
  }

  mapClaimModel() {
    this.claim.KrnFacInwardId = this.facClaimForm.value.claimInward.value;
    
    this.claim.CamAppId = Application.ReinsuranceBMS;

    this.claim.UmrReference = null;

    this.claim.ClaimControl = this.facClaimForm.value.claimControl;
    this.claim.ClaimSourceRef = this.facClaimForm.value.sourceClaimReference;
    this.claim.ClaimOurRef = this.facClaimForm.value.ourClaimReference;


   
    this.claim.CrgCurCodeClaim = this.clmCur.CurrencyCode;
    this.claim.CrgCurCodeSett = this.clmSetCur.CurrencyCode;

    this.claim.Exrate = this.clmSetCur.ExrateValue;

    this.claim.ClaimAmount = this.numericPipe.parse(this.facClaimForm.value.claimAmount);
   
    
    this.claim.ClaimReserveAmount = this.numericPipe.parse(this.facClaimForm.value.claimReverseAmount);

   
    this.claim.LossLocation = this.facClaimForm.value.lossLocation;
   // this.claim.LossAdjuster = (this.facClaimForm.value.lossAdjuster != "") ? this.numericPipe.parse(this.facClaimForm.value.lossAdjuster) : null;

    this.claim.ClaimDescription = this.facClaimForm.value.claimDescription;

    this.claim.IsRecovery = (this.facClaimForm.value.subRegionRecovery) ? 1 : 0;
    

    this.claim.Comments = this.facClaimForm.value.comments;
    this.claim.ClaimHandler = (this.facClaimForm.value.claimhandler != "") ? this.facClaimForm.value.claimHandler : null;
    this.claim.AttachmentPath = (this.facClaimForm.value.attachments != "") ? this.facClaimForm.value.attachments : null;
    
    this.claim.DateLoss = this.facClaimForm.value.dateOfLoss;
    this.claim.DateFirstAdvice = this.facClaimForm.value.dateFirstAdvice;
    this.claim.DateFirstReserve = this.facClaimForm.value.dateFirstReserve;
    this.claim.DateClosed = this.facClaimForm.value.dateClosed;

    this.claim.KrnFacClaimAttachments = this.FacClaimAttachments;
  }

  mapClaimDetailModel() {

    this.claimDetail.KrnClmId = this.claim.Id;
    this.claimDetail.KrnFacOutwardId = this.facClaimDetailForm.value.reinsurer.Id;
 
    this.claimDetail.SigningDownShare = this.numericPipe.parse(this.facClaimDetailForm.value.signedLine);

    this.claimDetail.ClaimAmount = this.numericPipe.parse(this.facClaimDetailForm.value.claimAmountForShare);
    this.claimDetail.ClaimReserveAmount = this.numericPipe.parse(this.facClaimDetailForm.value.reserveAmountForShare);
    this.claimDetail.PaidProportionAmount = this.numericPipe.parse(this.facClaimDetailForm.value.paidPropotion);

    this.claimDetail.OutstandingAmount = this.numericPipe.parse(this.facClaimDetailForm.value.outStandingAmount);

    this.claimDetail.Comments = this.facClaimDetailForm.value.comments;


    this.claimDetail.DateFirstAdvice = this.facClaimDetailForm.value.dateOfFirstAdvise;
    this.claimDetail.LastPaymentDate = this.facClaimDetailForm.value.dateOfLastPayment;

    this.claimDetail.CrgCurCode = this.clmSetCur.CurrencyCode;
    this.claimDetail.Exrate = this.clmSetCur.ExrateValue;
  }

  onCheckboxSelected(selectedRows: FacClaims[])
  {
  }

  onRowSelected(lst: FacClaimDetails[])
  {
    console.log(lst);
  }

  generateSearchControls() {
    this.controls = null;
    this.controls = [
      new ControlAutoComplete({
        key: 'KrnFacInwardId',
        label: 'claim Inward',
        required: false,
        serviceUrl: environment.apiUrl + 'api/FacClaims/GetClaimInward/',
        order: 1
      })
      ,
      new ControlDropdown({
        key: 'claimControl',
        label: 'Claim Control',
        required: false,
        options: this.claimControlList,
        order: 2
      }),
      new ControlTextbox({
        key: 'sourceClaimReference',
        label: 'Source Claim Reference',
        required: false,
        order: 3
      }),
      new ControlTextbox({
        key: 'ourClaimReference',
        label: 'Our Claim Reference',
        required: false,
        order: 4
      }),
      new ControlAutoComplete({
        key: 'LossLocation',
        label: 'Loss Location',
        required: false,
        serviceUrl: environment.apiUrl + 'api/Helper/GetCountriesList?query',
        order: 5
      }),
      new ControlTextbox({
        key: 'LossAdjuster',
        label: 'Loss Adjuster',
        required: false,
        order: 6
      })
    ];
  }

  onClaimSearch(formValue: FacClaims) {
    formValue.KrnFacInwardId = (formValue.KrnFacInwardId["value"] != null) ? formValue.KrnFacInwardId["value"] : 0;
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);

    this.fcs.SearchClaims(formValue).subscribe(
      (data) => {
        this.claimRows = data;
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
      });
  }

  showModel() {
    this.show = true;
    this.generateSearchControls();
  }

  getSuggestVal(selectedRow: any) {
    console.log(selectedRow);
  }

  onSelectedClaimRow(selectedRow: any) {
    if (selectedRow.Id > 0) {      
      this.claim = selectedRow;
      this.getFacClaimAttachments(selectedRow.Id);
      this.setClaimFormValues();
      this.btnPolicyDetailsState = true;
      this.showClaimSaveUpdate = true;
      this.showClaimDetailSaveUpdate = false;
      this.showClaimDetails();
      this.fillReinsurer('');

      this.fileUploader.clearFileUploader();
      this.fcs.GetClaim(selectedRow.Id).subscribe(
        data => {
          this.claim.KrnFacClaimAttachments = data.KrnFacClaimAttachments;
        }
      )
    }
  }

  setClaimFormValues() {
    this.facClaimForm.patchValue(
      {
        claimInward: {
          label: this.claim.KrnFacInward.UmrReference,
          value: this.claim.KrnFacInwardId
        },
        claimControl: this.claim.ClaimControl.toString(),
        sourceClaimReference: this.claim.ClaimSourceRef,
        ourClaimReference: this.claim.ClaimOurRef,
        dateOfLoss: this.claim.DateLoss == null ? null : new Date(this.claim.DateLoss),
        claimAmount: this.numericPipe.transform(this.claim.ClaimAmount, NumberTypes.Decimal, '1.2-2'),
        dateFirstAdvice: this.claim.DateFirstAdvice == null ? null : new Date(this.claim.DateFirstAdvice),
        claimReverseAmount: this.numericPipe.transform(this.claim.ClaimReserveAmount, NumberTypes.Decimal, '1.2-2'),
        dateFirstReserve: this.claim.DateFirstReserve == null ? null : new Date(this.claim.DateFirstReserve),
        lossLocation: this.claim.LossLocation.toString(),
        lossAdjuster: this.numericPipe.transform(this.claim.LossAdjuster, NumberTypes.Decimal, '1.2-2'),
        claimDescription: this.claim.ClaimDescription,
        subRegionRecovery: Boolean(this.claim.IsRecovery),
        dateClosed: this.claim.DateClosed == null ? null : new Date(this.claim.DateClosed),
        claimHandler: this.claim.ClaimHandler,
        comments: this.claim.Comments,
        attachments: ['']
      }
    );
    this.clmCur.CurrencyCode = this.claim.CrgCurCodeClaim;
    this.clmSetCur.CurrencyCode = this.claim.CrgCurCodeSett;

    this.claimCurrency.editMode(this.clmCur.CurrencyCode);
    this.claimSetCurrency.editMode(this.clmSetCur.CurrencyCode);
  }

  OnCheckboxSelectedAttachments(selectedRows: FacClaimAttachments[]) {
    this.selectedAttachments = selectedRows;
  }

  onRowClicked(selectedRow: FacClaimDetails) {
    this.claimDetail = selectedRow;
    
    if (this.claim.Id > 0) {
      this.setClaimDetailFormValues();
      this.btnPolicyDetailsState = true;
      this.showClaimDetailSaveUpdate = true;
    }
  }

  setClaimDetailFormValues() {
    this.reinsurerName = this.reinsurerLst.filter(i => i.Id == this.claimDetail.KrnFacOutwardId)[0].FacCompanyName
    this.facClaimDetailForm.patchValue(
      {
        reinsurer: {
          FacCompanyName: this.reinsurerName,
          Id: this.claimDetail.KrnFacOutwardId
        },

        dateOfFirstAdvise: this.claimDetail.DateFirstAdvice == null ? null : new Date(this.claimDetail.DateFirstAdvice),
        signedLine: this.numericPipe.transform(this.claimDetail.SigningDownShare, NumberTypes.Percentage, '1.2-2'),
        claimAmountForShare: this.numericPipe.transform(this.claimDetail.ClaimAmount, NumberTypes.Decimal, '1.2-2'),
        reserveAmountForShare: this.numericPipe.transform(this.claimDetail.ClaimReserveAmount, NumberTypes.Decimal, '1.2-2'),
        paidPropotion: this.numericPipe.transform(this.claimDetail.PaidProportionAmount, NumberTypes.Decimal, '1.2-2'),
        outStandingAmount: this.numericPipe.transform(this.claimDetail.OutstandingAmount, NumberTypes.Decimal, '1.2-2'),
        dateOfLastPayment: this.claimDetail.LastPaymentDate == null ? null : new Date(this.claimDetail.LastPaymentDate),
        comments : this.claimDetail.Comments
      }
    )
  }

  getFacClaimAttachments(facClaimId: number) {
    this.facClaimAttachmentsService.get(facClaimId).subscribe(
      data => {
        this.rowsAttachments = data;
      });
  }

  deleteFacClaimAttachments() {
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
          this.facClaimAttachmentsService.deleteBulkAttachments(this.selectedAttachments).subscribe(
            data => {
              this.getFacClaimAttachments(this.claim.Id);
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
    let FacOutAttachment = new FacClaimAttachments();
    this.FacClaimAttachments = [];

    event.forEach(attachment => {
      FacOutAttachment.AttachmentPath = attachment;
      this.FacClaimAttachments.push(FacOutAttachment);
    });
  }
}
