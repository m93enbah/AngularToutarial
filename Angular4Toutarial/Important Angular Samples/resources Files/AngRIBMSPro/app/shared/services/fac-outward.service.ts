import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { FacOutward, FacOutwardAttachments } from 'src/app/models/data-models';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class FacOutwardService {

  private apiUrl = environment.apiUrl ;
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');

  constructor(private http: HttpClient, private cs: CommonService) { }

  post(model: FacOutward, BaseGrossPrem: number, BaseGrossPremForShare: number): Observable<FacOutward> {
    let httpParams = new HttpParams()
      .set('BaseGrossPrem', BaseGrossPrem.toString())
      .set('BaseGrossPremForShare', BaseGrossPremForShare.toString());

    return this.http.post<FacOutward>(this.apiUrl + "api/FacOutward/Post", model, { headers: this.httpHeaders, params: httpParams, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  put(model: FacOutward, BaseGrossPrem: number, BaseGrossPremForShare: number): Observable<FacOutward> {
    let httpParams = new HttpParams()
      .set('BaseGrossPrem', BaseGrossPrem.toString())
      .set('BaseGrossPremForShare', BaseGrossPremForShare.toString());

    return this.http.put<FacOutward>(this.apiUrl + "api/FacOutward/Put", model, { headers: this.httpHeaders, params: httpParams, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  getData(id: number, companyId: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + "api/FacOutward/Get/" + id + "/" + companyId, { headers: this.httpHeaders, responseType: 'json' });
  }

  getByInwardId(inwardId: number, companyId: number): Observable<any[]> {
    return this.http.get<FacOutward[]>(this.apiUrl + "api/FacOutward/GetByInwardId/" + inwardId + "/" + companyId, { headers: this.httpHeaders, responseType: 'json' });
  }

  deleteBulk(facOutwards: FacOutward[], companyId: number): Observable<any> {
    let facOutIDz: number[] = [];
    facOutwards.forEach(facOut => {
      facOutIDz.push(facOut.Id);
    });

    return this.http.post<any>(this.apiUrl + 'api/FacOutward/DeleteBulk/' + companyId, facOutIDz, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }
}
