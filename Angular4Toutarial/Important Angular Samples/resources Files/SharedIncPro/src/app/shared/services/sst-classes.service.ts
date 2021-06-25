import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { SstClasses } from 'src/app/models/data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SstClassesService {

  private apiUrl = environment.apiUrl + "api/SstClasses/";
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');

  constructor(private httpClient: HttpClient, private cs: CommonService) { }



  SearchClasses(SystemId: number, companyId: number): Observable<SstClasses[]> {
    let httpParams = new HttpParams().set('SystemId', SystemId.toString())
      .set('companyId', companyId.toString());
    return this.httpClient.get<SstClasses[]>(this.apiUrl + "Search", { headers: this.httpHeaders, params: httpParams, responseType: 'json' })
  }


  getData(ClassId: number, companyId: number): Observable<SstClasses> {
    let httpParams = new HttpParams().set('ClassId', ClassId.toString())
      .set('companyId', companyId.toString());
    return this.httpClient.get<SstClasses>(this.apiUrl + "Get", { headers: this.httpHeaders, params: httpParams, responseType: 'json' });
  }

  SaveClass(clsObj: SstClasses): Observable<SstClasses> {
    return this.httpClient.post<SstClasses>(this.apiUrl + "Save", clsObj, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  UpdateClass(clsObj: SstClasses): Observable<SstClasses> {
    return this.httpClient.post<SstClasses>(this.apiUrl + "Edit", clsObj, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  RemoveClass(companyId: number, clsObjs: SstClasses[]): Observable<any> {

    let IDz: number[] = [];
    clsObjs.forEach(classObj => {
      IDz.push(classObj.Id);
    });

    return this.httpClient.post<any>(this.apiUrl + "Remove" + companyId, IDz, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }
}
