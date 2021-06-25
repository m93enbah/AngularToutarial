import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators } from "@angular/forms";
import { SelectItem } from 'primeng/api';
import { PeriodUnit, Application, PaymentMethod, SstPaymentCycles, SstPaymentDetails, SstPaymentSystems, User } from '../models/data-models';
import { Dropdown } from 'primeng/primeng';
import { SstpaymentcycleService } from '../shared/services/sstpaymentcycle.service';
import { SstpaymentdetailsService } from '../shared/services/sstpaymentdetails.service';
import { isEmpty } from 'rxjs/operators';
import { DatatableComponent } from '../shared/controls/datatable/datatable.component';
import { SstpaymentsystemsService } from '../shared/services/sstpaymentsystems.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'css-payment-cycle',
  templateUrl: './payment-cycle.component.html',
  styleUrls: ['./payment-cycle.component.scss']
})
export class PaymentCycleComponent implements OnInit {

  PeriodUnit: SelectItem[] = [
    { label: '', value: undefined },
    { label: 'Day', value: PeriodUnit.Day },
    { label: 'Week', value: PeriodUnit.Week },
    { label: 'Month', value: PeriodUnit.Month }

  ];
  InsuranceSystem: SelectItem[] = [
    { label: 'General Insurance', value: Application.GeneralInsurance },
    { label: 'Medical Insurance', value: Application.MedicalInsurance },
    { label: 'Life Insurance', value: Application.LifeInsurance }

  ];
  PaymentMethod: SelectItem[] = [
    { label: '', value: undefined },
    { label: 'Cash', value: PaymentMethod.Cash },
    { label: 'Cheque', value: PaymentMethod.Cheque },
    { label: 'Credit', value: PaymentMethod.Credit }

  ];
  selected = [];
  PaymentCycleId: number;

  private PaymentCycleGrid: SstPaymentCycles[] = new Array<SstPaymentCycles>();
  private PaymentCycleEntry: SstPaymentCycles = new SstPaymentCycles();
  private PaymentDetailsGrid: SstPaymentDetails[] = new Array<SstPaymentDetails>();
  private PaymentDetailsEntry: SstPaymentDetails = new SstPaymentDetails();
  private SystemId: number[] = [];
  private CycleName: string = "";
  private SystemIdEntey: number[];
  private PCEntryAction: string = "Save";

  private Select: SstPaymentCycles[] = new Array<SstPaymentCycles>();
  private loading: boolean = false;
  private EditablePCEvent: any= { field: "", value: "" };
  PaymentCycleEntryfrm: FormGroup;
  PaymentCycleSearchfrm: FormGroup;
  loggedInUser: User = new User();

  constructor(private cs: CommonService, private pcs: SstpaymentcycleService, private pcd: SstpaymentdetailsService, private ps: SstpaymentsystemsService) {
    this.SearchPaymentCycle();

  }

ngOnInit() {
this.createForm()
this.loggedInUser = this.cs.getLoggedInUser();
this.PaymentCycleEntry.Unit = PeriodUnit.Day;

  }
  PaymentCycleGridHeader: string = "Payment Cycle";
  PaymentCycleCols: any[] =
    [
      { field: "Id", header: "Id", hidden: true },
      { field: "Name", header: "Name", hidden: false },
      { field: "Name2", header: "Name2", hidden: false },
      { field: "UnitName", header: "Period Unit", hidden: false },
      { field: "Frequency", header: "Frequency", hidden: false },
      { field: "NoOfPayments", header: "No. Of Payments", hidden: false },
      { field: "IsEditable", header: "Editable", hidden: false, type: "checkbox", disable: false },
      { field: "IsGeneral", header: "General Insurance", hidden: false, type: "checkbox", disable: true },
      { field: "IsMedical", header: "Medical Insurance", hidden: false, type: "checkbox", disable: true },
      { field: "IsLife", header: "Life Insurance", hidden: false, type: "checkbox", disable: true }
    ];

