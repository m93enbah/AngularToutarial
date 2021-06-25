import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CommonService } from '../shared/services/common.service';
import { DomainId, Application, User } from '../models/data-models';
import { CoreService } from '../shared/services/core.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { SstCodes } from '../models/data-models';
import { systemCodesService } from '../shared/services/systemCodes.service';
import { error } from 'protractor';



@Component({
  selector: 'system-codes',
  templateUrl: './system-codes.component.html',
  styleUrls: ['./system-codes.component.scss']

})

export class systemCodes implements OnInit {
  SearchCodeForm: FormGroup;
  EntryCodeForm: FormGroup;
  model: SstCodes = new SstCodes();
  modelMinor: SstCodes = new SstCodes();
  // Controlls 
  InsuranceSystemList: any[] = [];
  ModuleList: SelectItem[];
  filterdMajorCode: any[];
  filterdMinorCode: any[];
  filteredParentCode: any[];//Parent Code
  ParentCodeList: any[];
  filteredDomain: any[];
  //
  EntryInsuranceSystemList: any[] = [];
  EntryModuleList: any[] = [];
  EntryfilterMajorCode: any[];
  EntryfilteredParentCode: any[];
  EntryfilteredDomain: any[];
  //
  loading: boolean = false;
  summationPercentage: number;
  rowsCodes: SstCodes[] = [];
  selectedItem: SstCodes = new SstCodes();
  selectedItems: SstCodes[] = []; 
  showSaveUpdate: boolean = false;
  loggedInUser: User = new User();
  //Major DataTable
  majorRows: SstCodes[] = [];
  majorcols: any[] =
    [
      { field: "Id", header: "Id", hidden: true },
      { field: "MajorCode", header: "Major Code", hidden: false },
      { field: "InsuranceSystem", header: "Insurance System", hidden: false},
      { field: "Name", header: "Name", hidden: false },
      { field: "Name2", header: "Name2", hidden: false }
    ];

  //Minor DataTable
  minorRows: SstCodes[] = [];
  minorcols: any[] =
    [
      { field: "Id", header: "Id", hidden: true },
      { field: "MinorCode", header: "Minor Code", hidden: false },
      { field: "Name", header: "Name", hidden: false },
      { field: "Name2", header: "Name2", hidden: false }
    ];

  constructor(private fb: FormBuilder,
    private systemCodesService: systemCodesService,
    private cs: CommonService, private coreService: CoreService) { }

  ngOnInit() {
    this.createSearchForm();
    this.createEntryForm();
    this.bindEvents();
    this.loggedInUser = this.coreService.getLoggedInUser();

    /*this.InsuranceSystemList =*/
    this.cs.getInsuranceSystem().subscribe(data => {
      this.InsuranceSystemList = data;
    });
    //Entry Form
    this.cs.getInsuranceSystem().subscribe(data => {
      this.EntryInsuranceSystemList = data;
    });  

  }

  createSearchForm() {
    this.SearchCodeForm = this.fb.group({
      insuranceSystem: [{ value: null }],
      module: [''],
      majorCode: [{ value: null }],
      minorCode: [{ value: null }],
      parentCode: [{ value: null }],
      domain: [{ value: null }]
    });
    
  }

  createEntryForm() {
    this.EntryCodeForm = this.fb.group({
      EntryinsuranceSystem: [{ value: null }],
      Entrymodule: [''],
      majorCodeEntry: [{ value: null }],
      name: ['', [Validators.required]],
      name2: [''],
      parentCodeEntry: [{ value: null }],
      domain: [{ value: null }]
    }); 
  }

