import { HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {EmployeeModule} from '../Services/employee-module';

//we put th e Http in the emp-service.service.ts file as the below code
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//we put observable in the service.ts
import { Observable } from 'rxjs/Observable';
declare var toastr:any;

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor(private _http:HttpClient) { }

  Employees:EmployeeModule[];
  selectedEmployee:EmployeeModule;
  weburl:string = 'http://localhost/WebAPI/api/Employee/';
  GetPersons() : Observable<EmployeeModule[]>
  {
    debugger
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'accept':  'application/json'
      })
    };
    return this._http.get<EmployeeModule[]>(this.weburl,httpOptions).catch(this.errorHandler);
  }
  GetPerson(id:number) : Observable<EmployeeModule>
  {
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'accept':  'application/json'
      })
    };
    return this._http.get<EmployeeModule>(this.weburl+"/"+id,httpOptions).catch(this.errorHandler);
  }
  postEmployee(emp : EmployeeModule)
  {
    debugger;
    var body = JSON.stringify(emp);
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.post<EmployeeModule>(this.weburl,body,httpOptions).catch(this.errorHandler);
  }
  putEmployee(id, emp) {
    debugger;
    var body = JSON.stringify(emp);
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.put<EmployeeModule>(this.weburl+"/"+id,body,httpOptions).catch(this.errorHandler);
  }
  DeletePerson(id) {
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.delete<EmployeeModule>(this.weburl+"/"+id,httpOptions).catch(this.errorHandler);
  }
  errorHandler(error:HttpErrorResponse)
  {
    return Observable.throw(error.message || "Server Error");
  }
}

