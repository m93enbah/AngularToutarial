import { Data } from '@angular/router';
import { SelectItem } from 'primeng/api';

export class Mapper<T> {
  private items: { [key: string]: T };

  constructor() {
    this.items = {};
  }

  add(key: string, value: T): void {
    this.items[key] = value;
  }

  has(key: string): boolean {
    return key in this.items;
  }

  get(key: string): T {
    return this.items[key];
  }
}

export class FinancialAccount {
  Id: number;
  Name: string;
}

export enum Application {
  GeneralInsurance = 8,
  MedicalInsurance = 10,
  LifeInsurance = 27,
  Greeting = 4,
  Schedular = 306,
  iCore3 = 32,
  SharedSetup = 5,
}

export enum LineOfBusiness {
  Property = 1,
  GeneralAccident = 2,
  Motor = 3,
  MarineHull = 4,
  MarineCargo = 5,
  Engineering = 6,
  Credit = 7,
  Package = 8,
  Medical = 9,
  Life = 10,
}

export enum DomainId {
  Languages = 3144

}

export enum PeriodUnit {
  Day = 1,
  Week = 2,
  Month = 3
}

export enum PaymentMethod {
  Cash = 1,
  Cheque = 2,
  Credit = 3
}

export class loginInfo {
  userName: string;
  password: string;
  companyId: number;
  branchId: number;
  languageId: number;
}


export class User {
  companyId: number;
  userName: string;
  branchId: number;
  language: number;
}

export class MenuItem {
  Id: Number;
  label: string;
  AlternativeName: string;
  Url: string;
  icon: string;
  Application: Application;
  items: MenuItem[];
}


export enum MenuType {
  Application = 1,
  Module = 2,
  SubModule = 3,
  Pages = 4
}

export class DataMenus {

  isError: boolean;
  error: string;
  errorCode: string;
  aPIVersion: string;
  data: SystemMenus[];

}


export class SystemMenus {
  cAM_APP_ID: number;
  CAM_FRM_CL_ID: number;
  cAM_FRM_CODE: string;
  cAM_MOD_CODE: string;
  cAM_SMU_ID: number;
  cAM_SYS_CODE: string;
  cRG_COM_ID: number;
  hELP_PAGE_URL: string;
  iD: number;
  mENU_ORDER: number;
  mENU_TYPE: number;
  nAME: string;
  nAME2: string;
  uRL: string;
  sHOW_IN_MENU: number;
}

export class Authorized {
  data: boolean;
  isError: boolean;
  errorCode: string;
  aPIVersion: string;
  error: string;
}

export class SstPaymentCycles {

  constructor(public Id?: number,
    public Name?: string,
    public Name2?: string,
    public Share?: number,
    public Unit?: number,
    public UnitName?: string,
    public Frequency?: number,
    public NoOfPayments?: number,
    public SstPaymentSystems?: SstPaymentSystems[],
    public CompanyId?: number,
    public IsEditable?: number,
    public Notes?: string,
    public SstPaymentDetails?: SstPaymentDetails[],
    public CreationUser?: string,
    public CreationDate?: Date,
    public ModificationUser?: string,
    public ModificationDate?: Date,
    public IsGeneral?: boolean,
    public IsMedical?: boolean,
    public IsLife?: boolean

  ) { }



}


export class SstPaymentDetails {

  constructor(public Id?: number,
    public Unit?: number,
    public Share?: number,
    public Period?: number,
    public Method?: number,
    public CycleId?: number,
    public CreationUser?: string,
    public CreationDate?: Date,
    public ModificationUser?: string,
    public ModificationDate?: Date,
    public PaymentUnitdropdown?: SelectItem[],
    public PaymentMethoddropdown?: SelectItem[],
    public PaymentcycleName?: string



  ) { }


}

export class SstPaymentSystems {

  constructor(public Id?: number,
    public CycleId?: number,
    public SystemId?: number,
    public CreationUser?: string,
    public CreationDate?: Date,
    public ModificationUser?: string,
    public ModificationDate?: Date,


  ) { }

}

export class SstCodes {
  Id: number;
  MajorCode: number;
  MinorCode: number;
  Name: string;
  Name2: string;
  SystemId: number;
  ModuleCode: string;
  CodeId: number;
  DomainId: number;
  Notes: string;
  CompanyId?: number;
  //SstDomainSystemId: number;
  //SstDomainCompanyId: number;
  CreationUser: string;
  CreationDate: Date;
  ModificationUser: string;
  ModificationDate: Date;
}