  bindEvents() {
    const CodesSearchCtrl = (<any>this.SearchCodeForm).controls;
    const CodesEntryCtrl = (<any>this.EntryCodeForm).controls;

    const insuranceSystemChanges$ = CodesSearchCtrl.insuranceSystem.valueChanges;
    const majorCodeChanges$ = CodesSearchCtrl.majorCode.valueChanges;

    //For Entry Form
    const EntryinsuranceSystemChanges$ = CodesEntryCtrl.EntryinsuranceSystem.valueChanges;
    const EntrymoduleChanges$ = CodesEntryCtrl.Entrymodule.valueChanges;
    const EntrymajorChange$ = CodesEntryCtrl.majorCodeEntry.valueChanges;

    EntryinsuranceSystemChanges$.subscribe(EntryinsuranceSystemSelected => {
      if (EntryinsuranceSystemSelected) {
        this.cs.getModules(EntryinsuranceSystemSelected, this.loggedInUser.companyId)
          .subscribe(data => {
            this.EntryModuleList = data;

            if (this.model.ModuleCode) {
              this.EntryCodeForm.patchValue(
                {
                  Entrymodule: this.model.ModuleCode,
                });
            }
            
            //this.systemCodesService.getMajorCode(EntryinsuranceSystemSelected, this.model.ModuleCode, '').subscribe(
            //  data => {
            //    this.EntryfilterMajorCode = data;

            //    if (this.model.MajorCode) {
            //      this.EntryCodeForm.patchValue(
            //        {
            //          majorCodeEntry: {
            //            label: this.EntryfilterMajorCode.filter(i => i.value == this.model.MajorCode.toString())[0].label,
            //            //label: this.model.MajorCode != null ? this.EntryfilterMajorCode.filter(i => i.value == this.model.MajorCode.toString())[0].label : null,
            //            value: this.model.MajorCode.toString()
            //          }
            //        });
            //    }

            //  });

            //this.systemCodesService.getParentCode(EntryinsuranceSystemSelected, this.model.ModuleCode, this.model.MajorCode, this.model.MinorCode, '').subscribe(data => {
            //  this.EntryfilteredParentCode = data;

            //  if (this.model.SstCodeId) {
            //    this.EntryCodeForm.patchValue({
            //      parentCodeEntry: {
            //        label: this.EntryfilteredParentCode.filter(i => i.value == this.model.SstCodeId.toString())[0].label,
            //        value: this.model.SstCodeId.toString()
            //      }
            //    }
            //    )
            //  }

            //})

            //this.cs.GetDomainSuggest('', EntryinsuranceSystemSelected, this.model.ModuleCode, this.loggedInUser.companyId).subscribe(data => {
            //  this.EntryfilteredDomain = data;

            //  if (this.model.DomainId) {
            //    this.EntryCodeForm.patchValue({
            //      domain: {
            //        label: this.EntryfilteredDomain.filter(i => i.value == this.model.DomainId.toString())[0].label,
            //        value: this.model.DomainId.toString()
            //      }
            //    })

            //  }

             
            //})

          });
      }
    });
    //********************************
    EntrymoduleChanges$.subscribe(modelCode => {
      debugger;
      let systemValue = this.model.SystemId ? this.model.SystemId : 0;

      this.systemCodesService.getMajorCode(systemValue, modelCode, '').subscribe(
          data => {
            this.EntryfilterMajorCode = data;

            if (this.model.Id) {
              this.EntryCodeForm.patchValue(
                {
                  
                  majorCodeEntry: {
                    label: this.EntryfilterMajorCode.filter(i => i.value == this.model.CodeId.toString())[0].label,
                    value: this.model.CodeId.toString()
                  },
                });
            }

          });
    });
    ////////////////////////////////////////////////////////////
    //EntrymajorChange$.subscribe(majorCode => {
    //  let systemValue = this.model.SystemId ? this.model.SystemId : 0;
    //  let moduleCode = this.model.ModuleCode ? this.model.ModuleCode : "0";

    //  this.systemCodesService.getParentCode(systemValue, moduleCode, majorCode, this.model.MinorCode, '').subscribe(data => {
    //    this.EntryfilteredParentCode = data;

    //    if (this.model.Id) {
    //      this.EntryCodeForm.patchValue(
    //        {
    //          parentCodeEntry: {
    //            label: this.EntryfilterParentCode.filter(i => i.value == this.model)
    //          }
    //        }

    //      )
    //    }

    //  })


    //})



    ///////////////////////////////////////////////////////////
    insuranceSystemChanges$.subscribe(insuranceSystemSelected => {
      if (insuranceSystemSelected) {
        this.cs.getModules(insuranceSystemSelected, this.loggedInUser.companyId)
          .subscribe(data => {
            this.ModuleList = data;
          });
      }
    });
    
    majorCodeChanges$.subscribe(majorCodeSelected => {
      if (majorCodeSelected) {
        this.SearchCodeForm.controls['minorCode'].reset();
        this.systemCodesService.getMinorCode(majorCodeSelected, this.loggedInUser.companyId, '')
          .subscribe(data => {
            this.filterdMinorCode = data;
          });
        
      }
    });
  }

