import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { FacInward } from 'src/app/models/data-models';

@Injectable({
  providedIn: 'root'
})
export class FacultativeProcessingService {

  constructor(private http: HttpClient, private cs: CommonService) { }

  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');
  private apiUrl = environment.apiUrl + "api/KrnFacInward";
  private companyId = 1;

  getData(id: number): Observable<FacInward> {

    return this.http.get<FacInward>(this.apiUrl + '/Get/' + id + '/' + this.companyId, { headers: this.httpHeaders, responseType: 'json' });
  }
  
  PostData(model: FacInward): Observable<FacInward> {
    let body = JSON.stringify(model);

    return this.http.post<FacInward>(this.apiUrl + '/Post', model, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  putData(model: FacInward): Observable<FacInward> {
    let body = JSON.stringify(model);

    return this.http.put<FacInward>(this.apiUrl + '/Put', model, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  deleteData(model: FacInward): Observable<FacInward> {
    let body = JSON.stringify(model);

    return this.http.delete<FacInward>(this.apiUrl + '/Delete/' + model.Id + '/' + this.companyId, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  getDataByCritiria(searchCriteria: any): Observable<any[]> {
    let Queryparams = new HttpParams();
    Queryparams = Queryparams.append("companyId", "1"); 
    for (let criteria in searchCriteria) {
      if (searchCriteria.hasOwnProperty(criteria)) {
        Queryparams = Queryparams.append(criteria, searchCriteria[criteria])
      }
    }
    return this.http.get<any[]>(this.apiUrl + '/GetBy', { params: Queryparams, headers: this.httpHeaders, responseType: 'json' })
  }

  getFacInwards(query: string): Observable<SelectItem[]> {
    let params: HttpParams = new HttpParams().append("query", query);
    params.append("companyId", this.companyId.toString());

    return this.http.get<SelectItem[]>(this.apiUrl + '/GetFacInwardsSuggest', { headers: this.httpHeaders, params: params, responseType: 'json' });
  }

}
