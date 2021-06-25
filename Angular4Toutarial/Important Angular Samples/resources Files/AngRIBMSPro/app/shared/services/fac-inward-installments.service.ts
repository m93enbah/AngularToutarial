import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { CommonService } from './common.service';
import { FacInwardInstallments } from 'src/app/models/data-models';
@Injectable({
  providedIn: 'root'
})
export class FacInwardInstallmentsService {

  private apiUrl = environment.apiUrl + "api/FacInwardInstallments/";
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');
  private companyId = 1;

  constructor(private http: HttpClient, private cs: CommonService) { }

  post(model: FacInwardInstallments[]): Observable<FacInwardInstallments[]> {
    let body = JSON.stringify(model);

    return this.http.post<FacInwardInstallments[]>(this.apiUrl + "post", model, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  put(model: FacInwardInstallments[]): Observable<FacInwardInstallments[]> {
    let body = JSON.stringify(model);

    return this.http.post<FacInwardInstallments[]>(this.apiUrl + "put", model, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  getInstallments(facInwardId: number): Observable<FacInwardInstallments[]> {
    return this.http.get<FacInwardInstallments[]>(this.apiUrl + "GetInstallments/" + facInwardId + '/' + this.companyId, { headers: this.httpHeaders, responseType: 'json' });
  }

  deleteData(model: FacInwardInstallments): Observable<FacInwardInstallments> {
    let body = JSON.stringify(model);

    return this.http.delete<FacInwardInstallments>(this.apiUrl + '/Delete/' + model.Id + '/' + this.companyId, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  getData(id: number): Observable<FacInwardInstallments> {

    return this.http.get<FacInwardInstallments>(this.apiUrl + '/Get/' + id + '/' + this.companyId, { headers: this.httpHeaders, responseType: 'json' });
  }

  
}