  ////Domain For Search Form 

  filterdomain(event) {
    let query = event.query;
    let formValue = this.SearchCodeForm.value;

    let systemValue = 0;

    if (formValue.insuranceSystem != '' || formValue.insuranceSystem != null)
      systemValue = formValue.insuranceSystem;

    let moduleValue = '';

    if (formValue.module != '' || formValue.module != null)
      moduleValue = formValue.module;

    this.cs.GetDomainSuggest(query, systemValue, moduleValue , this.loggedInUser.companyId).subscribe(data => {
 
      this.filteredDomain = data;

    })
  }


  onSearch() {
    
    let searchModel: SstCodes = new SstCodes();
    searchModel.SystemId = this.SearchCodeForm.value.insuranceSystem;
    searchModel.ModuleCode = this.SearchCodeForm.value.module;
    searchModel.MajorCode = this.SearchCodeForm.value.majorCode.value;
    searchModel.MinorCode = this.SearchCodeForm.value.minorCode;
    searchModel.CodeId = this.SearchCodeForm.value.parentCode;
    searchModel.DomainId = this.SearchCodeForm.value.domain;

    this.systemCodesService.getDataByCritiria(searchModel).subscribe(data => {
      this.majorRows = data;
     
    });

  }

  getInsuranceSystem() {
    this.cs.InsuranceSystem().subscribe(data => {
      this.InsuranceSystemList = data;
    });
  }

  getModule() {
    this.cs.Module().subscribe(data => {
      this.ModuleList = data;
    });
  }
  // Test
  filterMajorCode(event) {
    let query = event.query;

    let systemValue = 0;
    if (this.SearchCodeForm.value.insuranceSystem) {
      systemValue = this.SearchCodeForm.value.insuranceSystem;
    }

    let moduleCodeValue = '';
    if (this.SearchCodeForm.value.module) {
      moduleCodeValue = this.SearchCodeForm.value.module;
    }

    this.systemCodesService.getMajorCode(systemValue, moduleCodeValue, query).subscribe(
      data => {
        this.filterdMajorCode = data;
       
      },
      error => { console.log(error); });
  }

  EntryfilteredMajorCode(event) {
    let query = event.query;

    let systemValue = 0;
    if (this.EntryCodeForm.value.EntryinsuranceSystem) {
      systemValue = this.EntryCodeForm.value.EntryinsuranceSystem;
    }

    let moduleCodeValue = '';
    if (this.EntryCodeForm.value.Entrymodule) {
      moduleCodeValue = this.EntryCodeForm.value.Entrymodule;
    }

    this.systemCodesService.getMajorCode(systemValue, moduleCodeValue, query).subscribe(
      data => {
        this.EntryfilterMajorCode = data;
      },
      error => { console.log(error);});
  }

  filterMinorCode(event) {
    let query = event.query;

    let majorValue = 0;
    if (this.SearchCodeForm.value.majorCode.value != '' || this.SearchCodeForm.value.majorCode.value != null)
      majorValue = this.SearchCodeForm.value.majorCode.value;

    this.systemCodesService.getMinorCode(majorValue, this.loggedInUser.companyId, query).subscribe(
      data => {
        this.filterdMinorCode = data;

      },
      error => { console.log(error); });
  }

