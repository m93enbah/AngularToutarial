import { Injectable } from '@angular/core';

import {EmployeeModule} from '../Services/employee-module';

import { Observable } from 'rxjs/Observable';

import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private _http:Http) { }

  weburl:string = 'http://localhost/WebAPI/api/Employee/';
  Employees:EmployeeModule[];
  selectedEmployee:EmployeeModule;
  errorMsg:string;
  
  GetPersons()
  {
    var headerOptions = new Headers({'accept':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Get,headers : headerOptions});
    return this._http.get(this.weburl,requestOptions).map(res => res.json());
  }

  GetPerson(id:number) 
  {
    var headerOptions = new Headers({'accept':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Get,headers : headerOptions});
    return this._http.get(this.weburl+id,requestOptions).map(res => res.json());
  }

  postEmployee(emp : EmployeeModule)
  {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this._http.post(this.weburl,body,requestOptions).map(x => x.json());
  }

  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this._http.put(this.weburl+id,body,requestOptions).map(res => res.json());
  }

  DeletePerson(id) {
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Delete,headers : headerOptions});
    return this._http.delete(this.weburl+id,requestOptions).map(res => res.json());
  }

}

