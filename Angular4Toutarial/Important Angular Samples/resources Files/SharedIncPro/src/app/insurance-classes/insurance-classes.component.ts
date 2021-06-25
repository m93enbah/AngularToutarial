import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CommonService } from '../shared/services/common.service';
import { DomainId, Application, SstClasses, LineOfBusiness, SstPolicyTypes, User } from '../models/data-models';
import { CoreService } from '../shared/services/core.service';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { SstCodes } from '../models/data-models';
import { environment } from 'src/environments/environment.prod';
import { SstClassesService } from '../shared/services/sst-classes.service';
import { SstpolicytypesService } from '../shared/services/sstpolicytypes.service';
//import { selectItem } from '../closing-period/closing-period.component';

@Component({
  selector: 'css-insurance-classes',
  templateUrl: './insurance-classes.component.html',
  styleUrls: ['./insurance-classes.component.scss']
})
export class InsuranceClassesComponent implements OnInit {

  classModel: SstClasses = new SstClasses();
  policyTypeModel: SstPolicyTypes = new SstPolicyTypes();

  InsuranceSystemfrm: FormGroup;
  InsuranceClassfrm: FormGroup;
  PolicyTypeForm: FormGroup;

  InsuranceSystemList: SelectItem[] = [];
  LOBList: SelectItem[] = [];

  UnearnedCalcTypeList: SelectItem[] = [];
  TreatyTypeList: SelectItem[] = [];
  InsuranceClassEntryList: SelectItem[] = [];
  RateBasisList: SelectItem[] = [];
  RateTypeList: SelectItem[] = [];
  RatePerList: SelectItem[] = [];
  TermBasisList: SelectItem[] = [];
  TargerGenderList: SelectItem[] = [];
  BasicCoverList: SelectItem[] = [];



  loggedInUser: User = new User();

  selectedClassItems: SstClasses[] = [];


  private ClassesGrid: SstClasses[] = new Array<SstClasses>();

  showSaveUpdate: boolean = false;
  showSUBLOBSaveUpdate: boolean = false;
  ShowSUBLOBEntry: boolean = false;
  //ShowSUBLOBEntry: boolean = true;



  calenderDateFormat = environment.calenderDateFormat;

  //Classes
  insuranceclassescols: any[] =
    [
      { field: "Code", header: "Code", hidden: false },
      { field: "Name", header: "Name", hidden: false },
      { field: "Name2", header: "Name2", hidden: false }
    ];
  insuranceclassesrows: SstClasses[] = [];

  //Policy Types
  subLobCols: any[] =
    [
      { field: "Id", header: "Code", hidden: false },
      { field: "Name", header: "Name", hidden: false },
      { field: "Name2", header: "Name2", hidden: false }
    ];
  subLobRows: SstPolicyTypes[] = [];

  constructor(private cm: CommonService, private cls: SstClassesService, private plt: SstpolicytypesService) {
  }

  ngOnInit() {
    this.loggedInUser = this.cm.getLoggedInUser();
    this.createForm();

    this.cm.getInsuranceSystem().subscribe(data => { this.InsuranceSystemList = data });

    //this.cm.getInsuranceClasses(selectedValue, this.loggedInUser.companyId).subscribe(
    //  data => { this.InsuranceClassEntryList = data });

    this.LOBList = [
      { label: 'Select Item..', value: null },
      { label: 'Credit', value: LineOfBusiness.Credit },
      { label: 'Engineering', value: LineOfBusiness.Engineering },
      { label: 'General Accident', value: LineOfBusiness.GeneralAccident },
      { label: 'Life', value: LineOfBusiness.Life },
      { label: 'Marine Cargo', value: LineOfBusiness.MarineCargo },
      { label: 'Marine Hull', value: LineOfBusiness.MarineHull },
      { label: 'Medical', value: LineOfBusiness.Medical },
      { label: 'Motor', value: LineOfBusiness.Motor },
      { label: 'Package', value: LineOfBusiness.Package },
      { label: 'Property', value: LineOfBusiness.Property }
    ];


    this.InsuranceSystemfrm.controls.SystemId.valueChanges.subscribe(
      data => {
   
        this.SearchClasses(data, 1);
      }
    )


  }