  filterParentCode(event) {
    let query = event.query;
    let formValue = this.SearchCodeForm.value;

    let systemValue = 0;
    if (formValue.insuranceSystem != '' || formValue.insuranceSystem != null)
      systemValue = formValue.insuranceSystem;

    let moduleValue = '';
    if (formValue.module != '' || formValue.module != null)
      moduleValue = formValue.module;

    let majorValue = 0;
    if (formValue.majorCode.value != '' || formValue.majorCode.value != null)
      majorValue = formValue.majorCode.value;

    let minorValue = 0;
    if (formValue.minorCode.value != '' || formValue.minorCode.value != null)
      minorValue = formValue.minorCode.value;

    this.systemCodesService.getParentCode(systemValue, moduleValue, majorValue, minorValue, query).subscribe(data => {
      
      this.filteredParentCode = data;
    },
      error => { console.log(error);})
  }
  //For Entry form
  EntryfilterParentCode(event) {
    let query = event.query;
    let formValue = this.EntryCodeForm.value;

    let systemValue = 0;
    if (formValue.EntryinsuranceSystem != '' || formValue.EntryinsuranceSystem != null)
      systemValue = formValue.EntryinsuranceSystem;

    let moduleValue = '';
    if (formValue.Entrymodule != '' || formValue.Entrymodule != null)
      moduleValue = formValue.Entrymodule;

    let majorValue = 0;
    if (formValue.majorCodeEntry.value != '' || formValue.majorCodeEntry.value != null)
      majorValue = formValue.majorCodeEntry.value;

    this.systemCodesService.getParentCode(systemValue, moduleValue, majorValue, 0, query).subscribe(data => {
      
      this.EntryfilteredParentCode = data;
    },
      error => { console.log(error); })
  }


  //EntryfilterDomain(event) {
  //  let query = event.query;
  //  let formValue = this.EntryCodeForm.value;


  //  let systemValue = 0;

  //  if (formValue.EntryinsuranceSystem != '' || formValue.EntryinsuranceSystem != null)
  //    systemValue = formValue.EntryinsuranceSystem;

  //  let moduleCodeValue = '';

  //  if (formValue.Entrymodule != '' || formValue.Entrymodule != null)
  //    moduleCodeValue = formValue.Entrymodule;


  //  this.cs.GetDomainSuggest(query, systemValue, moduleCodeValue , this.loggedInUser.companyId).subscribe(data => {

  //    this.EntryfilteredDomain = data;
  //  });

  //}






  //Domain 
  //filterdomain(event) {
  //  let query = event.query;

  //  let insuranceSystem = 0;
  //  if (this.SearchCodeForm.value.insuranceSystem != '' && this.SearchCodeForm.value.majorCode != null) {
  //    insuranceSystem = this.SearchCodeForm.value.insuranceSystem;
  //    this.cs.GetDomainSuggest(query, insuranceSystem, this.loggedInUser.companyId).subscribe(//First Params ?
  //      data => {
  //        this.filteredDomain = data;

  //      },
  //      error => { console.log(error); });
  //  }
  //  else {
  //    this.filteredDomain = [];
  //  }
  //}

  /**************************** */
  getMinorCode() {
    this.systemCodesService.MinorCode().subscribe(data => {
      this.filterdMinorCode = data;     
    });
  }
   
  getParentCode() {
    this.systemCodesService.ParentCode().subscribe(data => {
      this.ParentCodeList = data;
    });
  }

  //getDomainList() {
  //  this.cs.DomainList().subscribe(data => {
  //    this.filterDomain = data;
  //  });
  //}

  resetMajorForm() {
    this.cs.resetForm(this.SearchCodeForm);
    this.createSearchForm();
  }