  aymentCycleDetailsGridHeader: string = "Payment Cycle Details";
  PaymentCycleDetailsCols: any[] =
    [
      { field: "Id", header: "Istallment ID", hidden: true },
      { field: "PaymentcycleName", header: "Installment Payment Cycle", hidden: false, },
      { field: "Share", header: "Installment Share %", hidden: false, type: "input-number", required: "required" },
      { field: "Method", header: "Payment Method", hidden: false, type: "input-dropdown", option: "PaymentMethoddropdown", required: "required" },
      { field: "Period", header: "Due Period", hidden: false, type: "input-dropdown", option: "PaymentUnitdropdown", required: "required" },
      { field: "Unit", header: "Due Period Unit", hidden: false, required: "required", type: "input-number" }

    ];


  SubmitPaymentCycleForm() {
    this.setPaymentCycleSearchValues()
      this.SearchPaymentCycle()
   
  }

  

  ResetPaymentCycleEntryForm() {
    this.PaymentCycleEntry = new SstPaymentCycles();
    this.SystemIdEntey = [];
    this.PCEntryAction = "Save";
    this.PaymentCycleEntryfrm.reset();
  }

  ResetPaymentCycleSearchForm(){
    this.SystemId= [];
    this.CycleName = "";
    this.PaymentCycleSearchfrm.reset();
  }

  SubmitPaymentCycledetailsForm(form: NgForm) {
    if (form.valid) {
      this.SavePaymentDetails()
    }
  }