  createForm() {

    this.InsuranceSystemfrm = this.cm.fb.group({
      SystemId: ['', [Validators.required]]
    });


    this.InsuranceClassfrm = this.cm.fb.group({
      insuranceSystem: ['', [Validators.required]],
      classCode: ['', [Validators.required],],
      name: ['', [Validators.required]],
      name2: [''],
      lineOfBusiness: ['', [Validators.required]]
    });

    this.PolicyTypeForm = this.cm.fb.group({
      insuranceClassEntry: ['', [Validators.required]],
      SUBLOBCode: ['', [Validators.required],],
      SUBLOBname: ['', [Validators.required]],
      SUBLOBname2: [''],
      SUBlineOfBusiness: [''],
      UnearnedCalcType: [''],
      EffectiveDate: [''],
      ExpiryDate: [''],
      TreatyType: [''],
      EarnedPerc: [''],
      RateBasis: ['', [Validators.required]],
      RateType: ['', [Validators.required]],
      RatePer: ['', [Validators.required]],
      AgeDecrease: [''],
      MinPOAge: [''],
      MaxPOAge: [''],
      MinInsuredAge: [''],
      MaxInsuredAge: [''],
      MinTerm: [''],
      MaxTerm: [''],
      BasicCover: ['', [Validators.required]],
      TargerGender: ['', [Validators.required]],
      TermBasis: ['', [Validators.required]],
      MaturityAge: ['', [Validators.required]],
      AccepyLongTerm: ['']
    });

    this.showSaveUpdate = false;
  }


  OnClassRowClicked(selectedRow: SstClasses) {

    let companyId = this.loggedInUser.companyId;
    
    this.cls.getData(selectedRow.Id, companyId)
    .subscribe(
      (data) => {
        this.classModel = data;
        if (this.classModel.Id) {
          this.SearchPolicyTypes(this.classModel.Id, companyId);
          this.setInsuranceClassFormValues();
          this.showSaveUpdate = true;
          this.ShowSUBLOBEntry = false;
        }
      });

  }

  OnInsClassCheckboxSelected(selectedRows: SstClasses[]) {
    this.selectedClassItems = selectedRows;
  }


  OnSubLobRowClicked(selectedRow: SstPolicyTypes) {
    let companyId = this.loggedInUser.companyId;

    this.plt.getData(selectedRow.Id, companyId)
      .subscribe(
        (data) => {
          this.policyTypeModel = data;
          if (this.policyTypeModel.Id) {
            this.setPolicyTypeFormValues();
            this.ShowSUBLOBEntry = true;
          }
        });

  }

  setInsuranceClassFormValues() {
    this.InsuranceClassfrm.patchValue({
      insuranceSystem: this.classModel.SystemId.toString(),
      classCode: this.classModel.Code,
      name: this.classModel.Name,
      name2: this.classModel.Name2,
      lineOfBusiness: this.classModel.BusinessType,
    });
  }