  setModel() {
    let formValue = this.EntryCodeForm.value;
    this.model.SystemId = formValue.EntryinsuranceSystem;
    this.model.ModuleCode = formValue.Entrymodule;
    this.model.MajorCode = formValue.majorCodeEntry.value;
    this.model.Name = formValue.name;
    this.model.Name2 = formValue.name2;
    this.model.CodeId = formValue.parentCode;
    this.model.DomainId = formValue.domain;

    
  }

   
  saveUpdate() {
    
    if (this.model.Id > 0) {
      this.model.CreationUser = this.cs.getLoggedInUser().userName;
      this.model.CreationDate = new Date;
      this.systemCodesService.put(this.minorRows).subscribe(
        data => {
          this.minorRows = data;
         // this.loading = false;
         // this.cs.showOrHideSpinner(this.loading);
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
      this.model.CreationUser = this.cs.getLoggedInUser().userName;
      this.model.CreationDate = new Date;
      this.setModel();
      this.systemCodesService.post(this.model).subscribe(
        data => {
          
          this.getMinorCodes(data.MajorCode);
          //this.minorRows = data;
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
  
  getMinorCodes(majorCode: number) {
    this.systemCodesService.getMinorCodesByMajorCode(majorCode, this.loggedInUser.companyId).subscribe(data => { // Method Search
      this.minorRows = data;
    });
  }

  OnRowClicked(selectedRow: SstCodes) {
    this.EntryCodeForm.reset();
    this.selectedItem = selectedRow;
    this.getMinorCodes(this.selectedItem.MajorCode);
    
  }
  
  //OnRowClickedEdit(event: ClosingPeriods) {

  //  if (event.Id > 0) {

  //    this.closingPeriodService.getData(event.Id).subscribe(
  //      (data) => {
  //        this.model = data;
  //        if (this.model.Id) {
  //          this.setFormValues();
  //          this.showSaveUpdate = true;
  //        }
  //      });

  //  }

  //}
  /******************************/

  setFormValues() {
    this.EntryCodeForm.patchValue(
      {
        EntryinsuranceSystem: this.model.SystemId.toString(),
        //Entrymodule: this.model.ModuleCode,
        //majorCodeEntry: {
        //  label: this.EntryfilterMajorCode.filter(i => i.value == this.model.MajorCode.toString())[0].label,
        //  value: this.model.MajorCode.toString()
        //},
        name: this.model.Name,
        name2: this.model.Name2

        //parentCodeEntry: {
        //  label: this.EntryfilteredParentCode.filter(i => i.value == this.model.SstCodeId.toString())[0].label,
        //  value: this.model.SstCodeId.toString()
        //},
      //  domain: {
      //    label: this.EntryfilteredDomain.filter(i => i.value == this.model.DomainId.toString())[0].label,
      //    value: this.model.DomainId.toString()
      //}
      });
  }

  
  OnMinorRowClicked(event: SstCodes) {
    this.EntryCodeForm.reset();
    
    if (event.Id > 0) {
      this.systemCodesService.getData(event.Id).subscribe(
        (data) => {
          
          this.model = data;
          //
          if (this.model.Id) {
            this.setFormValues();
            this.showSaveUpdate = true;
          }
        }
      )

    }
  }

  /********************************/
  ////Orginal function Start
  //OnMinorRowClicked(selectedRow: SstCodes) {
  //  this.EntryCodeForm.patchValue(
  //   {
  //      EntryinsuranceSystem: selectedRow.SystemId.toString(),
  //      Entrymodule: selectedRow.ModuleCode,
  //      majorCodeEntry: {
  //        label: this.EntryfilterMajorCode.filter(i => i.value == selectedRow.MajorCode.toString())[0].label,
  //        value: selectedRow.MajorCode.toString()
  //     },
  //      name: selectedRow.Name,
  //      name2: selectedRow.Name2,
  //     parentCodeEntry: {
  //       label: this.EntryfilteredParentCode.filter(i => i.value == selectedRow.SstCodeId.toString())[0].label,
  //       value: selectedRow.SstCodeId.toString()
  //     },
  //     domain: {
  //       label: this.EntryfilteredDomain.filter(i => i.value == selectedRow.DomainId.toString())[0].label,
  //       value: selectedRow.DomainId.toString()
  //    }
  // });

  //}

  //End 

  /************************/
  


  OnCheckboxSelected(selectedRows: SstCodes[]) {
  
    this.selectedItems = selectedRows;
  }

  deleteMajorCode() {
    this.deleteMinor(); 
  }

  resetMinor() {
    this.cs.resetForm(this.EntryCodeForm);
    this.createEntryForm();
  
  }

  OnCheckboxMinorSelected(selectedRows: SstCodes[]) {
    
  
    this.selectedItems = selectedRows;
    //this.model = selectedRows;
    console.log(this.selectedItems);
  }

  

  deleteMinor() {
    
    if (this.selectedItems === undefined || this.selectedItems.length == 0) { 
      this.cs.pushMessage("warn", "Warn Message", "No rows selected.");
    }
    else  {
      //this.cs.confirmationService.confirm({
      //  message: 'Are you sure you want to delete these records?',
      //  header: 'Delete Confirmation',
      //  icon: 'fa fa-trash',
      //  accept: () => {
          this.loading = true;
      this.cs.showOrHideSpinner(this.loading);
      this.systemCodesService.deleteBulk(this.selectedItems, this.loggedInUser.companyId).subscribe(
            data => {
              this.resetMinor();
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
      //  },
      //  reject: () => {
      //    this.selectedItems = [];
      //  }
      //});

    }
  }

 
 
}
  
