import { Injectable } from '@angular/core';
import { FacOutwardInstallments } from 'src/app/models/data-models';
import { CommonService } from './common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacOutwardInstallmentsService {

  private apiUrl = environment.apiUrl + "api/FacOutwardInstallments/";
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');

  constructor(private http: HttpClient, private cs: CommonService) { }

  post(model: FacOutwardInstallments[]): Observable<FacOutwardInstallments[]> {
    return this.http.post<FacOutwardInstallments[]>(this.apiUrl + "post", model, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  put(model: FacOutwardInstallments[]): Observable<FacOutwardInstallments[]> {
    return this.http.post<FacOutwardInstallments[]>(this.apiUrl + "put", model, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  getInstallments(facOutwardId: number): Observable<FacOutwardInstallments[]> {
    let companyId = 1;
    return this.http.get<FacOutwardInstallments[]>(this.apiUrl + "GetInstallments/" + facOutwardId + '/' + companyId, { headers: this.httpHeaders, responseType: 'json' });
  }
}
