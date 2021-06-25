import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FacInward, DomainId, Application, FacInwardInstallments, Currency, FacInwardPlt, CustomerRole, FacInwardAttachments, NumberTypes } from '../models/data-models';
import { SelectItem, } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { CommonService } from '../shared/services/common.service';
import { Router } from '@angular/router';
import { FacultativeProcessingService } from '../shared/services/FacultativeProcessingService';
import { Observable } from 'rxjs';
import { debug } from 'util';
import { ControlBase } from '../shared/controls/search-dialog/control-base';
import { ControlDropdown } from '../shared/controls/search-dialog/control-dropdown';
import { ControlAutoComplete } from '../shared/controls/search-dialog/control-autocomplete';
import { ControlTextbox } from '../shared/controls/search-dialog/control-textbox';
import { CurrencyComponent } from '../shared/controls/currency/currency.component';
import { FacInwardInstallmentsService } from '../shared/services/fac-inward-installments.service';
import { FileUploadComponent } from '../shared/controls/file-upload/file-upload.component';
import { FacInwardAttachmentsService } from '../shared/services/fac-inward-attachments.service';
import { NumericPipe } from '../shared/pipes/numeric.pipe';


@Component({
  selector: 'ribms-facultative-processing',
  templateUrl: './facultative-processing.component.html',
  styleUrls: ['./facultative-processing.component.scss']
})
export class FacultativeProcessingComponent extends BaseComponentComponent implements OnInit {

  //Initialize properities
  show: any;
  GetSuggestVal: any;
  //End
  FacInwardForm: FormGroup;
  model: FacInward = new FacInward();
  modelFacInInstallments: FacInwardInstallments = new FacInwardInstallments();
  //modelFacInwardPlt: FacInwardPlt[];
  facInwardId: number = 0;
  filteredAccountHnadler: any[];
  filteredInsureds: any[];
  filteredCedants: any[];
  filteredRetroCedant: any[];
  filteredMarketLeader: any[];
  filteredCountries: any[];
  filteredCities: any[];
  filteredPolicyNo: any[];
  inwardTypeList: any[];
  accountStatusList: SelectItem[];
  sourceList: SelectItem[];
  insuranceTypeList: SelectItem[];
  policyNatureList: SelectItem[];
  insuranceClassList: SelectItem[];
  subLobList: SelectItem[];
  coveredDetailsList: SelectItem[];
  premiumFrequencyList: SelectItem[];
  originalCurrency: Currency = new Currency();
  baseCurrency: Currency = new Currency();
  @ViewChild('OriginalCurrency') private OriginalCurrency: CurrencyComponent;
  @ViewChild('BaseCurrency') private BaseCurrency: CurrencyComponent;

  loading: boolean = false;
  showSaveUpdate: boolean = false;
  showHidePolicyNo: boolean = false;
  IsChecked: boolean = true;
  showInstallmentpopup: boolean = false;
  showSaveUpdateInstallments: boolean = false;

  calenderDateFormat = environment.calenderDateFormat;

  @ViewChild('fileUploader') fileUploader: FileUploadComponent;
  selectedAttachments: FacInwardAttachments[] = [];
  FacInwardAttachments: FacInwardAttachments[] = [];

