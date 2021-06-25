import { HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

import { Injectable } from '@angular/core';
import {EmployeeModule} from '../Services/employee-module';



import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


//we put th e Http in the emp-service.service.ts file as the below code
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//we put observable in the service.ts
import { Observable } from 'rxjs/Observable';

import { Location } from '@angular/common';

declare var toastr:any;

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor(private _http:Http) { }

  Employees:EmployeeModule[];
  selectedEmployee:EmployeeModule;

  errorMsg:string;

  weburl:string = 'http://localhost/WebAPI/api/Employee/';
  
  private location:Location;
  Page_Load() {
    location.reload();
  }
  
  GetPersons() 
  {
    this._http.get(this.weburl)
    .map((data : Response) =>{
      return data.json() as EmployeeModule[];
    }).toPromise().then(x => {
      this.Employees = x;
    });
  }
  GetPerson(id:number) 
  {
    this._http.get(this.weburl+id)
    .map((data : Response) =>{
      return data.json() as EmployeeModule;
    }).toPromise().then(x => {
      this.selectedEmployee = x;
    });
  }
  postEmployee(emp : EmployeeModule)
  {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this._http.post(this.weburl,body,requestOptions).map(x => x.json()).toPromise();
  }
  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this._http.put(this.weburl+id,body,requestOptions).map(res => res.json()).toPromise();
  }
  DeletePerson(id) {
    return this._http.delete(this.weburl+id).map(res => res.json()).toPromise();
  }
  errorHandler(error:HttpErrorResponse)
  {
    this.errorMsg = error.message;
  }
}

