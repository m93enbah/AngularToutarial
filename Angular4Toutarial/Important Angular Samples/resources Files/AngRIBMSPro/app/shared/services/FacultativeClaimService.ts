import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { FacClaims, FacClaimDetails } from 'src/app/models/data-models';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class FacultativeClaimService {

  constructor(private httpClient: HttpClient, private cs: CommonService) { }

  private claimUrl = environment.apiUrl + "api/FacClaims";

  private claimDetailUrl = environment.apiUrl + "api/FacClaimDetails";

  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');

  SearchClaims(clmObj: FacClaims): Observable<any[]> {
    let Queryparams = new HttpParams();
    for (let clm in clmObj) {
      if (clmObj.hasOwnProperty(clm)) {
        Queryparams = Queryparams.append(clm, clmObj[clm])
      }
    }
    return this.httpClient.get<any[]>(this.claimUrl + "/Search", { params: Queryparams, headers: this.httpHeaders, responseType: 'json' });
  }

  FillClaimsInward(query: string): Observable<SelectItem[]> {
    return this.httpClient.get<SelectItem[]>(this.claimUrl + '/GetClaimInward/' + query, { headers: this.httpHeaders, responseType: 'json' });
  }

  FillClaimsOutward(query: string): Observable<SelectItem[]> {
    return this.httpClient.get<SelectItem[]>(this.claimUrl + '/GetClaimOutward/' + query, { headers: this.httpHeaders, responseType: 'json' });
  }

  GetClaims(): Observable<FacClaims[]> {
    return this.httpClient.get<FacClaims[]>(this.claimUrl + '/GetAll/' + 1, { headers: this.httpHeaders, responseType: 'json' });
  }

  GetClaim(id: Number): Observable<FacClaims>
  {
    return this.httpClient.get<FacClaims>(this.claimUrl + '/Get/' + id + "/" + 1,{ headers: this.httpHeaders, responseType: 'json' });
  }

  PostClaim(claim: FacClaims): Observable<FacClaims> {
    let body = JSON.stringify(claim);

    return this.httpClient.post<FacClaims>(this.claimUrl + '/Post', claim, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }


  PutClaim(claim: FacClaims): Observable<FacClaims> {
    let body = JSON.stringify(claim);

    return this.httpClient.put<FacClaims>(this.claimUrl + '/Put', claim, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);

  }

  DeleteClaim(clmObj: FacClaims): Observable<any> {

    let body = JSON.stringify(clmObj);
    return this.httpClient.delete<any>(this.claimUrl + '/Delete/'+clmObj.Id, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

 
  /********************Claim Detail CRUD************************/

  GetClaimDetails(): Observable<FacClaimDetails[]> {
    return this.httpClient.get<FacClaimDetails[]>(this.claimDetailUrl + '/GetAll/' + 1, { headers: this.httpHeaders, responseType: 'json' });
  }

  GetClaimDetailByID(id: Number): Observable<FacClaimDetails> {
    return this.httpClient.get<FacClaimDetails>(this.claimDetailUrl + '/Get/' + id + "/" + 1, { headers: this.httpHeaders, responseType: 'json' });
  }

  GetClaimDetailsByClaimID(id: Number): Observable<FacClaimDetails[]> {
    return this.httpClient.get<FacClaimDetails[]>(this.claimDetailUrl + '/GetClaimDetails/' + id + "/" + 1, { headers: this.httpHeaders, responseType: 'json' });
  }

  PostClaimDetail(claimDetail: FacClaimDetails): Observable<FacClaimDetails> {
    let body = JSON.stringify(claimDetail);

    return this.httpClient.post<FacClaimDetails>(this.claimDetailUrl + '/Post', claimDetail, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  PutClaimDetail(claimDetail: FacClaimDetails): Observable<FacClaimDetails> {
    return this.httpClient.put<FacClaimDetails>(this.claimDetailUrl + '/Put', claimDetail, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  DeleteClaimDetails(claimDetail: FacClaimDetails): Observable<FacClaimDetails> {

    let body = JSON.stringify(claimDetail);
    return this.httpClient.delete<any>(this.claimDetailUrl + '/Delete/' + claimDetail.Id, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }
}
