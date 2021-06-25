import { Observable } from 'rxjs';

export enum Status {
  Failed = 0,
  Success = 1
}


export class ResponseResult<T> {
  data: T;
  errors: string[];
  status: Status;

}

export interface IResponseResult<T> {
  GetById(Id: number): Observable<ResponseResult<T>>;
  Post(entity: T): Observable<ResponseResult<T>>;
  Put(entity: T): Observable<ResponseResult<T>>;
  Delete(Id: number): Observable<ResponseResult<T>>;
 }


export enum Application {
  GeneralInsurance = 1,
  MedicalInsurance = 2,
  LifeInsurance = 3,
  Greeting = 4,
  Schedular = 306,
  iCore3 = 32,
  SharedSetup = 5,
}

export enum DomainId {
  Languages = 3144

}

export class loginInfo {
  userName: string;
  password: string;
  companyId: number;
  branchId: number;
  languageId: number;
}

export class UserDetail {
  name: string;
  username: string;
  email: string;
  country: string;
  city: string;
  address: string;
  department: string;
  occupation: string;
  img: string;
  dateOfBirh: Date;
  phoneNumber: string;
  mobileNumber: string;
  POBox: number;
  ZIPCode: number;
  lastAccess: Date;
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

export class MajorCode {
  iD: number;
  nAME: string;
  nAME2: string;

}

export class MinorCode {
  iD: Number;
  nAME: string;
  nAME2: string;
}






