import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { SstCodes } from '../../models/data-models';
import { id } from '@swimlane/ngx-datatable/release/utils';
import { CoreService } from './core.service';




@Injectable({
  providedIn: 'root'
})

export class systemCodesService {

  constructor(private http: HttpClient, private cs: CommonService, private core: CoreService) { }

  private httpHeaders = new HttpHeaders().set('accept', 'application/json');
  private apiUrl = environment.apiUrl + "api/SstCodes";
  private companyId = this.cs.getLoggedInUser().companyId; // ToDo 
  //private MajorId = 2; // ToDo 
  getDataByCritiria(searchCriteria: any): Observable<SstCodes[]> {
    let Queryparams = new HttpParams();
    Queryparams = Queryparams.append("companyId", this.companyId.toString());  //todo
    for (let criteria in searchCriteria) {
      if (searchCriteria.hasOwnProperty(criteria)) {
        Queryparams = Queryparams.append(criteria, searchCriteria[criteria])
      }
    }
    return this.http.get<SstCodes[]>(this.apiUrl + '/GetMajorBy', { params: Queryparams, headers: this.httpHeaders, responseType: 'json' });
  }

  deleteData(model: SstCodes): Observable<SstCodes> {
    let body = JSON.stringify(model);

    return this.http.delete<SstCodes>(this.apiUrl + '/Delete/' + model.Id + '/' + this.companyId, { headers: this.httpHeaders, responseType: 'json' })

  }

  getMajorCode(systemId: number, moduleCode: string, query: string): Observable<SelectItem[]> {
    //debugger;
    let params: HttpParams = new HttpParams();
   
    params.append("systemId", systemId.toString());
    params.append("moduleCode", moduleCode);    
    params.append("companyId", this.companyId.toString());
    params.append("query", query);

    return this.http.get<SelectItem[]>(this.apiUrl + '/GetMajorCodeSuggest', { headers: this.httpHeaders, params: params, responseType: 'json' });
  }

  getMinorCode(majorCode: number, companyId: number, query: string): Observable<SelectItem[]> { 
    let httpParams = new HttpParams()
      .set('query', query)
      .set('majorCode', majorCode.toString())
      .set('companyId', companyId.toString());

    return this.http.get<SelectItem[]>(this.apiUrl + '/GetMinorCodeSuggest', { headers: this.httpHeaders, params: httpParams, responseType: 'json' });
  }

  getParentCode(systemId: number, moduleCode: string, majorcode: number, minorCode: number, query: string) {

    let strsystemId = systemId ? systemId.toString() : '0';
    let strmajorcode = majorcode ? majorcode.toString() : '0';
    let strminorCode = minorCode ? minorCode.toString() : '0';

    let params: HttpParams = new HttpParams()
      .set('systemId', strsystemId)
      .set('moduleCode', moduleCode)
      .set('majorcode', strmajorcode)
      .set('minorCode', strminorCode)  
      .set('companyId', this.companyId.toString())
      .set('query', query);
      
    return this.http.get<SelectItem[]>(this.apiUrl + '/GetParentCodeSuggest', { headers: this.httpHeaders, params: params, responseType: 'json' });
  }


  post(model: SstCodes): Observable<SstCodes> {
   // model.Id = -1;
    debugger;
    return this.http.post<SstCodes>(this.apiUrl + "/Post", model , { headers: this.httpHeaders, responseType: 'json' });
     // .catch(this.cs.handleErrorObservable);
  }

  getMinorCodesByMajorCode(majorCode: number, companyId: number): Observable<SstCodes[]> {

    return this.http.get<SstCodes[]>(this.apiUrl + "/GetByMajorCode/" + majorCode + "/" + companyId, { headers: this.httpHeaders, responseType: 'json' });
  }

  deleteBulk(minor: SstCodes[], companyId: number): Observable<any> {
    let minorRemove: number[] = [];
    minor.forEach(minorCodes => {
      minorRemove.push(minorCodes.Id);
    });

    return this.http.post<any>(this.apiUrl + '/DeleteBulk/' + companyId, minorRemove, { headers: this.httpHeaders, responseType: 'json' });
      //.catch(this.cs.handleErrorObservable);
  }

 

  put(model: SstCodes[]): Observable<SstCodes[]> {
    debugger;
    return this.http.put<SstCodes[]>(this.apiUrl + "/put", model, { headers: this.httpHeaders, responseType: 'json' });
     // .catch(this.cs.handleErrorObservable);
  }

  getData(id: number): Observable<SstCodes> {

    return this.http.get<SstCodes>(this.apiUrl + '/GetRow/' + id + '/' + this.core.getLoggedInUser().companyId, { headers: this.httpHeaders, responseType: 'json' });
  }


  //getMinorCodesByMajorCode(MajorCode: number) {
  //  return null;
  //}
  
  MajorCode(): Observable<SstCodes[]> {
    return null;
  }

  MinorCode(): Observable<SstCodes[]> {
    return null;
  }

  ParentCode(): Observable<SstCodes[]> {
    return null;
  }

}

