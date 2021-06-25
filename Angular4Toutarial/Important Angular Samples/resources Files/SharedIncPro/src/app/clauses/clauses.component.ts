import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from '../shared/services/common.service';
import { User, selectItem } from '../models/data-models';
import { SelectItem } from 'primeng/api';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'css-clauses',
  templateUrl: './clauses.component.html',
  styleUrls: ['./clauses.component.scss']
})
export class ClausesComponent implements OnInit {

  private PaymentCycleGrid: undefined;//SstPaymentCycles[] = new Array<SstPaymentCycles>();
  private PaymentCycleEntry: undefined;//SstPaymentCycles = new SstPaymentCycles();
  private PaymentDetailsGrid: undefined;// SstPaymentDetails[] = new Array<SstPaymentDetails>();
  private PaymentDetailsEntry: undefined;//SstPaymentDetails = new SstPaymentDetails();
  private SystemId: number[] = [];
  private CycleName: string = "";
  private SystemIdEntey: number[];
  private PCEntryAction: string = "Save";

  private Select: undefined;//SstPaymentCycles[] = new Array<SstPaymentCycles>();
  private EditablePCEvent: any = { field: "", value: "" };

  clausesFormSearch: FormGroup;
  clausesFormEntry: FormGroup;
  clausesTextEntry: FormGroup;
  user: User;

  constructor(private commonservice: CommonService) { }

  //private ClosingPeriodDetailsRows: ClosingPeriods[] = new Array<ClosingPeriods>();

  // ----- From Card 1 ----- 
  InsSystemSearchList: SelectItem[] = [];
  InsuranceClassSearchList: SelectItem[] = [];
  SubLineofBusinessSearch: SelectItem[] = [];
  Clausetype: SelectItem[] = [];
  Cirterion: SelectItem[];
  Description: string;
  // ----- END From Card 1 -----
  // ----- From Card 2 ----- 
  InsuranceClassEntryList: SelectItem[] = [];
  InsSystemEntryList: SelectItem[] = [];
  SubLineofBusinessEntryList: SelectItem[] = [];
  MarineClause: SelectItem[] = [];
  StatusClause: SelectItem[] = [];
  ClauseCode: String;
  // ----- END From Card 2 -----
  // ----- From Card 3 ----- 
  ClauseType: SelectItem[] = [];
  CoverType: SelectItem[] = [];
  DiscountType: SelectItem[] = [];
  PrintOrder: String;
  EffictiveDate: Date;
  DescriptionEntry1: String;
  DescriptionEntry2: String;
  // ----- END From Card 2 -----

  showSaveUpdate: boolean = false;
  radio: string;
  loading: boolean;
  calenderDateFormat = environment.DATE_FMT;

  selectedRows: any[] = [];
  selectedRow: any;

  datalist: any[] = [];
  item: selectItem = { label: "Select value..", "value": "" };

  cols: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "InsuranceSystem", header: "Insurance System", hidden: false },
    { field: "Code", header: "Code", hidden: false },
    { field: "Name", header: "Name", hidden: false },
    { field: "InsuranceClass", header: "Insurance Class", hidden: false },
    { field: "Status", header: "Status", hidden: false }];

  ngOnInit() {
    // this.PaymentCycleEntry.Unit = PeriodUnit.Day;

    //Create Form Group
    //First From
    this.clausesFormSearch = this.commonservice.fb.group({
      insuranceSystemSearch: [0],
      insuranceClassSearch: [0],
      subLineOfBusinessSearch: [0],
      ClauseNameSearch: [''],
      ClauseTypeSearch: [0],
      CirterionSearch: [0],
      DescriptionSearch: ['']
    });
    //Second Form
    this.clausesFormEntry = this.commonservice.fb.group({
      insuranceSystemEntry: [0],
      insuranceClassEntry: [0],
      subLineOfBusinessEntry: [0],
      ClauseNameSearch1: [''],
      ClauseNameSearch2: [''],
      MarineClause: [0],
      StatusClause: [0],
      ClauseCode : ['']
    });
    //Third Form
    this.clausesTextEntry = this.commonservice.fb.group({
      ClauseType: [0],
      CoverType: [0],
      DiscountType: [0],
      PrintOrder: [''],
      EffictiveDate: [0],
      CirterionSearch: [0],
      Description1: [''],
      Description2: ['']
    });

    this.commonservice.getInsuranceSystem().subscribe(data => {
      for (var item of data) {
        const sys = new selectItem();
        sys.label = item.label;
        sys.value = item.value;
        this.InsSystemEntryList.push(sys);
      }
    });

    this.BindData();
  }/// End ngOnInit

  BindData() {
    const ClauseFormEntryCtrls = (<any>this.clausesFormSearch).controls;
    const insuranceSystemSearch$ = ClauseFormEntryCtrls.insuranceSystemSearch.valueChanges;
    const InsuranceClassSearch$ = ClauseFormEntryCtrls.insuranceClassSearch.valueChanges;

    insuranceSystemSearch$.subscribe(selectedValue => {
      if (selectedValue) {
        this.InsuranceClassSearchList = [];
        this.InsuranceClassSearchList.push(this.item)
        this.commonservice.getInsuranceClasses(selectedValue, 1 /*this.user.companyId*/).subscribe(
          data => {
            Array.from(data).forEach(item => {
              this.InsuranceClassSearchList.push(item);
            });
          });
      }
    });

    InsuranceClassSearch$.subscribe(InsuranceClassSelected => {
      if (InsuranceClassSelected) {
        this.SubLineofBusinessSearch = [];
        this.SubLineofBusinessSearch.push(this.item);
        this.commonservice.getSubLineofBusiness(InsuranceClassSelected,1 /*this.user.companyId*/).subscribe(
          data => {
            Array.from(data).forEach(item => {
              this.SubLineofBusinessSearch.push(item);
            });
          });
      }
    });

  }//END DataBind

  //Functions
  onReset() {


  //  this.model = new ClosingPeriods();
    this.commonservice.resetForm(this.clausesFormSearch);

    this.clausesFormSearch = this.commonservice.fb.group({
      insuranceSystemSearch: [0, { updateOn: 'blur' }],
      insuranceClassSearch: [0, { updateOn: 'blur' }],
      subLineOfBusinessSearch: [0, { updateOn: 'blur' }],
      moduleSearch: ['', { updateOn: 'blur' }],
      branchSearch: [0, { updateOn: 'blur' }]
    });

    this.InsuranceClassSearchList = [];
    this.SubLineofBusinessSearch = [];
    //this.ModuleSearchList = [];

    this.BindData();

  }
  // End Function
}