  setPolicyTypeFormValues() {
    this.PolicyTypeForm.patchValue({
      insuranceClassEntry: this.policyTypeModel.ClassId.toString(),
      SUBLOBCode: [''],//this.policyTypeModel.Code,
      SUBLOBname: this.policyTypeModel.Name,
      SUBLOBname2: this.policyTypeModel.Name2,
      SUBlineOfBusiness: this.policyTypeModel.BusinessType.toString(),
      UnearnedCalcType: this.policyTypeModel.UnearnedBasis.toString(),
      EffectiveDate: this.policyTypeModel.EffectiveDate,
      ExpiryDate: this.policyTypeModel.ExpiryDate,
      TreatyType: this.policyTypeModel.TreatyType.toString(),
      EarnedPerc: this.policyTypeModel.EarnedPercent,
      RateBasis: this.policyTypeModel.RateBasis.toString(),
      RateType: this.policyTypeModel.RateType.toString(),
      RatePer: this.policyTypeModel.RatePer.toString(),
      AgeDecrease: this.policyTypeModel.AgeDecrease,
      MinPOAge: this.policyTypeModel.MinMemberAge,
      MaxPOAge: this.policyTypeModel.MaxMemberAge,
      MinInsuredAge: this.policyTypeModel.MinCustomerAge,
      MaxInsuredAge: this.policyTypeModel.MaxCustomerAge,
      MinTerm: this.policyTypeModel.MinTerm,
      MaxTerm: this.policyTypeModel.MaxTerm,
      BasicCover: this.policyTypeModel.BasicCover.toString(),
      TargerGender: this.policyTypeModel.TargetGender.toString(),
      TermBasis: this.policyTypeModel.TermBasis.toString(),
      MaturityAge: this.policyTypeModel.MaturityAge,
      AccepyLongTerm: this.policyTypeModel.LongTerm
    });
  }

  SearchClasses(insuranceSystem: number, companyId: number) {
    
    this.cls.SearchClasses(insuranceSystem, companyId).subscribe(
      data => {
        this.insuranceclassesrows = data;
        this.ShowSUBLOBEntry = false;
        //this.ShowSUBLOBEntry = true;
        this.subLobRows = [];
      },
      err => {
        console.log(err);
      })

  }


  SearchPolicyTypes(classId: number, companyId: number) {

    this.plt.SearchPolicyTypes(classId, companyId).subscribe(
      data => {
        this.subLobRows = data;
      },
      err => {
        console.log(err);
      })

  }


  saveInsuranceClass() {
    
    this.setInsClassModelValues();
    let companyId = this.loggedInUser.companyId;

    if (this.classModel.Id > 0) {
      this.classModel.ModificationUser = this.loggedInUser.userName;
      this.classModel.ModificationDate = new Date;
      this.cls.UpdateClass(this.classModel).subscribe(
        data => {
          console.log(data);
          this.showSaveUpdate = true;
          this.SearchClasses(this.classModel.SystemId, this.loggedInUser.companyId);

        },
        err => {
          console.log(err);
        }
      )
    }
    else {
      this.classModel.CreationUser = this.loggedInUser.userName;
      this.classModel.CreationDate = new Date;

      this.insuranceclassesrows.push(this.classModel);
      this.cls.SaveClass(this.classModel).subscribe(res => { res; this.SearchClasses(this.classModel.SystemId, this.loggedInUser.companyId); });
      this.showSaveUpdate = false;
    }

  }


  setInsClassModelValues() {
    this.classModel.SystemId = this.InsuranceClassfrm.value.insuranceSystem;
    this.classModel.Code = this.InsuranceClassfrm.value.classCode;
    this.classModel.BusinessType = this.InsuranceClassfrm.value.lineOfBusiness;
    this.classModel.Name = this.InsuranceClassfrm.value.name;
    this.classModel.Name2 = this.InsuranceClassfrm.value.name2;
  }

  DeleteInsClasses() {
    
    if (this.selectedClassItems === undefined || this.selectedClassItems.length == 0) {
      this.cm.pushMessage("warn", "Warn Message", "No rows selected.");
    }
    else {
      this.cm.confirmationService.confirm({
        message: 'Are you sure you want to delete these records?',
        header: 'Delete Confirmation',
        icon: 'fa fa-trash',
        accept: () => {
          //this.loading = true;
          //this.cm.showOrHideSpinner(this.loading);
          this.cls.RemoveClass(1, this.selectedClassItems).subscribe(
            data => {
              //this.resetForm();
              //this.getFacOutwards(this.krnFacInwardId, 1);
              //this.loading = false;
              this.selectedClassItems = [];
              //this.cm.showOrHideSpinner(this.loading);
              this.cm.pushMessage("success", "Success", "Record Deleted Successfully");
            },
            err => {
              console.log(err);
              //this.loading = false;
              //this.cm.showOrHideSpinner(this.loading);
              this.cm.pushError(err);
            }
          )
        },
        reject: () => {
          this.selectedClassItems = [];
        }
      });
    }

  }



