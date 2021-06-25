import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { FacInwardAttachments } from 'src/app/models/data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacInwardAttachmentsService {

  private apiUrl = environment.apiUrl;
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');

  constructor(private http: HttpClient, private cs: CommonService) { }

  get(facInwardId: number): Observable<FacInwardAttachments[]> {
    return this.http.get<FacInwardAttachments[]>(this.apiUrl + "api/KrnFacInward/GetAttachments/" + facInwardId, { headers: this.httpHeaders, responseType: 'json' });
  }

  deleteBulkAttachments(facInwardsAttachments: FacInwardAttachments[]): Observable<any> {
    return this.http.post<any>(this.apiUrl + "api/KrnFacInward/DeleteBulkAttachments", facInwardsAttachments, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }
}
