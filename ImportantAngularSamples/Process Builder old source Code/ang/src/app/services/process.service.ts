import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



import {Process} from '../components/models/process';
@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  weburl = 'http://localhost/ProcessBuilderAPI/api/';
  proc:Process[];
  selectedStep:Process;

  constructor(private _http:HttpClient) {}



  LoadAllProcess() : Observable<Process[]>
  {
    debugger
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'accept':  'application/json'
      })
    };
    let localurl = this.weburl+'Process/LoadAll';
    return this._http.get<Process[]>(localurl,httpOptions).catch(this.errorHandler);
  }


  LoadProcessByID(id:number) : Observable<Process>
  {
    debugger;
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'accept':  'application/json'
      })
    };
    let localurl = this.weburl+'Process/Load';
    return this._http.get<Process>(localurl+"/"+id,httpOptions).catch(this.errorHandler);
  }

  LoadProcessWithDetails(id:number) : Observable<Process>
  {
    debugger;
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'accept':  'application/json'
      })
    };
    let localurl = this.weburl+'Process/LoadProcessWithDetails';
    return this._http.get<Process>(localurl+"/"+id,httpOptions).catch(this.errorHandler);
  }

  postProcess(proc : Process)
  {
    debugger;
    var body = JSON.stringify(proc);
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    let localurl = this.weburl+'Process/Add';
    return this._http.post<Process>(localurl,body,httpOptions).catch(this.errorHandler);
  }

  putProcess(proc) {
    debugger;
    var body = JSON.stringify(proc);
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    let localurl = this.weburl+'Process/Update';
    return this._http.put<Process>(localurl,body,httpOptions).catch(this.errorHandler);
  }

  putProcessWidthDetails(proc) {
    debugger;
    debugger;
    var body = JSON.stringify(proc);
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    let localurl = this.weburl+'Process/UpdateProcessSteps';
    return this._http.put<Process>(localurl,body,httpOptions).catch(this.errorHandler);
  }

  DeleteProcess(id) {
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    let localurl = this.weburl+'Process/Delete/'+id;
    return this._http.delete<Process>(localurl,httpOptions).catch(this.errorHandler);
  }

  errorHandler(error:HttpErrorResponse)
  {
    return Observable.throw(error.message || "Server Error");
  }
  
}



