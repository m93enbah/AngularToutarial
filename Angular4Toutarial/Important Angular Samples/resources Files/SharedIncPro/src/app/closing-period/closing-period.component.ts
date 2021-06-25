import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { CoreService } from '../shared/services/core.service';
import { CommonService } from '../shared/services/common.service';
import { User, ClosingPeriods, selectItem } from '../models/data-models';
import { ClosingPeriodService } from '../shared/services/closing-period.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'closing-period',
  templateUrl: './closing-period.component.html',
  styleUrls: ['./closing-period.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ClosingPeriodComponent implements OnInit {

  closingFormSearch: FormGroup;
  closingFormEntry: FormGroup;

  model: ClosingPeriods = new ClosingPeriods();


  private ClosingPeriodDetailsRows: ClosingPeriods[] = new Array<ClosingPeriods>();

  InsSystemEntryList: SelectItem[] = [];
  InsSystemSearchList: SelectItem[] = [];

  InsuranceClassEntryList: SelectItem[] = [];
  InsuranceClassSearchList: SelectItem[] = [];


  SubLineofBusinessEntryList: SelectItem[] = [];

  SubLineofBusiness: SelectItem[] = [];

  branches: SelectItem[] = [];
  BranchesDDL: SelectItem[];

  ModuleEntryList: SelectItem[] = [];
  ModuleSearchList: SelectItem[] = [];


  user: User;

  showSaveUpdate: boolean = false;

  loading: boolean;
  calenderDateFormat = environment.DATE_FMT;

  selectedRows: any[] = [];
  selectedRow: any;

  datalist: any[] = [];
  item: SelectItem = { label: "Select value..", value: "" };


  //cols for ClosingPeriods Grid
  cols: any[] = [
    { field: "Id", header: "Id", hidden: true },
    { field: "InsuranceSystem", header: "Insurance System", hidden: false },
    { field: "InsuranceClass", header: "Insurance Class", hidden: false },
    { field: "PolicyTypeName", header: "Sub Line of Business", hidden: false },
    { field: "ModuleName", header: "Module", hidden: false },
    { field: "BranchName", header: "Branch", hidden: false },
    { field: "ClosingDate", header: "Closing Date", hidden: false }];



  constructor(private coreService: CoreService, private cm: CommonService,
    private closingPeriodService: ClosingPeriodService) { }

  //// ngOnInit
  ngOnInit() {

    this.InsSystemSearchList.push(this.item);
    this.InsSystemEntryList.push(this.item);


    //FormGroup for closing periods Entry
    this.closingFormEntry = this.cm.fb.group({
      Id: [0],
      CreationUser: ['Admin'],
      insuranceSystemEntry: ['', { updateOn: 'blur' }, [Validators.required]],
      insuranceClassEntry: ['', { updateOn: 'blur' }, [Validators.required]],
      policyTypeEntry: ['', { updateOn: 'blur' }],
      moduleCodeEntry: ['', { updateOn: 'blur' }, [Validators.required]],
      branchIdEntry: ['', { updateOn: 'blur' }],
      closingDateEntry: ['', [Validators.required]]
    })

    //FormGroup for closing periods Shearch
    this.closingFormSearch = this.cm.fb.group({
      insuranceSystemSearch: [0, { updateOn: 'blur' }],
      insuranceClassSearch: [0, { updateOn: 'blur' }],
      subLineOfBusinessSearch: [0, { updateOn: 'blur' }],
      moduleSearch: ['', { updateOn: 'blur' }],
      branchSearch: [0, { updateOn: 'blur' }]
    });

    //Filling Lists
    this.bindEvents();

    this.user = this.coreService.getLoggedInUser();

    this.cm.getInsuranceSystem().subscribe(data => {
      Array.from(data).forEach(item => {
        this.InsSystemEntryList.push(item);
      });
    });

    this.cm.getInsuranceSystem().subscribe(data => {
      Array.from(data).forEach(item => {
        this.InsSystemSearchList.push(item);
      });

      //for (var item of data) {
      //  const sys = new selectItem();
      //  sys.label = item.label;
      //  sys.value = item.value;
      //  this.InsSystemSearchList.push(sys);
      //}
    });

    this.coreService.getBranches(1, "Admin").subscribe(data => {

      this.branches.push({ label: "Select value..", value: "" });

      for (var item of data.data) {
        const br = new selectBranchItem();
        br.label = item.nAME;
        br.value = item.iD;
        this.branches.push(br);
      }
    });

  }


  bindEvents() {


    const closingFormEntryCtrls = (<any>this.closingFormEntry).controls;
    const insuranceSystemEntry$ = closingFormEntryCtrls.insuranceSystemEntry.valueChanges;
    const InsuranceClassEntry$ = closingFormEntryCtrls.insuranceClassEntry.valueChanges;

    insuranceSystemEntry$.subscribe(selectedValue => {
      if (selectedValue) {

        debugger;
        this.cm.getInsuranceClasses(selectedValue, this.user.companyId).subscribe(
          data => {
            this.InsuranceClassEntryList = []
            this.InsuranceClassEntryList.push(this.item);

              Array.from(data).forEach(item => {
              this.InsuranceClassEntryList.push(item);
            });
          });

        if (this.model.ClassId) {
          this.closingFormEntry.patchValue(
            {
              insuranceClassEntry: this.model.ClassId.toString(),
            });
        }

        //this.SubLineofBusinessEntryList = [];

        this.cm.getModules(selectedValue, this.user.companyId).subscribe(
          data => {
            this.ModuleEntryList = [];
            this.ModuleEntryList.push(this.item);

            Array.from(data).forEach(item => {
              this.ModuleEntryList.push(item);
            });
          });

        if (this.model.ModuleCode) {
          this.closingFormEntry.patchValue(
            {
              moduleCodeEntry: this.model.ModuleCode.toString(),
            });
        }

      }
    });


    InsuranceClassEntry$.subscribe(InsuranceClassSelected => {
      if (InsuranceClassSelected) {

        this.cm.getSubLineofBusiness(InsuranceClassSelected, this.user.companyId).subscribe(
          data => {
            this.SubLineofBusinessEntryList = [];
            this.SubLineofBusinessEntryList.push(this.item);

            Array.from(data).forEach(item => {
              this.SubLineofBusinessEntryList.push(item);
            });
           
          });

        if (this.model.PolicyType) {
          this.closingFormEntry.patchValue(
            {
              policyTypeEntry: this.model.PolicyType.toString(),
            });
        }
      }

    });

    //////

    const closingFormSearchCtrls = (<any>this.closingFormSearch).controls;
    const insuranceSystemSearch$ = closingFormSearchCtrls.insuranceSystemSearch.valueChanges;
    const InsuranceClassChange$ = closingFormSearchCtrls.insuranceClassSearch.valueChanges;


    insuranceSystemSearch$.subscribe(selectedValue => {
      if (selectedValue) {
        this.cm.getInsuranceClasses(selectedValue, this.user.companyId).subscribe(
          data => {
            this.InsuranceClassSearchList = [];
            this.InsuranceClassSearchList.push(this.item);

          
              Array.from(data).forEach(item => {
                this.InsuranceClassSearchList.push(item);
              });
          });
        this.cm.getModules(selectedValue, this.user.companyId).subscribe(
          data => {
            this.ModuleSearchList = [];
            this.ModuleSearchList.push(this.item);

               Array.from(data).forEach(item => {
                this.ModuleSearchList.push(item);
              });
          });


      }
    });

    InsuranceClassChange$.subscribe(InsuranceClassSelected => {
      if (InsuranceClassSelected) {
        this.SubLineofBusinessEntryList = [];
        this.cm.getSubLineofBusiness(InsuranceClassSelected, this.user.companyId).subscribe(
          data => {
            this.SubLineofBusiness = [];
            this.SubLineofBusiness.push(this.item);

            
              Array.from(data).forEach(item => {
                this.SubLineofBusiness.push(item);
              });
          });
      }
    });

  }

  setModelValues() {
    const formModel = this.closingFormEntry.value;
    this.model.Id = formModel.Id;
    this.model.SystemId = formModel.insuranceSystemEntry;
    this.model.ClassId = formModel.insuranceClassEntry;
    this.model.PolicyType = formModel.policyTypeEntry;
    this.model.ModuleCode = formModel.moduleCodeEntry;
    this.model.BranchId = formModel.branchIdEntry;
    this.model.ClosingDate = formModel.closingDateEntry;
  }

  setFormValues() {
    this.closingFormEntry.patchValue(
      {
        Id: this.model.Id,
        CreationUser: this.model.CreationUser,
        insuranceSystemEntry: this.model.SystemId.toString(),
        //insuranceClassEntry: this.model.ClassId.toString(),
        //policyTypeEntry: this.model.PolicyType.toString(),
        //moduleCodeEntry: this.model.ModuleCode,
        branchIdEntry: this.model.BranchId,
        closingDateEntry: this.model.ClosingDate == null ? null : new Date(this.model.ClosingDate)
      });
  }

  //Functions 

  SaveClosingPeriod() {
    debugger;

    this.setModelValues();
    this.loading = true;
    this.cm.showOrHideSpinner(this.loading);

    if (this.model.Id > 0) {
      //Update
      this.model.ModificationUser = "Admin";
      this.closingPeriodService.UpdateClosingPeriod(this.model).subscribe(
        data => {
          console.log(data);
          this.showSaveUpdate = true;
          this.loading = false;
          this.cm.showOrHideSpinner(this.loading);
          this.FindClosingPeriod();
          this.onResetEntry();
          this.cm.pushMessage("success", "Success", "Record Updated Successfully");
        },
        err => {
          console.log(err);
          this.cm.pushError(err);
          this.loading = false;
          this.cm.showOrHideSpinner(this.loading);
        });
    }
    else {
      //Save
      this.closingPeriodService.SaveClosingPeriod(this.model).subscribe(
        res => {
          debugger;

          console.log(res);
          this.showSaveUpdate = false;
          this.loading = false;
          this.cm.showOrHideSpinner(this.loading);
          this.FindClosingPeriod();
          this.onResetEntry();
          this.cm.pushMessage("success", "Success", "Record Saved Successfully");
        },
        err => {
          console.log(err);
          this.cm.pushError(err);
          this.loading = false;
          this.cm.showOrHideSpinner(this.loading);
        });
    }
  }


  FindClosingPeriod() {
    //find
    this.loading = true;
    this.cm.showOrHideSpinner(this.loading);

    this.closingPeriodService.FindClosingPeriod(this.closingFormSearch.value).subscribe(data => {
      this.loading = false;
      this.cm.showOrHideSpinner(this.loading);
      debugger;

      this.datalist = data.map(val => <any>{
        "Id": val.Id,
        "InsuranceSystem": val.InsuranceSystem,
        "InsuranceClass": val.InsuranceClass,
        "PolicyTypeName": val.PolicyTypeName,
        "ModuleName": val.ModuleCode,
        "ModuleCode": val.ModuleCode,
        "BranchName": this.branches.filter(i => i.value ==val.BranchId.toString())[0].label,
        "BranchId": val.BranchId,
        "SystemId": val.SystemId,
        "ClassId": val.ClassId,
        "ClosingDate": val.ClosingDate,
        "PolicyType": val.PolicyType,
        "CreationUser": val.CreationUser
      });
   
      this.ClosingPeriodDetailsRows = this.datalist; // data;
    });

  }


  onRemove() {

    //RemoveRange
    if (this.selectedRows === undefined || this.selectedRows.length == 0) {
      this.cm.pushMessage("warn", "Warn Message", "No rows selected.");
    }
    else {
      this.cm.confirmationService.confirm({
        message: 'Are you sure you want to delete these records?',
        header: 'Delete Confirmation',
        icon: 'fa fa-trash',
        accept: () => {
          this.loading = true;
          this.cm.showOrHideSpinner(this.loading);
          console.log(this.selectedRows);
          this.closingPeriodService.RemoveRangeClosingPeriod(this.selectedRows)
            .subscribe(
              data => {
                this.selectedRows = [];
                this.loading = false;
                this.cm.showOrHideSpinner(this.loading);
                this.FindClosingPeriod();
                this.onResetEntry();
                this.cm.pushMessage("success", "Success", "Record Deleted Successfully");
              }
              ,
              err => {
                //this.selectedRows = [];
                console.log(err);
                this.loading = false;
                this.cm.showOrHideSpinner(this.loading);
                this.cm.pushError(err);
              });
        },
        reject: () => {
          this.selectedRows = [];
          this.loading = false;
          this.cm.showOrHideSpinner(this.loading);
        }
      });
    }
  }




  OnRowClickedEdit(event: ClosingPeriods) {

    if (event.Id > 0) {

      this.closingPeriodService.getData(event.Id).subscribe(
        (data) => {
          this.model = data;
          if (this.model.Id) {
            this.setFormValues();
            this.showSaveUpdate = true;
          }
        });

    }

  }


  OnCheckboxSelected(selectedRows) {
    this.selectedRows = selectedRows;
  }



  onReset() {


    this.model = new ClosingPeriods();
    this.cm.resetForm(this.closingFormSearch);

    this.closingFormSearch = this.cm.fb.group({
      insuranceSystemSearch: [0, { updateOn: 'blur' }],
      insuranceClassSearch: [0, { updateOn: 'blur' }],
      subLineOfBusinessSearch: [0, { updateOn: 'blur' }],
      moduleSearch: ['', { updateOn: 'blur' }],
      branchSearch: [0, { updateOn: 'blur' }]
    });

    this.InsuranceClassSearchList = [];
    this.SubLineofBusiness = [];
    this.ModuleSearchList = [];

    this.bindEvents();

  }

  onResetEntry() {
    this.model = new ClosingPeriods();

    this.cm.resetForm(this.closingFormEntry);

    this.closingFormEntry = this.cm.fb.group({
      Id: [0],
      CreationUser: ['Admin'],
      insuranceSystemEntry: ['', { updateOn: 'blur' }, [Validators.required]],
      insuranceClassEntry: ['', { updateOn: 'blur' }, [Validators.required]],
      policyTypeEntry: ['', { updateOn: 'blur' }],
      moduleCodeEntry: ['', { updateOn: 'blur' }, [Validators.required]],
      branchIdEntry: ['', { updateOn: 'blur' }],
      closingDateEntry: ['', [Validators.required]]
    })

    this.showSaveUpdate = false;

    this.InsuranceClassEntryList = [];
    this.SubLineofBusinessEntryList = [];
    this.ModuleEntryList = [];

    this.bindEvents();
  }
}


//to handel(map) returned data from CoreApi and use them in P-dropdownList
export class selectBranchItem {
  label?: string;
  value: any;
}