  saveSUBLOB() {


    this.setSUBLOBValues();
    let companyId = this.loggedInUser.companyId;

    if (this.policyTypeModel.Id > 0) {
      this.policyTypeModel.ModificationUser = this.loggedInUser.userName;
      this.policyTypeModel.ModificationDate = new Date;
      this.plt.UpdatePolicyType(this.policyTypeModel).subscribe(
        data => {
          console.log(data);
          this.showSaveUpdate = true;
          this.SearchPolicyTypes(this.policyTypeModel.ClassId, this.loggedInUser.companyId);

        },
        err => {
          console.log(err);
        }
      )
    }
    else {
      this.policyTypeModel.CreationUser = this.loggedInUser.userName;
      this.policyTypeModel.CreationDate = new Date;

      this.subLobRows.push(this.policyTypeModel);
      this.plt.SavePolicyType(this.policyTypeModel).subscribe(res => { res; this.SearchPolicyTypes(this.policyTypeModel.ClassId, this.loggedInUser.companyId); });
      this.showSaveUpdate = false;
    }


  }


  setSUBLOBValues() {
    this.policyTypeModel.ClassId = this.PolicyTypeForm.value.insuranceClassEntry;
    //this.policyTypeModel.Code = this.PolicyTypeForm.value.SUBLOBCode;
    this.policyTypeModel.Name = this.PolicyTypeForm.value.SUBLOBname;
    this.policyTypeModel.Name2 = this.PolicyTypeForm.value.SUBLOBname2;
    this.policyTypeModel.BusinessType = this.PolicyTypeForm.value.SUBlineOfBusiness;

    this.policyTypeModel.UnearnedBasis = this.PolicyTypeForm.value.UnearnedCalcType;
    this.policyTypeModel.EffectiveDate = this.PolicyTypeForm.value.EffectiveDate;
    this.policyTypeModel.ExpiryDate = this.PolicyTypeForm.value.ExpiryDate;
    this.policyTypeModel.TreatyType = this.PolicyTypeForm.value.TreatyType;
    this.policyTypeModel.EarnedPercent = this.PolicyTypeForm.value.EarnedPerc;

    this.policyTypeModel.RateBasis = this.PolicyTypeForm.value.RateBasis;
    this.policyTypeModel.RateType = this.PolicyTypeForm.value.RateType;
    this.policyTypeModel.RatePer = this.PolicyTypeForm.value.RatePer;
    this.policyTypeModel.AgeDecrease = this.PolicyTypeForm.value.AgeDecrease;
    this.policyTypeModel.MinMemberAge = this.PolicyTypeForm.value.MinPOAge;

    this.policyTypeModel.MaxMemberAge = this.PolicyTypeForm.value.MaxPOAge;
    this.policyTypeModel.MinCustomerAge = this.PolicyTypeForm.value.MinInsuredAge;
    this.policyTypeModel.MaxCustomerAge = this.PolicyTypeForm.value.MaxInsuredAge;
    this.policyTypeModel.MinTerm = this.PolicyTypeForm.value.MinTerm;
    this.policyTypeModel.MaxTerm = this.PolicyTypeForm.value.MaxTerm;

    this.policyTypeModel.BasicCover = this.PolicyTypeForm.value.BasicCover;
    this.policyTypeModel.TargetGender = this.PolicyTypeForm.value.TargerGender;
    this.policyTypeModel.TermBasis = this.PolicyTypeForm.value.TermBasis;
    this.policyTypeModel.MaturityAge = this.PolicyTypeForm.value.MaturityAge;
    this.policyTypeModel.LongTerm = this.PolicyTypeForm.value.AccepyLongTerm;
  }

}
