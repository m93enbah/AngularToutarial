import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ResponseResult, IResponseResult } from 'src/app/shared/models/models';
import { SstContainers, ContinerSearchCriteria, FormContainer } from '../models/models';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ControlsFactoryService } from './controls-factory.service';


@Injectable({
  providedIn: 'root'
})
export class  ContainerService  implements IResponseResult<SstContainers> {

  private apiUrl = 'api/Containers';
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').set('content-type','application/json; charset=utf-8');
  constructor(private http: HttpClient,private fcs:ControlsFactoryService) { }
  GetById(Id: number): Observable<ResponseResult<SstContainers>> {
    let getUrl = this.apiUrl + '/' + Id;
    let response: any = {};

    // return this.http.get<ResponseResult<SstComponents>>(getUrl, { headers: this.httpHeaders, responseType: 'json' });
    return this.http.get<ResponseResult<SstContainers>>(getUrl,
      { headers: this.httpHeaders, responseType: 'json' });
  }
  Post(entity: SstContainers): Observable<ResponseResult<SstContainers>> {

    let getUrl = this.apiUrl;
    let body = JSON.stringify(entity);

    return this.http.post<ResponseResult<SstContainers>>(this.apiUrl, entity, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      );
  }
  Put(entity: SstContainers): Observable<ResponseResult<SstContainers>> {
    let getUrl = this.apiUrl + '/' + entity.id;
    let body = JSON.stringify(entity);

    return this.http.put<ResponseResult<SstContainers>>(this.apiUrl, entity, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      );
  }
  Delete(Id: number): Observable<ResponseResult<SstContainers>> {

    return this.http.delete<ResponseResult<SstContainers>>(this.apiUrl + '/Delete/' + Id, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      );
  }

  PostBulk(entity: FormContainer [] ): Observable<ResponseResult<SstContainers>> {

    let postUrl = this.apiUrl + '/InsertBulk';;

    let body = this.fcs.BuildComponentContent(entity ) ;

    return this.http.post<ResponseResult<SstContainers>>(postUrl,body, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      );


  }


  GetByCriteria(searchCriteria: ContinerSearchCriteria): Observable<ResponseResult<SstContainers[]>> {
    let getUrl = this.apiUrl + '/GetByCriteria';

    let criteriaParams = new HttpParams();
    Object.keys(searchCriteria).forEach(key => {
      if (searchCriteria[key] != "null" && searchCriteria[key] != undefined)
      criteriaParams =  criteriaParams.append(key, searchCriteria[key].toString());
    });


    return this.http.get<ResponseResult<SstContainers[]>>(getUrl, { headers: this.httpHeaders, params: criteriaParams, responseType: 'json' });

  }

}
