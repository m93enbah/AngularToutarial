import { HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Employee } from '../Service/Employee';

//we put th e Http in the emp-service.service.ts file as the below code
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//we put observable in the service.ts
import { Observable } from 'rxjs/Observable';
declare var toastr: any;

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private _http: HttpClient) { }

    Employees: Employee[];
    selectedEmployee: Employee;
    weburl: string = 'http://localhost/WebAPIProject/api/Employee/';
    GetPersons(): Observable<Employee[]> {
        debugger
        const httpOptions =
            {
                headers: new HttpHeaders({
                    'accept': 'application/json'
                })
            };
        return this._http.get<Employee[]>(this.weburl + '/LoadEmployees', httpOptions).catch(this.errorHandler);
    }
    GetPerson(id: number): Observable<Employee> {
        debugger;
        const httpOptions =
            {
                headers: new HttpHeaders({
                    'accept': 'application/json'
                })
            };
        return this._http.get<Employee>(this.weburl + "/LoadEmployee/" + id, httpOptions).catch(this.errorHandler);
    }
    postEmployee(emp: Employee) {
        debugger;
        var body = JSON.stringify(emp);
        const httpOptions =
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'my-auth-token'
                })
            };
        return this._http.post<Employee>(this.weburl, body, httpOptions).catch(this.errorHandler);
    }
    putEmployee(id, emp) {
        debugger;
        var body = JSON.stringify(emp);
        const httpOptions =
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'my-auth-token'
                })
            };
        return this._http.put<Employee>(this.weburl + "/" + id, body, httpOptions).catch(this.errorHandler);
    }
    DeletePerson(id) {
        const httpOptions =
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'my-auth-token'
                })
            };
        return this._http.delete<Employee>(this.weburl + "/" + id, httpOptions).catch(this.errorHandler);
    }
    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "Server Error");
    }
}
