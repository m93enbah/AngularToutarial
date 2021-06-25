import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ResponseResult, IResponseResult } from 'src/app/shared/models/models';
import { SstComponents  } from '../models/models';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService implements IResponseResult<SstComponents> {

  // private apiUrl = '/api/Values/1';
  private apiUrl = 'api/Components';
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*');
  constructor(private http: HttpClient) { }
  GetById(Id: number): Observable<ResponseResult<SstComponents>> {
    let getUrl = this.apiUrl + '/' + Id;
    let response: any = {};

    // return this.http.get<ResponseResult<SstComponents>>(getUrl, { headers: this.httpHeaders, responseType: 'json' });
    return this.http.get<ResponseResult<SstComponents>>(getUrl,
      { headers: this.httpHeaders, responseType: 'json' });
  }
  Post(entity: SstComponents): Observable<ResponseResult<SstComponents>> {

    let getUrl = this.apiUrl;
    let body = JSON.stringify(entity);
    debugger;
    return this.http.post<ResponseResult<SstComponents>>(this.apiUrl, entity, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      );
  }
  Put(entity: SstComponents): Observable<ResponseResult<SstComponents>> {
    let getUrl = this.apiUrl + '/' + entity.id;
    let body = JSON.stringify(entity);

    return this.http.put<ResponseResult<SstComponents>>(this.apiUrl, entity, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      );
  }
  Delete(Id: number): Observable<ResponseResult<SstComponents>> {

    return this.http.delete<ResponseResult<SstComponents>>(this.apiUrl + '/Delete/' + Id, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      );
  }



  GetByCriteria(searchCriteria: ComponentSearchCriteria): Observable<ResponseResult<SstComponents[]>> {
    let getUrl = this.apiUrl + '/GetByCriteria';

    let criteriaParams = new HttpParams();
    Object.keys(searchCriteria).forEach(key => {
      if (searchCriteria[key] != "null" && searchCriteria[key] != undefined)
      criteriaParams =  criteriaParams.append(key, searchCriteria[key].toString());
    });


    return this.http.get<ResponseResult<SstComponents[]>>(getUrl, { headers: this.httpHeaders, params: criteriaParams, responseType: 'json' });

  }


}

export class ComponentSearchCriteria {
  CompanyId: number = 1;
  UserName: string = '';
  IsField: boolean = false;
  Global: boolean = false;
  constructor(CompanyId: number,
    UserName: string,
    IsField: boolean,
    Global: boolean) {
    this.CompanyId = CompanyId;
    this.UserName = UserName;
    this.IsField = IsField;
    this.Global = Global;
  }
}





