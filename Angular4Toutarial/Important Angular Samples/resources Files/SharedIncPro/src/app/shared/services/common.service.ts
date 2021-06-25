import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SelectItem, Message, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';
import { Mapper, User, Application } from '../../models/data-models';
import { FinancialAccount } from '../../models/data-models'
import { environment } from '../../../environments/environment';
import { AuthenticationService } from './authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class CommonService {


  msgs: Message[] = [];

  errors: Mapper<string> = new Mapper();

  tab: any;

  private apiUrl = environment.apiUrl + 'api/Helper/';
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
  getInsuranceSystem(): Observable<SelectItem[]> {

    //let systems: SelectItem[] = [{ label: "Select value..", value: null }];
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');

    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetInsuranceSystems', { headers: httpHeaders, responseType: 'json' });
    //  .subscribe(
    //    data => {
    //      Array.from(data).forEach(item => {
    //        systems.push(item);
    //      });
    //  });

    //return of(systems);
  }

  getAllInsuranceClasses(companyId: number): Observable<SelectItem[]> {
    let InsuranceClasses: SelectItem[] = [{ label: "Select value..", value: null }];
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');
    let query = '';

    let response = this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetAllInsuranceClasses/' + query + '/' + companyId, { headers: httpHeaders, responseType: 'json' })
      .subscribe(
        data => {
          Array.from(data).forEach(item => {
            InsuranceClasses.push(item);
          });
        });

    return of(InsuranceClasses);
  }

  getInsuranceClasses(systemId: number, companyId: number): Observable<SelectItem[]> { 
    //let InsuranceClasses: SelectItem[] = [{ label: "Select value..", value: null }];
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');
    
    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetInsuranceClassesBySysId/' + systemId + '/' + companyId, { headers: httpHeaders, responseType: 'json' });
      //.subscribe(
      //  data => {
      //    Array.from(data).forEach(item => {
      //      InsuranceClasses.push(item);
      //    });
      //});

    //return of(InsuranceClasses);
  }

  getInsuranceClassesSuggest(query: string, systemId: number, companyId: number): Observable<SelectItem[]> {
    let InsuranceClasses: SelectItem[] = [{ label: "Select value..", value: null }];
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');
    let httpParams = new HttpParams()
      .set('query', query)
      .set('systemId', systemId.toString())
      .set('companyId', companyId.toString());
    let response = this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetInsuranceClassesSuggest', { headers: httpHeaders, params: httpParams, responseType: 'json' })
      .subscribe(
        data => {
          Array.from(data).forEach(item => {
            InsuranceClasses.push(item);
          });
        });

    return of(InsuranceClasses);
  }

  getSubLineofBusiness(classId: number, companyId: number): Observable<SelectItem[]> {
    //let policyTypes: SelectItem[] = [{ label: "Select value..", value: null }];
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');

    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetSubLOBByClassId/' + classId + '/' + companyId, { headers: httpHeaders, responseType: 'json' });
    //  .subscribe(
    //    data => {
    //      Array.from(data).forEach(item => {
    //        policyTypes.push(item);
    //      });
    //    });

    //return of(policyTypes);
  }

  GetSubLOBSuggest(query: string, classId: number, companyId: number): Observable<SelectItem[]> {    
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');
    let httpParams = new HttpParams()
      .set('query', query)
      .set('classId', classId.toString())
      .set('companyId', companyId.toString());

    let policyTypes: SelectItem[] = [{ label: "Select value..", value: null }];

    let response = this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetSubLOBSuggest', { headers: httpHeaders, params: httpParams, responseType: 'json' })
      .subscribe(
        data => {
          Array.from(data).forEach(item => {
            policyTypes.push(item);
          });
        });

    return of(policyTypes);
  }

  getModules(systemId: number, companyId: number): Observable<SelectItem[]> {
    //let modules: SelectItem[] = [{ label: "Select value..", value: null }];
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');

    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetModulesBySysId/' + systemId + '/' + companyId, { headers: httpHeaders, responseType: 'json' });
    //  .subscribe(
    //    data => {
    //      Array.from(data).forEach(item => {
    //        modules.push(item);
    //      });
    //    });

    //return of(modules);
  }

  getModule(id: number, companyId: number): Observable<any> {
    
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');

    return this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetModuleById/' + id + '/' + companyId, { headers: httpHeaders, responseType: 'json' });
  }

  getDomainValues(domainId: number, systemId: number, companyId: number): Observable<SelectItem[]> {

    let domValues: SelectItem[] = [{ label: "Select value..", value: null }];
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');

    let response = this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetDomainValues/' + domainId + '/' + systemId + '/' + companyId, { headers: httpHeaders, responseType: 'json' })
      .subscribe(
        data => {
          Array.from(data).forEach(item => {
            domValues.push(item);
          });
        });
  
    return of(domValues);
  }
  
  GetDomainSuggest(query: string, systemId: number,moduleCode:string , companyId: number): Observable<SelectItem[]> {
    debugger;
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Cache-Enabled', 'true');
    let httpParams = new HttpParams() 
      .set('query', query)
      .set('systemId', systemId.toString())
      .set('moduleCode', moduleCode)
      .set('companyId', companyId.toString());

    let domainSuggest: SelectItem[] = [{ label: "Select value..", value: null }];

    let response = this.httpClient.get<SelectItem[]>(this.apiUrl + 'GetDomainSuggest', { headers: httpHeaders, params: httpParams, responseType: 'json' })
      .subscribe(
        data => {
          Array.from(data).forEach(item => {
            domainSuggest.push(item);
          });
        });

    return of(domainSuggest);
  }


  // getResource(resourceName: string, resourceObject: string): Observable<string> {
  //   let header = new Headers();
  //   header.append('Content-Type', 'application/json');
  //   let options = new RequestOptions();
  //   options.headers = header;

  //   return this.http.get(this.coreApiUrl + 'GetResource/' + resourceName + '/' + resourceObject, options)
  //     .map(res => { return res.json() });
  // }

  // getGLAccountsSuggest(query: string): Observable<SelectItem[]> {
  //   let header = new Headers();
  //   header.append('Content-Type', 'application/json');
  //   let options = new RequestOptions();
  //   options.headers = header;

  //   return this.http.get(this.apiUrl + 'GetGLAccountsSuggest/' + query, options)
  //     .map(res => { return res.json() });
  // }

  // getAccountById(accountId: number): Observable<SelectItem> {
  //   let header = new Headers();
  //   header.append('Content-Type', 'application/json');
  //   let options = new RequestOptions();
  //   options.headers = header;

  //   return this.http.get(this.apiUrl + 'GetAccountById/' + accountId, options)
  //     .map(res => { return res.json() });
  // }

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


  InsuranceSystem(): Observable<SelectItem[]> {
    return null;
  }

  Module(): Observable<SelectItem[]> {
    return null;
  }

  DomainList(): Observable<any[]> {
    return null;
  }


  // getBlockedControls(Username: string, FormMenuID: number, ApplicationID: number, CompanyID: number): Observable<string[]> {
  //   let header = new Headers();
  //   header.append('Content-Type', 'application/json');
  //   let options = new RequestOptions();
  //   options.headers = header;


  //   // let BlockedControls: string[] = ['applicationType', 'schedulerName'];

  //   let BlockedControls: string[] = [];

  //   return Observable.of(BlockedControls);
  //   // return this.http.get(environment.apiUrl + "/api/GetBlockedControls/" + Username + "/" + FormMenuID + "/" +
  //   //   ApplicationID + "/" + CompanyID, options).map(res => { return res.json() });
  // }

  // validateSecuirtyControls(Username: string, FormMenuID: number, ApplicationID: number, CompanyID: number, formGroups: FormGroup[]) {


  //   this.getBlockedControls(Username, FormMenuID, ApplicationID, CompanyID).subscribe(
  //     data => {

  //        data.forEach(ctrlName => {
  //         formGroups.forEach(formGroup => {
  //           Object.keys(formGroup.controls).forEach(formControlName => {
  //             if (ctrlName == formControlName)
  //               formGroup.get(formControlName).disable();
  //           });
  //         });
  //       });
  //       // localStorage.setItem("BlockedControls", JSON.stringify(data));
  //       // var dtblockedControls = JSON.parse(localStorage.getItem("BlockedControls"));
  //       // debugger;
  //       // dtblockedControls.Table.forEach(row => {
  //       //   formGroups.forEach(formGroup => {
  //       //     Object.keys(formGroup.controls).forEach(formControlName => {
  //       //       if (row["CONTROL_ID"] == formControlName)
  //       //         formGroup.get(formControlName).disable();
  //       //     });
  //       //   });
  //       // });
  //     });
  // }

}
