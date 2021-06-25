import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SelectItem, Message, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';
import { Mapper, User } from '../../models/data-models';
import { FinancialAccount } from '../../models/data-models'
import { environment } from '../../../environments/environment';
import { AuthenticationService } from './authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class CommonService {

  msgs: Message[] = [];

  errors: Mapper<string> = new Mapper();

  tab: any;

  private apiUrl = environment.apiUrl + 'api/Helper/';
  private httpHeaders = new HttpHeaders().set('content-type', 'application/json');

  constructor(private messageService: MessageService, private httpClient: HttpClient, public fb: FormBuilder, private http: HttpClient, private auth: AuthenticationService, public confirmationService: ConfirmationService, private spinner: NgxSpinnerService) { }

  isFieldValid(formGroup: FormGroup, field: string) {
    return formGroup.get(field).valid;
  }

  setErrors(formControlName: string, errorText: string) {
    this.errors.add(formControlName, errorText);
  }

  getError(formGroup: FormGroup, field: string) {

    let error = !this.isFieldValid(formGroup, field) ? this.errors.get(field) : "";
    return error;
  }


  public handleErrorObservable(response: Response | any) {
    debugger;
    let errorMessages: Message[] = [];
    let errorSubject = response.error.Message;
    let errorDetails: string = "";
    if (response.error.ModelState) {
      let validationErrorDictionary = response.error.ModelState;


      for (var fieldName in validationErrorDictionary) {
        if (validationErrorDictionary.hasOwnProperty(fieldName)) {
          errorDetails = errorDetails + '<li>' + validationErrorDictionary[fieldName].toString() + '</li>';
        }
      }
      errorMessages.push({ severity: "error", summary: errorSubject, detail: errorDetails });
      return Observable.throw(errorMessages);
    }

    errorMessages.push({ severity: "error", summary: "Error", detail: errorSubject });
    return Observable.throw(errorMessages);

  }


  pushError(errors: Message[]) {
    this.messageService.clear();
    this.messageService.addAll(errors);
  }

  addMessage(type: string, summary: string, messageText: string) {
    this.messageService.clear();
    this.messageService.add({ severity: type, summary: summary, detail: messageText });
  }

  pushMessage(type: string, summary: string, messageText: string) {
    this.msgs = [];
    this.messageService.clear();
    this.messageService.add({ severity: type, summary: summary, detail: messageText });
    this.msgs.push({ severity: type, summary: summary, detail: messageText });
  }

  displayFieldCss(formGroup: FormGroup, field: string) {
    return {
      'has-error': this.isFieldValid(formGroup, field),
      'has-feedback': this.isFieldValid(formGroup, field)
    };
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  resetForm(formGroup: FormGroup) {
    formGroup.reset();
    this.messageService.clear();

    // Object.keys(formGroup.controls).forEach(key => {
    //   formGroup.get(key).setValue("");
    // });
  }


  getBranchList(companyId: number, userName: string): Observable<SelectItem[]> {
     this.httpHeaders.append('Content-Type', 'application/json');

     return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetBranchList/' + companyId + '/' + userName, { headers: this.httpHeaders, responseType: 'json' });
   }

  getInsuranceTypes(): Observable<SelectItem[]> {

     this.httpHeaders.append('Content-Type', 'application/json');
     let domValues: SelectItem[] = [{ label: "Select value..", value: null }];

     let response = this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetInsuranceTypes', { headers: this.httpHeaders, responseType: 'json' })
       .subscribe(
         data => {
           Array.from(data).forEach(item => {
             domValues.push(item);
           });
         }
       );
     return of(domValues);
  }

  GetInsuranceClassesByAppId(insuranceTypeId: number): Observable<SelectItem[]> {

    this.httpHeaders.append('Content-Type', 'application/json');
   // let classes: SelectItem[] = [{ label: "Select value..", value: null }];
    let companyId = 1;
    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetInsuranceClassesByAppId/' + insuranceTypeId + '/' + companyId, { headers: this.httpHeaders, responseType: 'json' });
      //.subscribe(
      //  data => {
      //    Array.from(data).forEach(item => {
      //      classes.push(item);
      //    });
      //  }
      //);

    //return of(classes);
  };

  GetSubLOBByClassId(insuranceClassId: number): Observable<SelectItem[]> {

    this.httpHeaders.append('Content-Type', 'application/json');
    //let SubLOBs: SelectItem[] = [{ label: "Select value..", value: null }];
    let companyId = 1;
    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetSubLOBByClassId/' + insuranceClassId + '/' + companyId, { headers: this.httpHeaders, responseType: 'json' });
    //  .subscribe(
    //    data => {
    //      Array.from(data).forEach(item => {
    //        SubLOBs.push(item);
    //      });
    //    }
    //  );

    //return of(SubLOBs);
  }

  

  getCustomerById(id: number): Observable<SelectItem> {
     this.httpHeaders.append('Content-Type', 'application/json');

     return this.httpClient.get<SelectItem>(this.apiUrl + 'GetCustomerById/' + id, { headers: this.httpHeaders, responseType: 'json' });
   }

  getCustomers(query: string): Observable<SelectItem[]> {
    this.httpHeaders.append('Content-Type', 'application/json');
    let companyId = 1;

    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetCustomersList/' + companyId + '/' + query, { headers: this.httpHeaders, responseType: 'json' });
  }

  getDomainValues(domainId: number, appId: number): Observable<SelectItem[]> {
	  
    let domValues: SelectItem[] = [{ label: "Select value..", value: null }];
    this.httpHeaders.append('Content-Type', 'application/json');
    let response = this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetDomainValues/' + domainId + '/' + appId, { headers: this.httpHeaders, responseType: 'json' })
      .subscribe(
        data => {
          Array.from(data).forEach(item => {
            domValues.push(item);
          });
        });

    return of(domValues);
  }

  getCountries(query: string): Observable<SelectItem[]> {
   // let countries: SelectItem[] = [{ label: "Select value..", value: null }];
    this.httpHeaders.append('Content-Type', 'application/json');
    let httpParams = new HttpParams().set('query', query.toString());
    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetCountriesList', { headers: this.httpHeaders, params: httpParams, responseType: 'json' });
    //  .subscribe(
    //    data => {
    //      Array.from(data).forEach(item => {
    //        countries.push(item);
    //      });
    //    });

    //return of(countries);
  }

  getCities(countryCode: string, query: string): Observable<SelectItem[]> {
    this.httpHeaders.append('Content-Type', 'application/json');
    let httpParams = new HttpParams().set('query', query.toString());

    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetCitiesList' + '/' + countryCode, { headers: this.httpHeaders, params: httpParams, responseType: 'json' });
  }

  GetUserGroups(): Observable<SelectItem[]> {
     this.httpHeaders.append('Content-Type', 'application/json');
     return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetUserGroups', { headers: this.httpHeaders, responseType: 'json' });
   }

  getCurrencies(): Observable<SelectItem[]> {
    this.httpHeaders.append('Content-Type', 'application/json');
    let currencies: SelectItem[] = [{ label: "Select value..", value: null }];
    
    this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetCurrencies', { headers: this.httpHeaders, responseType: 'json' })
      .subscribe(
        data => {
          Array.from(data).forEach(item => {
            currencies.push(item);
          });
        });

    return of(currencies);
  }

  getExchangeRate(currencyCode: string): Observable<number> {
     this.httpHeaders.append('Content-Type', 'application/json');
     return this.httpClient.get<number>(this.apiUrl + 'GetExchangeRate/' + currencyCode, { headers: this.httpHeaders, responseType: 'json' });
   }

  getFiscalYear(date: Date): Observable<number> {
     this.httpHeaders.append('Content-Type', 'application/json');
     return this.httpClient.get<number>(this.apiUrl + 'GetFiscalYear', { headers: this.httpHeaders, responseType: 'json' });
   }

  getFinancialAccount(id: number, roleId: number): Observable<FinancialAccount> {
     this.httpHeaders.append('Content-Type', 'application/json');
     return this.httpClient.get<FinancialAccount>(this.apiUrl + 'GetFinancialAccount/' + id + '/' + roleId, { headers: this.httpHeaders, responseType: 'json' });
   }

  getResource(resourceName: string, resourceObject: string): Observable<string> {
     this.httpHeaders.append('Content-Type', 'application/json');
     return this.httpClient.get<string>(this.apiUrl + 'GetResource/' + resourceName + '/' + resourceObject, { headers: this.httpHeaders, responseType: 'json' });
   }

  getGLAccountsSuggest(query: string): Observable<SelectItem[]> {
     this.httpHeaders.append('Content-Type', 'application/json');
     return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetGLAccountsSuggest/' + query, { headers: this.httpHeaders, responseType: 'json' });
   }

  getAccountById(accountId: number): Observable<SelectItem> {
     this.httpHeaders.append('Content-Type', 'application/json');
     return this.httpClient.get<SelectItem>(this.apiUrl + 'GetAccountById/' + accountId, { headers: this.httpHeaders, responseType: 'json' });
   }

  getLoggedInUser(): User {
    return this.auth.getLoggedInUser();
  }

  showOrHideSpinner(loading: boolean) {
    if (loading) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }

  setActiveTab(tabName) {
    this.tab = tabName;
    return this.tab
  }

  getBlockedControls(Username: string, FormMenuID: number, ApplicationID: number, CompanyID: number): Observable<string[]> {

     // let BlockedControls: string[] = ['applicationType', 'schedulerName'];

     let BlockedControls: string[] = [];

     //return of(BlockedControls);
     return this.httpClient.get<string[]>(environment.apiUrl + "/api/GetBlockedControls/" + Username + "/" + FormMenuID + "/" +
       ApplicationID + "/" + CompanyID, { headers: this.httpHeaders, responseType: 'json' });
   }

  validateSecuirtyControls(Username: string, FormMenuID: number, ApplicationID: number, CompanyID: number, formGroups: FormGroup[]) {
  
  
     this.getBlockedControls(Username, FormMenuID, ApplicationID, CompanyID).subscribe(
       data => {

          data.forEach(ctrlName => {
           formGroups.forEach(formGroup => {
             Object.keys(formGroup.controls).forEach(formControlName => {
               if (ctrlName == formControlName)
                 formGroup.get(formControlName).disable();
             });
           });
         });
         // localStorage.setItem("BlockedControls", JSON.stringify(data));
         // var dtblockedControls = JSON.parse(localStorage.getItem("BlockedControls"));
         // debugger;
         // dtblockedControls.Table.forEach(row => {
         //   formGroups.forEach(formGroup => {
         //     Object.keys(formGroup.controls).forEach(formControlName => {
         //       if (row["CONTROL_ID"] == formControlName)
         //         formGroup.get(formControlName).disable();
         //     });
         //   });
         // });
       });
   }

  convertArrayToString(values: string[]): string {
    if (values.length > 0)
      return values.join();
    else return "";
  };

  DynamicCall(url: string, filter:string = ""): Observable<SelectItem[]> {

    return this.httpClient.get<SelectItem[]>(url + filter, { headers: this.httpHeaders, responseType: 'json' });
  };

  getSuggestCompanies(companyId: number, roleId: number, lang: number, query: string): Observable<any[]> {
    let httpParams = new HttpParams()
      .set('companyId', companyId.toString())
      .set('roleId', roleId.toString())
      .set('lang', lang.toString())
      .set('query', query.toString());
    return this.http.get<any[]>(this.apiUrl + "GetSuggestCompanies", { headers: this.httpHeaders, params: httpParams, responseType: 'json' });
  }

  uploadFiles(formData: FormData): Observable<any[]> {
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');

    return this.httpClient.post<any[]>(this.apiUrl + "UploadFiles", formData, { headers: httpHeaders, responseType: 'json' })
      .catch(this.handleErrorObservable);
  }

  downloadFile(fileName): Observable<any> {
    let httpHeaders = new HttpHeaders().set('Accept', '*/*').set('content-type', 'application/json');
    return this.httpClient.get<any>(this.apiUrl + "DownloadFile/" + fileName, { headers: httpHeaders, responseType: 'blob' as 'json' });
  }
}