export class ClosingPeriods {
  Id: number;
  SystemId: number; 
  ClassId: number; 
  PolicyType: number; 
  ModuleCode: string; 
  BranchId: number; 
  ClosingDate: Date;
  CompanyId: number; 
  CreationUser: string;
  CreationDate: Date;
  ModificationUser: string;
  ModificationDate: Date;
  InsuranceSystem: string;
  InsuranceClass: string;
  PolicyTypeName: string;
}


//to handel(map) returned data from CoreApi and use them in P-dropdownList
export class selectItem {
  label?: string;
  value: any;
}


//export class ClosingPeriodDetails {
//  constructor(
//    public Id?: number,
//    public SystemId?: number,
//    public SystemName?: string,
//    public ClassId?: number,
//    public PolicyType?: number,
//    public ModuleCode?: string,
//    public BranchId?: number,
//    public ClosingDate?: Date,
//    public CompanyId?: number,
//    public CreatedBy?: string,
//    public CreationDate?: Date,
//    public CreationUser?: string,
//    public ModificationUser?: string,
//    public ModificationDate?: Date,
//    public InsuranceSystem?: string,
//    public InsuranceClass?: string,
//    public PolicyTypeName?: string,
//    public ModuleName?: string,
//    public BranchName?: string

//  ) { }
//}

//export class ClosingPeriodEntry {
//  constructor(
//    public Id?: number,
//    public insuranceSystemEntry?: string,
//    public insuranceClassEntry?: string,
//    public policyTypeEntry?: string,
//    public moduleCodeEntry?: string,
//    public branchIdEntry?: string,
//    public closingDateEntry?: Date,
//    public CompanyId?: number,
//    public Documents?: Documents[],
//    public CreationUser?: string,
//    public CreationDate?: Date,
//    public ModificationUser?: string,
//    public ModificationDate?: Date) { }
//}
export class DocumentGroups {

  constructor(public Id?: number,
    public Name?: string,
    public Name2?: string,
    public SystemId?: number,
    public InsuranceSystem?: string,
    public ClassId?: number,
    public InsuranceClass?: string,
    public PolicyType?: number,
    public PolicyTypeName?: number,
    public type?: string,
    public Notes?: string,
    public CompanyId?: number,
    public Documents?: Documents[],
    public CreationUser?: string,
    public CreationDate?: Date,
    public ModificationUser?: string,
    public ModificationDate?: Date,
  ) { }


}


export class Documents {

  constructor(public Id?: number,
    public Name?: string,
    public Name2?: string,
    public GroupId?: number,
    public IsRequired?: number,
    public Notes?: string,
    public CreationUser?: string,
    public CreationDate?: Date,
    public ModificationUser?: string,
    public ModificationDate?: Date,
  ) { }

}


export class SstClasses {

  constructor(public Id?: number,
    public Code?: string,
    public Name?: string,
    public Name2?: string,
    public BusinessType?: number,
    public SystemId?: number,
    public CreationUser?: string,
    public CreationDate?: Date,
    public ModificationUser?: string,
    public ModificationDate?: Date,
  ) { }
}


export class SstPolicyTypes {

  constructor(public Id?: number,
    public Name?: string,
    public Name2?: string,
    public BusinessType?: number,
    public UnearnedBasis?: number,
    public EarnedPercent?: number,
    public EffectiveDate?: Date,
    public ExpiryDate?: Date,
    public TreatyType?: number,
    public LongTerm?: number,
    public RateBasis?: number,
    public RateType?: number,
    public RatePer?: number,
    public AgeDecrease?: number,
    public MinCustomerAge?: number,
    public MaxCustomerAge?: number,
    public MinMemberAge?: number,
    public MaxMemberAge?: number,
    public MinTerm?: number,
    public MaxTerm?: number,
    public BasicCover?: number,
    public TargetGender?: number,
    public TermBasis?: number,
    public ClassId?: number,
    public MaturityAge?: number,
    public CreationUser?: string,
    public CreationDate?: Date,
    public ModificationUser?: string,
    public ModificationDate?: Date,
  ) { }
}