  SearchPaymentCycle() {

    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);
    this.pcs.SearchPaymentCycle(this.CycleName, (this.SystemId.length > 0) ? this.SystemId : [Application.GeneralInsurance, Application.MedicalInsurance, Application.LifeInsurance],this.loggedInUser.companyId).subscribe(pc => {

      pc.map(i => i.IsGeneral = i.SstPaymentSystems.findIndex(e => e.SystemId == Application.GeneralInsurance) < 0 ? false : true);
      pc.map(i => i.IsMedical = i.SstPaymentSystems.findIndex(e => e.SystemId == Application.MedicalInsurance) < 0 ? false : true);
      pc.map(i => i.IsLife = i.SstPaymentSystems.findIndex(e => e.SystemId == Application.LifeInsurance) < 0 ? false : true);
      pc.map(i => i.UnitName = PeriodUnit[i.Unit]);
      this.PaymentCycleGrid = pc
      console.log(pc);
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);

    }, err => {
      console.log(err);

      this.PaymentCycleGrid = new Array<SstPaymentCycles>();
      this.cs.pushError(err);
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);

    })

  }

  GetPaymentCycle(Id: number, CompanyId: number) {

    this.pcs.GetPaymentCycle(Id, CompanyId).subscribe(pc => {
      this.PaymentCycleEntry = pc;
      
      this.GetPaymentSystems(pc.Id, this.loggedInUser.companyId);
      this.GetPaymentDetails(pc.Id, this.loggedInUser.companyId);
      this.PaymentCycleId = pc.Id;

    }, err => { console.log(err); this.PaymentCycleEntry = new SstPaymentCycles(); })

  }

  GetPaymentDetails(Id: number, CompanyId: number) {
    this.pcd.GetPaymentDetails(Id, CompanyId).subscribe(pc => {

      pc.map(i => i.PaymentMethoddropdown = this.PaymentMethod);
      pc.map(i => i.PaymentUnitdropdown = this.PeriodUnit);
      pc.map(i => i.PaymentcycleName = this.PaymentCycleEntry.Name);
      if (pc.findIndex(e => e.Id == undefined) == -1) {
        pc.unshift({ Id: undefined, PaymentcycleName: this.PaymentCycleEntry.Name, Unit: undefined, Period: undefined, Method: undefined, CycleId: this.PaymentCycleEntry.Id, Share: undefined, PaymentMethoddropdown: this.PaymentMethod, PaymentUnitdropdown: this.PeriodUnit } || new SstPaymentDetails())
      }
      this.PaymentDetailsGrid = pc;
    }, err => { console.log(err); this.PaymentDetailsGrid = new Array<SstPaymentCycles>(); })

    console.log(this.PaymentDetailsGrid);

  }

  GetPaymentSystems(Id: number, CompanyId: number) {
    this.ps.GetPaymentSystems(Id, CompanyId).subscribe(pc => {
      this.SystemIdEntey = pc.map(m => m.SystemId)
      this.getPaymentCycleValues();
      if (pc != null) {
        if (this.EditablePCEvent.field == "IsEditable") {
          if (this.EditablePCEvent.value == true) { this.PaymentCycleEntry.IsEditable = 1 } else { this.PaymentCycleEntry.IsEditable = 0 }
          this.SavePaymentCycle()
        }

      }
    }, err => { console.log(err); this.PaymentDetailsGrid = new Array<SstPaymentCycles>(); })

  }


  SavePaymentCycle() {
    this.setPaymentCycleValues()
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);

    let SstPaymentSystems: SstPaymentSystems[] = new Array<SstPaymentSystems>();

    for (let o of this.SystemIdEntey) {

      let PaymentSystemsObj: any = { Id: undefined, CycleId: this.PaymentCycleEntry.Id, SystemId: o, CreationUser: "Admin", CreationDate: new Date() }
      SstPaymentSystems.push(PaymentSystemsObj);

    };

    this.PaymentCycleEntry.SstPaymentSystems = SstPaymentSystems;

    if (this.PaymentCycleEntry.Id == null || this.PaymentCycleEntry.Id == undefined) {
      this.PaymentCycleEntry.CreationUser=this.loggedInUser.userName;
      this.PaymentCycleEntry.CompanyId=this.loggedInUser.companyId;
      this.pcs.SavePaymentCycle(this.PaymentCycleEntry).subscribe(pc => {
        this.SearchPaymentCycle(); 
        this.PaymentCycleEntry.Id = pc;
        this.PCEntryAction = "Update"; 
        console.log(pc);
        this.GetPaymentDetails(pc.Id, this.loggedInUser.companyId);
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
      console.log(this.PaymentCycleEntry);
      this.PaymentCycleEntry.ModificationUser=this.loggedInUser.userName;
      this.PaymentCycleEntry.CompanyId=this.loggedInUser.companyId;
      this.pcs.UpdatePaymentCycle(this.PaymentCycleEntry).subscribe(pc => {
        this.SearchPaymentCycle()
        this.GetPaymentDetails(pc.Id, this.loggedInUser.companyId);
        this.EditablePCEvent= { field: "", value: "" };
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

  OnPaymentDetailsSelected(event: SstPaymentDetails) {

    Object.assign(this.PaymentDetailsEntry, event || new SstPaymentDetails());


  }

  OnPaymentCycleSelected(event: SstPaymentCycles) {
    this.PCEntryAction = "Update";
    this.GetPaymentCycle(event.Id, this.loggedInUser.companyId)
    


  }



  SavePaymentDetails() {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);

    let entrycheck: number = 0;
    if (this.PaymentDetailsGrid[0].Method == null ||
      this.PaymentDetailsGrid[0].Period == null ||
      this.PaymentDetailsGrid[0].Share == null ||
      this.PaymentDetailsGrid[0].Unit == null) { entrycheck = 1 }

     
      this.PaymentDetailsGrid.map(p => p.CreationUser = this.loggedInUser.userName);
      this.PaymentDetailsGrid.map(p => p.CreationDate =new Date() );
      this.PaymentDetailsGrid.map(p => p.ModificationUser = this.loggedInUser.userName);
      this.PaymentDetailsGrid.map(p => p.ModificationDate =new Date() );
    this.pcd.SavePaymentDetails(entrycheck == 0 ? this.PaymentDetailsGrid : this.PaymentDetailsGrid.filter(p => p.Id > 0)).subscribe(pc => {
      pc.map(i => i.PaymentMethoddropdown = this.PaymentMethod);
      pc.map(i => i.PaymentUnitdropdown = this.PeriodUnit);
      pc.map(i => i.PaymentcycleName = this.PaymentCycleEntry.Name);
      if (pc.findIndex(e => e.Id == undefined) == -1) {
        pc.unshift({ Id: undefined, PaymentcycleName: this.PaymentCycleEntry.Name, Unit: undefined, Period: undefined, Method: undefined, CycleId: this.PaymentCycleEntry.Id, Share: undefined, PaymentMethoddropdown: this.PaymentMethod, PaymentUnitdropdown: this.PeriodUnit } || new SstPaymentDetails())
      }
      this.PaymentDetailsGrid = pc

      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
      this.cs.pushMessage("success", "Success", "Record Saved Successfully");

    }, err => {
      console.log(err)
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
      this.cs.pushError(err);
    })


    console.log(this.PaymentDetailsGrid);

  }


  EditableCheckboxChange(event: any) {
    this.EditablePCEvent = event;

  }


  RemovePaymentCycle() {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);

    this.pcs.RemovePaymentCycle(this.PaymentCycleEntry).subscribe(pc => {

      this.SearchPaymentCycle()
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
      this.cs.pushMessage("success", "Success", "Record Removed Successfully");
    }, err => {
      console.log(err)
      this.loading = false;
      this.cs.showOrHideSpinner(this.loading);
      this.cs.pushError(err);
    }
    )
    this.ResetPaymentCycleEntryForm();
  }

  RemovePaymentDetails() {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);
    if (this.PaymentDetailsEntry.Id > 0) {
      this.pcd.RemovePaymentDetails(this.PaymentDetailsEntry).subscribe(pc => {
        this.GetPaymentDetails(this.PaymentCycleEntry.Id, this.loggedInUser.companyId)
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushMessage("success", "Success", "Record Removed Successfully");
      }, err => {
        console.log(err)
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushError(err);
      });
    }
  }


  CheckGeneralApplicationName(): boolean {
    if (this.SystemId.findIndex(e => e == Application.GeneralInsurance) < 0) { return false }
    else { return true };


  }


  CheckMedicalApplicationName(): boolean {
    if (this.SystemId.findIndex(e => e == Application.MedicalInsurance) < 0) { return false }
    else { return true };


  }

  CheckLifeApplicationName(): boolean {
    if (this.SystemId.findIndex(e => e == Application.LifeInsurance) < 0) { return false }
    else { return true };


  }


  createForm() {
    this.PaymentCycleSearchfrm = this.cs.fb.group({
      Name: [''],
      SystemId: [''],

    });


    this.PaymentCycleEntryfrm = this.cs.fb.group({
      Name:  ['', [Validators.required]],
      Name2: [''],
      Unit: ['', [Validators.required]],
      SystemId: ['', [Validators.required]],
      Frequency: ['', [Validators.required]],
      NoOfPayments: ['', [Validators.required]],
      Notes: ['']
    });


  }

  setPaymentCycleSearchValues() {

    this.SystemId=this.PaymentCycleSearchfrm.value.SystemId;
  this.CycleName=this.PaymentCycleSearchfrm.value.Name;

  }

  getPaymentCycleSearchValues() {

    this.PaymentCycleSearchfrm.patchValue({
      SystemId: this.SystemId,
      Name: this.CycleName
    })

  }




  setPaymentCycleValues() {

  this.PaymentCycleEntry.Name=this.PaymentCycleEntryfrm.value.Name;
  this.PaymentCycleEntry.Name2=this.PaymentCycleEntryfrm.value.Name2;
  this.PaymentCycleEntry.Unit=this.PaymentCycleEntryfrm.value.Unit;
  this.SystemIdEntey=this.PaymentCycleEntryfrm.value.SystemId;
  this.PaymentCycleEntry.Frequency=this.PaymentCycleEntryfrm.value.Frequency;
  this.PaymentCycleEntry.NoOfPayments=this.PaymentCycleEntryfrm.value.NoOfPayments;
  this.PaymentCycleEntry.Notes=this.PaymentCycleEntryfrm.value.Notes;

  }

  getPaymentCycleValues() {
    console.log(this.PaymentCycleEntry);
    this.PaymentCycleEntryfrm.patchValue({
      Name: this.PaymentCycleEntry.Name,
      Name2: this.PaymentCycleEntry.Name2,
      Unit:this.PaymentCycleEntry.Unit,
      SystemId:this.SystemIdEntey,
      Frequency:this.PaymentCycleEntry.Frequency,
      NoOfPayments:this.PaymentCycleEntry.NoOfPayments,
      Notes:this.PaymentCycleEntry.Notes
    })

  }



 //PaymentCycleEntryfrm: FormGroup;
 // PaymentCycleSearchfrm: FormGroup;

  xx(x: any) { console.log(x) }

}
