import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FacClaimAttachments } from 'src/app/models/data-models';

@Injectable({
  providedIn: 'root'
})
export class FacClaimAttachmentsService {

  private apiUrl = environment.apiUrl;
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');

  constructor(private http: HttpClient, private cs: CommonService) { }

  get(facClaimId: number): Observable<FacClaimAttachments[]> {
    return this.http.get<FacClaimAttachments[]>(this.apiUrl + "api/FacClaims/GetAttachments/" + facClaimId, { headers: this.httpHeaders, responseType: 'json' });
  }

  deleteBulkAttachments(facClaimsAttachments: FacClaimAttachments[]): Observable<any> {
    return this.http.post<any>(this.apiUrl + "api/FacClaims/DeleteBulkAttachments", facClaimsAttachments, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }
}
