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
  GeneralInsurance = 1,
  MedicalInsurance = 2,
  LifeInsurance = 3,
  Greeting = 4,
  Schedular = 306,
  iCore3 = 32,
  ReinsuranceBMS = 9,
}

export enum DomainId {
  Languages = 3144,
  ReinsurerType = 20000,
  TreatyType = 20001,
  TreatyStatementPeriod = 20002,
  TreatyPrinciple = 20003,
  ReleasePeriod = 20004,
  ApplyOn = 20005,
  InstallmentCycle = 20007,
  FacInStatus = 20008,
  InsuranceType = 20006,
  PostingStatus = 20009,
  ProtectionBase = 20010,
  RateType = 20011,
  DepositType = 20012,
  ClaimStatus = 20014,
  TransactionType = 20013,
  CompanyType = 20015,
  AccountStatus = 20016,
  Source = 20017,
  PolicyNature = 20018,
  ClaimControlType = 104091
}

export enum Languages {
  Arabic,
  English
}

export enum TreatyStatementPeriod {
  Annual,
  Monthly,
  Quarterly,
  Semiannual
}

export enum TreatyPrinciple {
  CleanCut,
  UW
}

export enum ReleasePeriod {
  Monthly,
  Yearly
}

export enum TreatyApplyOn {
  Installments,
  Policy
}

export enum InsuranceTreatyType {
  QuotaShare = 1,
  Surplus1 = 2,
  Surplus2 = 3,
  Surplus3 = 4
}

export enum CustomerRole {
  MedicalAgents = 1,
  MedicalCarriers = 2,
  MedicalPolicyHolders = 3,
  GeneralInsured = 4,
  MedicalProviders = 5,
  InsuranceCompany = 6,
  Agents = 7,
  GeneralAgents = 8,
  LossAdjuster = 9,
  Lawyer = 10,
  ReInsurance = 11,
  Supplier = 12,
  GeneralBeneficiary = 13,
  LifeAgents = 14,
  LifePolicyHoldersAndInsureds = 15,
  LifeForeignReinsuranceCompany = 16,
  SalesDealer = 17,
  Consignment = 18,
  TravelPolicyHolder = 19,
  TravelAgent = 20,
  SalvageBuyer = 21,
  RecoveryInsuranceCompany = 22,
  LifeMedicalProviders = 23,
  LifeBeneficiaries = 24,
  LifeThirdParties = 25,
  MedicalPolicyHolderReimbursementClaim = 26,
  GeneralBrokers = 28,
  GeneralSales = 29,
  MedicalBroker = 30,
  MedicalSales = 31,
  MedicalCapitations = 32,
  LifeBanksAndBanksBranches = 33,
  LifeBrokers = 34,
  LifeSalesmen = 35,
  MedicalReinsurance = 36,
  TravelBroker = 37,
  TravelSalesMan = 38,
  TravelTPA = 39,
  TravelReinsurer = 40,
  TravelInsuredMember = 41,
  MedicalInsuredMember = 42,
  MedicalInsuranceCompany = 43,
  TravelInsuranceCompany = 44,
  MedicalCollector = 45,
  GeneralCollector = 46,
  LifeLocalReinsuranceCompany = 47,
  Hospital = 49,
  Doctor = 50,
  Ambulance = 51,
  TowingCompany = 52,
  Court = 53
}

export enum MenuType {
  Application = 1,
  Module = 2,
  SubModule = 3,
  Pages = 4
}

export enum InstallmentCycle {
  InAdvance = 1,
  Quarterly = 2,
  Monthly = 3,
  Annual = 4,
  Semiannual = 5
}

export enum FacultativeInStatus {
  NotBound = 1,
  Bound = 2,
  NotTakenUp = 3
}

export enum CompanyType {
  InsuranceCompany = 6,
  Broker = 28,
  ReinsuranceCompany = 11
}

export enum ProtectionBase {
  Priority = 1,
  WorkingXOL = 2,
  Catastrophe = 3,
  FacXL = 4
}

export enum PaymentCycle {
  Monthly = 1,
  Quarterly = 2,
  Semiannual = 3,
  Annual = 4
}

export enum RateType {
  ManualAdjustment = 1,
  Fixed = 2,
  BurningCost = 3,
}

export enum DepositType {
  MinDeposit = 1,
  MinOfDeposit = 2,
}

export enum ReinsurerType {
  leader = 1,
  follower = 2,
  coinsurer = 3,
}

export enum ClaimStatus {
  Open = 1,
  Closed = 2
}

export enum TransactionType {
  Outstanding = 1,
  Payment = 2,
  Recovery = 3,
  Revised = 4
}

export enum ClaimControlType {
  FullControl = 1,
  CoControl = 2,
  NoControl = 3
}

export class loginInfo 
{
  userName: string;
  password: string;
  companyId: number;
  branchId: number;
  languageId:number;
}


export class User {
  companyId: number;
  userName: string;
  branchId: number;
  language: number;
  token: string;
}

export class MenuItem
{
  Id:Number;
  Name: string;
  AlternativeName: string;
  Url: string;
  Icon: string;
  Application : Application  ;
  Pages : MenuItem[] ;
}

