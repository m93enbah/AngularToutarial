import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FacOutwardAttachments } from 'src/app/models/data-models';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class FacOutwardAttachmentsService {

  private apiUrl = environment.apiUrl;
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');

  constructor(private http: HttpClient, private cs: CommonService) { }
  
  get(facOutwardId: number): Observable<FacOutwardAttachments[]> {
    return this.http.get<FacOutwardAttachments[]>(this.apiUrl + "api/FacOutward/GetAttachments/" + facOutwardId, { headers: this.httpHeaders, responseType: 'json' });
  }

  deleteBulkAttachments(facOutwardsAttachments: FacOutwardAttachments[]): Observable<any> {
    return this.http.post<any>(this.apiUrl + "api/FacOutward/DeleteBulkAttachments", facOutwardsAttachments, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }
}