  /*Fac Inward Search Panel Part*/
  dialogTitle: string = "Faculative Inward";
  searchTitle: string = "Search";
  resultTitle: string = "Fac Inward List";
  Cols: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "BoundDate", header: "Bound Date", dateColumn: true },
    { field: "AccountHnadler", header: "Account Hnadler", hidden: false },
    { field: "UmrReference", header: "Umr Reference", hidden: false },
    { field: "OurReference", header: "Our Reference", hidden: false },
    { field: "InsuredName", header: "Insured Name", hidden: false },
    { field: "PolicyType", header: "Policy Type", hidden: false },
    { field: "Branch", header: "Branch", hidden: false }
  ];
  rows: FacInward[] = [];
  FacInwards: FacInward[] = [];
  controls: ControlBase<any>[] = [];

  /*Fac Inward Installments Part*/
  summationPercentage: number;

  gridHeaderInstallments: string = 'Table of Installments';
  rowsInstallments: FacInwardInstallments[] = [];
  colsInstallments: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "DueDate", header: "Due Date", hidden: false, editableDateCol: true, requiredCol: true},
    { field: "SigningDownSharePer", header: "Percentage %", hidden: false, editablePercentCol: true, requiredCol: true },
    { field: "CrgCurCode", header: "Currency", hidden: false },
    { field: "FacPremiumAmt", header: "Fac Premium Amount", hidden: false },
    { field: "CommPer", header: "Commission", hidden: false },
    { field: "InsuranceCompany", header: "Insurance Company", hidden: false }];


  rowsAttachments: FacInwardAttachments[] = [];
  colsAttachments: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "KrnFacInwardId", header: "FacInwardId", hidden: true },
    { field: "Serial", header: "Serial", hidden: true },
    { field: "AttachmentPath", header: "Attachment Path", hidden: false },
    { field: "Notes", header: "Note", hidden: true },
    { field: null, header: "Download File", hidden: false, commandCol: true, commandName: "Download File" }
  ]

  constructor(private cs: CommonService, private router: Router, private FacultativeProcessingService: FacultativeProcessingService
    , private FacInwardInstallmentsService: FacInwardInstallmentsService, private facInwardAttachmentsService: FacInwardAttachmentsService, private numericPipe: NumericPipe) {
    super();
  }

  ngOnInit() {

    this.createForm();

    this.inwardTypeList = [{ label: 'Policy', value: '1' }, { label: 'Endorsement', value: '2' }];
    this.FacInwardForm.patchValue(
      {
        inwardType: this.inwardTypeList.find(x => x.value == '1').value
      });
    this.calenderDateFormat = environment.calenderDateFormat;

    this.cs.getDomainValues(DomainId.AccountStatus, Application.ReinsuranceBMS)
      .subscribe(data => this.accountStatusList = data);

    this.cs.getDomainValues(DomainId.Source, Application.ReinsuranceBMS)
      .subscribe(data => this.sourceList = data);

    this.cs.getDomainValues(DomainId.PolicyNature, Application.ReinsuranceBMS)
      .subscribe(data => this.policyNatureList = data);

    this.cs.getDomainValues(DomainId.InstallmentCycle, Application.ReinsuranceBMS)
      .subscribe(data => this.premiumFrequencyList = data);

    this.cs.getInsuranceTypes()
      .subscribe(data => this.insuranceTypeList = data);

    this.coveredDetailsList = [{ label: "SelectValue..", value: null }, { label: "Cover", value: "1" }];

    this.cs.getCustomers('')
      .subscribe(data => {
        this.filteredAccountHnadler = data;
        this.filteredRetroCedant = data;
        this.filteredMarketLeader = data;
        this.filteredInsureds = data;
      });

    let companyId = 1;
    let lang = 1;
    let roleId = CustomerRole.InsuranceCompany;
    this.cs.getSuggestCompanies(companyId, roleId, lang, '')
      .subscribe(data => {
        this.filteredCedants = data
      },
      error => { console.log(error); });

    this.cs.getCountries('').subscribe(
      data => {
        this.filteredCountries = data
      },
      error => { console.log(error); })

    this.generateSearchControls();

    if (this.model.Id > 0) {
      this.setFormValues();
      this.showSaveUpdate = true;
    }

  }

  createForm() {
    this.FacInwardForm = this.cs.fb.group({
      inwardType: ['', [Validators.required]],
      policyNo: '',
      accountHnadler: ['', [Validators.required]],
      receivedDate: ['', [Validators.required],],
      accountStatus: [{ value: null }, [Validators.required]],
      inceptionDate: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]],
      longTermAgreement: [false],
      orderPer: [{ value: null }, [Validators.required]],
      umrReference: ['', [Validators.required]],
      ourReference: '',
      insuredName: ['', [Validators.required]],
      cedant: ['', [Validators.required]],
      retroCedant: [''],
      source: [{ value: null }, [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      insuranceType: ['', [Validators.required]],
      policyNature: ['', [Validators.required]],
      insuranceClass: ['', [Validators.required]],
      selectedSubLob: ['', [Validators.required]],
      coveredDetails: [''],
      marketLeader: [''],
      signedLine: [{ value: null }, [Validators.required]],
      boundDate: ['', [Validators.required]],
      premiumFrequency: [{ value: null }, [Validators.required]],
      //exchangeRate: [{ value: null }],
      //originalCurrency: [{ value: null }],
      //baseCurrency: [{ value: null }],
      originalSumInsured: '',
      originalLimitPML: '',
      originalGrossPremium: '',
      originalSumInsuredForShare: '',
      originalLimitPMLForShare: '',
      originalGrossPremiumForShare: '',
      originalDeductibleAmount: '',
      originalExcessAmount: '',
      baseSumInsured: '',
      baseLimitPML: '',
      baseGrossPremium: '',
      baseSumInsuredForShare: '',
      baseLimitPMLForShare: '',
      baseGrossPremiumForShare: '',
      baseDeductibleAmount: '',
      baseExcessAmount: '',
      discountGpPer: '',
      discountNpPer: '',
      origNetPremium: '',
      baseNetPremium: '',
      attachmentPath: '',
      risknotes: ''
    });

    this.bindEvents();
    this.showSaveUpdate = false;
  }

  setMultiSelectValues(values: string): string[] {
    values = values == null ? "" : values;
    let splitableText: boolean = values.indexOf(',') >= 0;

    let array = splitableText ? values.split(',') : [values];
    return array;
  };

  convertArrayToString(values: string[]): string {
    if (values.length > 0)
      return values.join();
    else return "";
  };

  bindEvents() {
    const FacProcessingCtrls = (<any>this.FacInwardForm).controls;
    const insuranceTypeChanges$ = FacProcessingCtrls.insuranceType.valueChanges;
    const insuranceClassChanges$ = FacProcessingCtrls.insuranceClass.valueChanges;
    const countryChanges$ = FacProcessingCtrls.country.valueChanges;
    const originalSumInsuredChanges$ = FacProcessingCtrls.originalSumInsured.valueChanges;
    const originalLimitPMLChanges$ = FacProcessingCtrls.originalLimitPML.valueChanges;
    const originalGrossPremiumChanges$ = FacProcessingCtrls.originalGrossPremium.valueChanges;
    const originalSumInsuredForShareChanges$ = FacProcessingCtrls.originalSumInsuredForShare.valueChanges;
    const originalGrossPremiumForShareChanges$ = FacProcessingCtrls.originalGrossPremiumForShare.valueChanges;
    const originalLimitPMLForShareChanges$ = FacProcessingCtrls.originalLimitPMLForShare.valueChanges;
    const originalDeductibleAmountChanges$ = FacProcessingCtrls.originalDeductibleAmount.valueChanges;
    const originalExcessAmountChanges$ = FacProcessingCtrls.originalExcessAmount.valueChanges;
    const inwardTypeChanges$ = FacProcessingCtrls.inwardType.valueChanges;
    const discountGpPerChanges$ = FacProcessingCtrls.discountGpPer.valueChanges;
    const discountNpPerChanges$ = FacProcessingCtrls.discountNpPer.valueChanges;
    const signedLineChanges$ = FacProcessingCtrls.signedLine.valueChanges;

    inwardTypeChanges$.subscribe(selected => {
      if (selected) {
        this.showHidePolicyNo = selected == 2;
        this.FacultativeProcessingService.getFacInwards('')
          .subscribe(data => {
            this.filteredPolicyNo = data;

            if (this.model.KrnFacInwardId) {
              this.FacInwardForm.patchValue(
                {
                  policyNo: {
                    label: this.filteredPolicyNo.filter(i => i.value == this.model.KrnFacInwardId.toString())[0].label,
                    value: this.model.KrnFacInwardId.toString()
                  }
                });
            }
            else {
              this.FacInwardForm.patchValue(
                {
                  policyNo: {
                    label: '',
                    value: ''
                  }
                });
            }

          });

        
      }
    });
    

    insuranceTypeChanges$.subscribe(insuranceTypeSelected => {
      if (insuranceTypeSelected) {
        this.cs.GetInsuranceClassesByAppId(insuranceTypeSelected)
          .subscribe(data => {
            this.insuranceClassList = data;
          });

        if (this.model.BranchId) {
          this.FacInwardForm.patchValue(
            {
              insuranceClass: this.model.BranchId.toString(),
            });
        }
      }
    });

    insuranceClassChanges$.subscribe(insuranceClassSelected => {
      if (insuranceClassSelected) {
        this.cs.GetSubLOBByClassId(insuranceClassSelected)
          .subscribe(data => {
            this.subLobList = data;

            if (this.model.FacInwardPlt) {

              this.FacInwardForm.patchValue(
                {
                  selectedSubLob: this.setMultiSelectValues(this.model.FacInwardPlt.map(item => item.SstPltId).join(","))
                })
            }
          });

        
      }
    });

    countryChanges$.subscribe(countrySelected => {
      if (countrySelected) {
        this.cs.getCities(countrySelected.value, '')
          .subscribe(data => {
            this.filteredCities = data;

            if (this.model.Country) {
              this.FacInwardForm.patchValue(
                {
                  city: {
                    label: this.filteredCities.filter(i => i.value == this.model.Country.toString())[0].label,
                    value: this.model.Country.toString()
                  }
                });
            }
          });
      }
    });

    //coveredDetailsList

    originalSumInsuredChanges$.subscribe(sumInsured => {
      let exrateValue = this.originalCurrency.ExrateValue;
      this.FacInwardForm.patchValue(
        {
          baseSumInsured: sumInsured * exrateValue
        });
    });

    originalLimitPMLChanges$.subscribe(limitPML => {
      let exrateValue = this.originalCurrency.ExrateValue;
      this.FacInwardForm.patchValue(
        {
          baseLimitPML: limitPML * exrateValue
        });
    });

    originalGrossPremiumChanges$.subscribe(grossPremium => {
      let exrateValue = this.originalCurrency.ExrateValue;
      let signedLine = this.FacInwardForm.value.signedLine == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.signedLine);
      let discountGpPer = this.FacInwardForm.value.discountGpPer == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.discountGpPer);
      let discountNpPer = this.FacInwardForm.value.discountNpPer == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.discountNpPer);

      this.FacInwardForm.patchValue(
        {
          baseGrossPremium: grossPremium * exrateValue,
          origNetPremium: (grossPremium * signedLine * discountGpPer) * discountNpPer,
          baseNetPremium: ((grossPremium * signedLine * discountGpPer) * discountNpPer) * exrateValue,
        });

    });

    originalSumInsuredForShareChanges$.subscribe(sumInsuredForShare => {
      let exrateValue = this.originalCurrency.ExrateValue;
      this.FacInwardForm.patchValue(
        {
          baseSumInsuredForShare: sumInsuredForShare * exrateValue
        });
      this.FacInwardForm.value.baseSumInsuredForShare = sumInsuredForShare * exrateValue;
    });

    originalGrossPremiumForShareChanges$.subscribe(grossPremiumForShare => {
      let exrateValue = this.originalCurrency.ExrateValue;
      this.FacInwardForm.patchValue(
        {
          baseGrossPremiumForShare: grossPremiumForShare * exrateValue
        });
      this.FacInwardForm.value.baseGrossPremiumForShare = grossPremiumForShare * exrateValue;
    });

    originalLimitPMLForShareChanges$.subscribe(limitPMLForShare => {
      let exrateValue = this.originalCurrency.ExrateValue;
      this.FacInwardForm.patchValue(
        {
          baseLimitPMLForShare: limitPMLForShare * exrateValue
        });
      this.FacInwardForm.value.baseLimitPMLForShare = limitPMLForShare * exrateValue;
    });

    originalDeductibleAmountChanges$.subscribe(deductibleAmount => {
      let exrateValue = this.originalCurrency.ExrateValue;
      this.FacInwardForm.patchValue(
        {
          baseDeductibleAmount: deductibleAmount * exrateValue
        });
      this.FacInwardForm.value.baseDeductibleAmount = deductibleAmount * exrateValue;
    });

    originalExcessAmountChanges$.subscribe(excessAmount => {
      let exrateValue = this.originalCurrency.ExrateValue;
      this.FacInwardForm.patchValue(
        {
          baseExcessAmount: excessAmount * exrateValue
        });
      this.FacInwardForm.value.baseExcessAmount = excessAmount * exrateValue;
    });

    discountGpPerChanges$.subscribe(discountGpPer => {
      let exrateValue = this.originalCurrency.ExrateValue;
      let signedLine = this.FacInwardForm.value.signedLine == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.signedLine);
      let originalGrossPremium = this.FacInwardForm.value.originalGrossPremium == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.originalGrossPremium);
      let discountNpPer = this.FacInwardForm.value.discountNpPer == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.discountNpPer);

      this.FacInwardForm.patchValue(
        {
          origNetPremium: (originalGrossPremium * signedLine * discountGpPer) * discountNpPer,
          baseNetPremium: ((originalGrossPremium * signedLine * discountGpPer) * discountNpPer) * exrateValue,
        });

    });

    discountNpPerChanges$.subscribe(discountNpPer => {
      let exrateValue = this.originalCurrency.ExrateValue;
      let signedLine = this.FacInwardForm.value.signedLine == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.signedLine);
      let discountGpPer = this.FacInwardForm.value.discountGpPer == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.discountGpPer);
      let originalGrossPremium = this.FacInwardForm.value.originalGrossPremium == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.originalGrossPremium);

      this.FacInwardForm.patchValue(
        {
          origNetPremium: (originalGrossPremium * signedLine * discountGpPer) * discountNpPer,
          baseNetPremium: ((originalGrossPremium * signedLine * discountGpPer) * discountNpPer) * exrateValue,
        });

    });

    signedLineChanges$.subscribe(signedLine => {
      let exrateValue = this.originalCurrency.ExrateValue;
      let originalGrossPremium = this.FacInwardForm.value.originalGrossPremium == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.originalGrossPremium);
      let discountGpPer = this.FacInwardForm.value.discountGpPer == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.discountGpPer);
      let discountNpPer = this.FacInwardForm.value.discountNpPer == null ? 0 : this.numericPipe.parse(this.FacInwardForm.value.discountNpPer);

      this.FacInwardForm.patchValue(
        {
          origNetPremium: (originalGrossPremium * signedLine * discountGpPer) * discountNpPer,
          baseNetPremium: ((originalGrossPremium * signedLine * discountGpPer) * discountNpPer) * exrateValue,
        });

    });

  }

  deleteFacInward() {
    if (this.model.Id > 0) {
      this.cs.confirmationService.confirm({
        message: 'Are you sure you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'fa fa-trash',
        accept: () => {
          this.loading = true;
          this.cs.showOrHideSpinner(this.loading);
          this.FacultativeProcessingService.deleteData(this.model).subscribe(
            (data) => {
              this.loading = false;
              this.cs.showOrHideSpinner(this.loading);
              this.resetFacInwardForm();
              this.cs.pushMessage("success", "Success", "Record Deleted Successfully");
            },

            err => {
              console.log(err);
              this.loading = false;
              this.cs.showOrHideSpinner(this.loading);
              this.cs.pushError(err);
            },

            () => {
              this.loading = false;
              this.cs.showOrHideSpinner(this.loading);
            }

          )
        },
        reject: () => {
        }
      });
    }
  }

  resetFacInwardForm() {
    this.cs.resetForm(this.FacInwardForm);
    this.createForm();
    this.model = new FacInward();
    this.modelFacInInstallments = new FacInwardInstallments();
  }

  showFacInwardModel() {

  }

  generateSearchControls() {
    this.controls = null;
    this.controls = [
      new ControlAutoComplete({
        key: 'accountHnadler',
        label: 'Account Hnadler',
        required: false,
        serviceUrl: environment.apiUrl + 'api/Helper/GetCustomersList/' + 1 + '/',
        order: 1
      })
      ,
      new ControlDropdown({
        key: 'accountStatus',
        label: 'Account Status',
        required: false,
        options: this.accountStatusList,
        order: 2
      }),
      new ControlTextbox({
        key: 'umrReference',
        label: 'Umr Reference',
        required: false,
        order: 3
      }),
      new ControlTextbox({
        key: 'ourReference',
        label: 'Our Reference',
        required: false,
        order: 4
      }),
      new ControlAutoComplete({
        key: 'cedant',
        label: 'Cedant',
        required: false,
        serviceUrl: environment.apiUrl + 'api/Helper/GetCustomersList/' + 1 + '/', //CompanyId
        order: 5
      }),
      new ControlAutoComplete({
        key: 'retrocedant',
        label: 'Retrocedant',
        required: false,
        serviceUrl: environment.apiUrl + 'api/Helper/GetCustomersList/' + 1 + '/', //CompanyId
        order: 6
      }),
      new ControlAutoComplete({
        key: 'insuredName',
        label: 'Insured Name',
        required: false,
        serviceUrl: environment.apiUrl + 'api/Helper/GetCustomersList/' + 1 + '/', //CompanyId
        order: 7
      }),
      new ControlDropdown({
        key: 'source',
        label: 'Source',
        required: false,
        options: this.sourceList,
        order: 8
      }),
      new ControlDropdown({
        key: 'insuranceType',
        label: 'Policy Type',
        required: false,
        options: this.insuranceTypeList,
        order: 9
      }),
      new ControlDropdown({
        key: 'policyNature',
        label: 'Policy Nature',
        required: false,
        options: this.policyNatureList,
        order: 10
      }),
      new ControlDropdown({
        key: 'premiumFrequency',
        label: 'Premium Frequency',
        required: false,
        options: this.premiumFrequencyList,
        order: 11
      })
    ];
  }

  onSearch(formValue: any) {

    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);

    this.FacultativeProcessingService.getDataByCritiria(formValue).subscribe(
      (data) => {

        this.rows = data;
        console.log(this.rows);
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
      });
  }

  OnSelectedRow(selectedRow: any) {


    if (selectedRow.Id > 0) {

      this.FacultativeProcessingService.getData(selectedRow.Id).subscribe(
        (data) => {
          this.model = data;
          this.rowsAttachments = data.KrnFacInwardAttachments;
          this.facInwardId = this.model.Id;
          if (this.model.Id) {
            this.setFormValues();
            this.showSaveUpdate = true;
          }
        });

      
      
    }
  }  

  saveFacInward() {
      this.loading = true;
      this.cs.showOrHideSpinner(this.loading);
      this.setModelValues();
      if (this.model.Id > 0) {
        this.model.ModifiedBy = "admin";//this.cs.getLoggedInUser().userName;
        this.model.ModificationDate = new Date;
        this.FacultativeProcessingService.putData(this.model).subscribe(
          data => {
            this.model = data;
            this.facInwardId = this.model.Id;
            this.getFacInwardsAttachments(this.model.Id);
            this.setFormValues();
            this.FacInwards = this.rows;
            this.FacInwards.push(data);
            this.rows = this.FacInwards;
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
        )
      }
      else {
        this.model.CreatedBy = "admin";//this.cs.getLoggedInUser().userName;
        this.model.CreationDate = new Date;
        this.FacultativeProcessingService.PostData(this.model).subscribe(
          data => {
            this.model = data;
            this.facInwardId = this.model.Id;
            this.getFacInwardsAttachments(this.model.Id);
            this.setFormValues();
            this.FacInwards = this.rows;
            this.FacInwards.push(data);
            this.rows = this.FacInwards;            
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

  setModelValues() {
    const formModel = this.FacInwardForm.value;

    this.model.KrnFacInwardId       = formModel.policyNo.value;
    this.model.KrnFacInwardType     = formModel.inwardType;
    this.model.CamAppId             = formModel.insuranceType;
    this.model.AccountStatus        = formModel.accountStatus;
    this.model.ReceivedDate         = formModel.receivedDate;
    this.model.RiskEffectiveDate    = formModel.inceptionDate;
    this.model.RiskExpiryDate       = formModel.expiryDate;
    this.model.LongTermAgrm = formModel.longTermAgreement === false ? 0 : 1;
    this.model.OrderPer             = this.numericPipe.parse(formModel.orderPer);
    this.model.UmrReference         = formModel.umrReference;
    this.model.OurReference         = formModel.ourReference;
    this.model.Source               = formModel.source;
    this.model.PolicyNature         = formModel.policyNature;
    this.model.FcsCstId             = formModel.insuredName.value;
    this.model.CedantFcsCstId       = formModel.cedant.value;
    this.model.RetrocedantFcsCstId  = formModel.retroCedant.value;
    this.model.Region               = formModel.country.value;
    this.model.Country              = formModel.city.value;
    this.model.BranchId             = formModel.insuranceClass;

    this.model.FacInwardPlt = formModel.selectedSubLob.map(val => <FacInwardPlt>{ KrnFacInwardId: 0, SstPltId: val });

    this.model.SubClass = formModel.coveredDetails;
    this.model.MarketLeaderCstId = formModel.marketLeader.value;
    this.model.SignedLine = this.numericPipe.parse(formModel.signedLine);
    this.model.BoundDate = formModel.boundDate;
    this.model.AccManagerId = formModel.accountHnadler.value;
    this.model.OrigCrgCurCode = this.originalCurrency.CurrencyCode;    
    this.model.BaseCrgCurCode = this.baseCurrency.CurrencyCode;
    this.model.Exrate = this.originalCurrency.ExrateValue;
    this.model.OrigSumInsured = this.numericPipe.parse(formModel.originalSumInsured);
    this.model.BaseSumInsured = this.numericPipe.parse(formModel.baseSumInsured);
    this.model.OrigPmlLimit = this.numericPipe.parse(formModel.originalLimitPML);
    this.model.BasePmlLimit = this.numericPipe.parse(formModel.baseLimitPML);
    this.model.OrigGrossPrem = this.numericPipe.parse(formModel.originalGrossPremium);
    this.model.BaseGrossPrem = this.numericPipe.parse(formModel.baseGrossPremium);
    this.model.OrigSumInsForShare = this.numericPipe.parse(formModel.originalSumInsuredForShare);
    this.model.BaseSumInsForShare = this.numericPipe.parse(formModel.baseSumInsuredForShare);
    this.model.OrigGrossPremForShare = this.numericPipe.parse(formModel.originalGrossPremiumForShare);
    this.model.BaseGrossPremForShare = this.numericPipe.parse(formModel.baseGrossPremiumForShare);
    this.model.OrigPmlLimitForShare = this.numericPipe.parse(formModel.originalLimitPMLForShare);
    this.model.BasePmlLimitForShare = this.numericPipe.parse(formModel.baseLimitPMLForShare);
    this.model.OrigDeductibleAmnt = this.numericPipe.parse(formModel.originalDeductibleAmount);
    this.model.BaseDeductibleAmnt = this.numericPipe.parse(formModel.baseDeductibleAmount);
    this.model.OrigExcessAmnt = this.numericPipe.parse(formModel.originalExcessAmount);
    this.model.BaseExcessAmnt = this.numericPipe.parse(formModel.baseExcessAmount);
    this.model.RiskDescription = formModel.risknotes;
    this.model.AttachmentPath = formModel.attachmentPath;
    this.model.DiscountGpPer = this.numericPipe.parse(formModel.discountGpPer);
    this.model.DiscountNpPer = this.numericPipe.parse(formModel.discountNpPer);
    this.model.OrigNetPremium = this.numericPipe.parse(formModel.origNetPremium);
    this.model.BaseNetPremium = this.numericPipe.parse(formModel.baseNetPremium);
    this.model.PremiumFrequency = formModel.premiumFrequency;
    //this.model.IsPosted             = formModel.IsPosted;
    //this.model.CreatedBy            = formModel.CreatedBy;
    //this.model.CreationDate         = formModel.CreationDate;
    //this.model.ModifiedBy           = formModel.ModifiedBy;
    //this.model.ModificationDate     = formModel.ModificationDate;

    this.model.KrnFacInwardAttachments = this.FacInwardAttachments;

  }

  setFormValues() {
    
    this.FacInwardForm.patchValue(
      {
        inwardType: this.model.KrnFacInwardType != null ? this.model.KrnFacInwardType.toString(): null,
        insuranceType: this.model.CamAppId.toString(),
        accountStatus: this.model.AccountStatus.toString(),
        inceptionDate: this.model.RiskEffectiveDate == null ? null : new Date(this.model.RiskEffectiveDate),
        expiryDate: this.model.RiskExpiryDate == null ? null : new Date(this.model.RiskExpiryDate),
        receivedDate: this.model.ReceivedDate == null ? null : new Date(this.model.ReceivedDate),
        longTermAgreement: this.model.LongTermAgrm === 0 ? false : true,
        orderPer: this.numericPipe.transform(this.model.OrderPer, NumberTypes.Percentage, '1.2-2'),
        umrReference: this.model.UmrReference,
        ourReference: this.model.OurReference,
        source: this.model.Source.toString(),
        policyNature: this.model.PolicyNature.toString(),
        insuredName: {
          label: this.filteredInsureds.filter(i => i.value == this.model.FcsCstId.toString())[0].label,
          value: this.model.FcsCstId.toString()
        },
        cedant: {
          label: this.filteredCedants.filter(i => i.value == this.model.CedantFcsCstId.toString())[0].label,
          value: this.model.CedantFcsCstId.toString()
        },
        retroCedant: {
          label: this.model.RetrocedantFcsCstId != null ? this.filteredRetroCedant.filter(i => i.value == this.model.RetrocedantFcsCstId.toString())[0].label : null,
          value: this.model.RetrocedantFcsCstId != null ? this.model.RetrocedantFcsCstId.toString() : null
        },
        country: {
          label: this.filteredCountries.filter(i => i.value == this.model.Region.toString())[0].label,
          value: this.model.Region.toString()
        },
        //city: {
        //  label: this.filteredCities.filter(i => i.value == this.model.Country.toString())[0].label,
        //  value: this.model.Country.toString()
        //},
        //insuranceClass: this.model.BranchId.toString(),
        //selectedSubLob: this.subLobList.map(val => <any>{
        //  label: "",
        //  value: val.SstPltId
        //}),
        coveredDetails: this.model.SubClass != null ? this.model.SubClass.toString() : null,
        marketLeader: {
          label: this.model.MarketLeaderCstId != null ? this.filteredMarketLeader.filter(i => i.value == this.model.MarketLeaderCstId.toString())[0].label : null,
          value: this.model.MarketLeaderCstId != null ? this.model.MarketLeaderCstId.toString() : null
        },
        signedLine: this.numericPipe.transform(this.model.SignedLine, NumberTypes.Percentage, '1.2-2'),
        boundDate: this.model.BoundDate == null ? null : new Date(this.model.BoundDate),
        accountHnadler: {
          label: this.filteredAccountHnadler.filter(i => i.value == this.model.AccManagerId.toString())[0].label,
          value: this.model.AccManagerId.toString()
        },
        originalSumInsured: this.numericPipe.transform(this.model.OrigSumInsured, NumberTypes.Decimal, '1.2-2'),
        baseSumInsured: this.numericPipe.transform(this.model.BaseSumInsured, NumberTypes.Decimal, '1.2-2'),
        originalLimitPML: this.numericPipe.transform(this.model.OrigPmlLimit, NumberTypes.Decimal, '1.2-2'),
        baseLimitPML: this.numericPipe.transform(this.model.BasePmlLimit, NumberTypes.Decimal, '1.2-2'),
        originalGrossPremium: this.numericPipe.transform(this.model.OrigGrossPrem, NumberTypes.Decimal, '1.2-2'),
        baseGrossPremium: this.numericPipe.transform(this.model.BaseGrossPrem, NumberTypes.Decimal, '1.2-2'),
        originalSumInsuredForShare: this.numericPipe.transform(this.model.OrigSumInsForShare, NumberTypes.Decimal, '1.2-2'),
        baseSumInsuredForShare: this.numericPipe.transform(this.model.BaseSumInsForShare, NumberTypes.Decimal, '1.2-2'),
        originalGrossPremiumForShare: this.numericPipe.transform(this.model.OrigGrossPremForShare, NumberTypes.Decimal, '1.2-2'),
        baseGrossPremiumForShare: this.numericPipe.transform(this.model.BaseGrossPremForShare, NumberTypes.Decimal, '1.2-2'),
        originalLimitPMLForShare: this.numericPipe.transform(this.model.OrigPmlLimitForShare, NumberTypes.Decimal, '1.2-2'),
        baseLimitPMLForShare: this.numericPipe.transform(this.model.BasePmlLimitForShare, NumberTypes.Decimal, '1.2-2'),
        originalDeductibleAmount: this.numericPipe.transform(this.model.OrigDeductibleAmnt, NumberTypes.Decimal, '1.2-2'),
        baseDeductibleAmount: this.numericPipe.transform(this.model.BaseDeductibleAmnt, NumberTypes.Decimal, '1.2-2'),
        originalExcessAmount: this.numericPipe.transform(this.model.OrigExcessAmnt, NumberTypes.Decimal, '1.2-2'),
        baseExcessAmount: this.numericPipe.transform(this.model.BaseExcessAmnt, NumberTypes.Decimal, '1.2-2'),
        risknotes: this.model.RiskDescription,
        attachmentPath: this.model.AttachmentPath,
        discountGpPer: this.numericPipe.transform(this.model.DiscountGpPer, NumberTypes.Percentage, '1.2-2'),
        discountNpPer: this.numericPipe.transform(this.model.DiscountNpPer, NumberTypes.Percentage, '1.2-2'),
        origNetPremium: this.numericPipe.transform(this.model.OrigNetPremium, NumberTypes.Decimal, '1.2-2'),
        baseNetPremium: this.numericPipe.transform(this.model.BaseNetPremium, NumberTypes.Decimal, '1.2-2'),
        premiumFrequency: this.model.PremiumFrequency.toString(),
        IsPosted: this.model.IsPosted,
        CreatedBy: this.model.CreatedBy,
        CreationDate: this.model.CreationDate == null ? null : new Date(this.model.CreationDate),
        ModifiedBy: this.model.ModifiedBy,
        ModificationDate: this.model.ModificationDate == null ? null : new Date(this.model.ModificationDate),
      }
    )

    this.originalCurrency.CurrencyCode = this.model.OrigCrgCurCode;
    this.OriginalCurrency.editMode(this.originalCurrency.CurrencyCode);

    this.baseCurrency.CurrencyCode = this.model.BaseCrgCurCode;
    this.BaseCurrency.editMode(this.baseCurrency.CurrencyCode);
    


  }

  filterAccountHnadler(event) {
    let query = event.query;
    this.cs.getCustomers(query).subscribe(
      data => {
        this.filteredAccountHnadler = data
      },
      error => { console.log(error); });
    
  }

  filterInsureds(event) {
    let query = event.query;
    this.cs.getCustomers(query).subscribe(
      data => {
        this.filteredInsureds = data
      },
      error => { console.log(error); });
  }

  filterCedants(event) {
    let query = event.query;
    let companyId = 1;
    let lang = 1;
    let roleId = CustomerRole.InsuranceCompany;
    this.cs.getSuggestCompanies(companyId, roleId, lang, query).subscribe(
      data => {
        this.filteredCedants = data
      },
      error => { console.log(error); });
  }

  filterRetroCedant(event) {
    let query = event.query;
    this.cs.getCustomers(query).subscribe(
      data => {
        this.filteredRetroCedant = data
      },
      error => { console.log(error); });
  }

  filterMarketLeader(event) {
    let query = event.query;
  this.cs.getCustomers(query).subscribe(
    data => {
      this.filteredMarketLeader = data
    },
    error => { console.log(error); });
  }

  filterCountries(event) {
    
    let query = event.query;

    this.cs.getCountries(query).subscribe(
        data => {
          this.filteredCountries = data
        },
        error => { console.log(error); });
  }

  filterCities(event) {
    let query = event.query;
    let countryValue = '';
    if (this.FacInwardForm.value.country.value != '' || this.FacInwardForm.value.country.value != null)
      countryValue = this.FacInwardForm.value.country.value;

    console.log('countryValue: ' + countryValue); 

    this.cs.getCities(countryValue, query)
      .subscribe(
        data => {
          this.filteredCities = data,
            console.log('Cities list: ' + data);
        },
        error => { console.log(error); });
  }

  fillOriginalCurrency(event: Currency)
  {
    this.originalCurrency.CurrencyCode = event.CurrencyCode;
    this.originalCurrency.ExrateValue = event.ExrateValue;
  }

  fillBaseCurrency(event: Currency) {
    this.baseCurrency.CurrencyCode = event.CurrencyCode;
    this.baseCurrency.ExrateValue = event.ExrateValue;
  }

  OnInwardTypeChange(event) {    
    this.showHidePolicyNo = event.value == 2;
  }  

  filterPolicyNo(event) {
    let query = event.query;
    this.FacultativeProcessingService.getFacInwards(query).subscribe(
      data => {
        this.filteredPolicyNo = data
      },
      error => { console.log(error); });
  }

  /*Fac Inward Installments Part*/
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
      this.FacInwardInstallmentsService.put(this.rowsInstallments).subscribe(
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
      this.FacInwardInstallmentsService.post(this.rowsInstallments).subscribe(
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

  viewInstallments() {
    
    this.FacInwardInstallmentsService.getInstallments(this.model.Id)
      .subscribe(data =>
        this.rowsInstallments = data
      );
    this.showInstallmentpopup = true;
  }

  HideInstallmentpopup() {

    this.showInstallmentpopup = false;
  }

  closePopupInstallments() {
    this.showInstallmentpopup = false;
  }

  OnCheckboxSelectedAttachments(selectedRows: FacInwardAttachments[]) {
    this.selectedAttachments = selectedRows;
  }

  getFacInwardsAttachments(facInwardId: number) {
    this.facInwardAttachmentsService.get(facInwardId).subscribe(
      data => {
        this.rowsAttachments = data;
      });
  }

  deleteFacInwardAttachments() {
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
          this.facInwardAttachmentsService.deleteBulkAttachments(this.selectedAttachments).subscribe(
            data => {
              this.selectedAttachments = [];
              this.getFacInwardsAttachments(this.model.Id);
              this.loading = false;
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
    let FacInwardAttachment = new FacInwardAttachments();
    this.FacInwardAttachments = [];

    event.forEach(attachment => {
      FacInwardAttachment.AttachmentPath = attachment;
      this.FacInwardAttachments.push(FacInwardAttachment);
    });
  }
}