export class FacInward {
  Id: number;
  KrnFacInwardId: number;
  KrnFacInwardType: number;
  CamAppId: number; 
  AccManagerId: number;
  AccountStatus: number;
  ReceivedDate: Date;
  RiskEffectiveDate: Date;
  RiskExpiryDate: Date;
  LongTermAgrm: number; 
  OrderPer: number;
  UmrReference: string; 
  OurReference: string;
  Source: number;
  PolicyNature: number;
  FcsCstId: number;
  CedantFcsCstId: number;
  RetrocedantFcsCstId: number;
  Region: string;
  Country: string;
  BranchId: number;
  Class: number;
  SubClass: number;
  MarketLeaderCstId: number; 
  SignedLine: number;
  BoundDate: Date;
  OrigCrgCurCode: string; 
  BaseCrgCurCode: string;
  Exrate: number;
  OrigSumInsured: number;
  BaseSumInsured: number;
  OrigPmlLimit: number;
  BasePmlLimit: number;
  OrigGrossPrem: number;
  BaseGrossPrem: number;
  OrigSumInsForShare: number;
  BaseSumInsForShare: number;
  OrigGrossPremForShare: number;
  BaseGrossPremForShare: number;
  OrigPmlLimitForShare: number;
  BasePmlLimitForShare: number;
  OrigDeductibleAmnt: number;
  BaseDeductibleAmnt: number;
  OrigExcessAmnt: number;
  BaseExcessAmnt: number;
  RiskDescription: string; 
  AttachmentPath: string;
  OrigNetPremium: number;
  BaseNetPremium: number;
  DiscountGpPer: number; 
  DiscountNpPer: number;   
  PremiumFrequency: number;
  IsPosted: number;
  CreatedBy: string;
  CreationDate: Date;
  ModifiedBy: string;
  ModificationDate: Date;
  FacInwardPlt: FacInwardPlt[];
  KrnFacInwardAttachments: FacInwardAttachments[];
}

export class FacInwardInstallments {
  Id: number;
  KrnFacInwardId: number;
  DueDate: Date;
  SigningDownSharePer: number;
  CrgCurCode: string;
  Exrate: number;
  FacPremiumAmt: number;
  FacPremiumForShare: number;
  CommPer: number;
  CommAmt: number;
  DeductibleAmnt: number;
  ExcessAmnt: number;
  FcsCstId: number;
  CreatedBy: string;
  CreationDate: Date;
  ModifiedBy: string;
  ModificationDate: Date;
}

export class FacInwardAttachments {
  Id: number;
  KrnFacInwardId: number;
  Serial: number;
  AttachmentPath: string;
  CreatedBy: string;
  CreationDate: Date;
  ModifiedBy: string;
  ModificationDate: Date;
}

export class FacInwardPlt {
  KrnFacInwardId: number;
  SstPltId: number;
}

export class FacOutward {
  Id: number;
  KrnFacInwardId: number;
  FcsCstId: number;
  SigningDownShare: number;
  FacPremiumAmt: number;
  FacPremiumForShare: number;
  DeductibleAmnt: number;
  ExcessAmnt: number;
  FacCompAcc: number;
  InstallmentCycle: number;
  TaxPer: number;
  CommPer: number;
  CommAmt: number;
  AttachmentPath: string;
  Notes: string;
  Status: number;
  IsPosted: number;
  CreatedBy: string;
  CreationDate: Date;
  ModifiedBy: string;
  ModificationDate: Date;
  KrnFacOutwardAttachments: FacOutwardAttachments[];
}

export class FacOutwardInstallments {
  Id: number;
  KrnFacOutwardId: number;
  DueDate: Date;
  SigningDownSharePer: number;
  CrgCurCode: string;
  Exrate: number;
  FacPremiumAmt: number;
  FacPremiumForShare: number;
  CommPer: number;
  CommAmt: number;
  DeductibleAmnt: number;
  ExcessAmnt: number;
  FcsCstId: number;
  CreatedBy: string;
  CreationDate: Date;
  ModifiedBy: string;
  ModificationDate: Date;
}

   export class FacClaims {
     Id: number;
     KrnFacInwardId: number;
     CamAppId: number;
     UmrReference: string;
     ClaimControl: number;
     ClaimSourceRef: string;
     ClaimOurRef: string;
     DateLoss: Date;
     CrgCurCodeClaim: string;
     CrgCurCodeSett: string;
     Exrate: number;
     ClaimAmount: number;
     DateFirstAdvice: Date;
     ClaimReserveAmount: number;
     DateFirstReserve: Date;
     ClaimDescription: string;
     LossLocation: number;
     LossAdjuster: string;
     DateClosed: Date;
     Comments: string;
     AttachmentPath: string;
     CreatedBy: string;
     CreationDate: Date;
     ModifiedBy: string;
     ModificationDate: Date;
     ClaimHandler: number;
     IsRecovery: number;
     KrnFacInward: FacInward;
     KrnFacClaimDetails: FacClaimDetails[];
     KrnFacClaimAttachments: FacClaimAttachments[];
}


export class FacClaimDetails
{
  Id: number;
  KrnClmId: number;
  KrnFacOutwardId: number;
  FcsCstId: number;
  DateFirstAdvice: Date;
  SigningDownShare: number;
  ClaimAmount: number;
  ClaimReserveAmount: number;
  PaidProportionAmount: number;
  OutstandingAmount: number;
  LastPaymentDate: Date;
  Comments: string;
  AttachmentPath: string;
  CreatedBy: string;
  CreationDate: Date;
  ModifiedBy: string;
  ModificationDate: Date;
  CrgCurCode: string;
  Exrate: number;
  KrnClm: FacClaims;
  KrnFacOutward: FacOutward;
}


export class Currency {
  ExrateValue: number;
  CurrencyCode: string;

  constructor(value = 0, code = "") {
    this.CurrencyCode = code;
    this.ExrateValue = value;
  }
}

export class FacOutwardAttachments {
  Id: number;
  KrnFacOutwardId: number;
  Serial: number;
  AttachmentPath: string;
  Notes: string;
}

export class FacClaimAttachments{
  Id: number;
  KrnFacClaimId: number;
  Serial: number;
  AttachmentPath: string;
  Notes: string;
}

export enum NumberTypes {
  Number = 1,
  Decimal = 2,
  Percentage = 3,
  Integer = 4,
}
