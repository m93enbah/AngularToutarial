import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SstPaymentDetails, SstPaymentCycles } from 'src/app/models/data-models';

@Injectable({
  providedIn: 'root'
})
export class SstpaymentdetailsService {

  constructor(private httpClient: HttpClient, private cs: CommonService) { }

  private paymentdetailUrl = environment.apiUrl + "api/SstPaymentDetails";

  GetPaymentDetails(Id: number, CompanyId: number = 1): Observable<SstPaymentDetails[]> {
    let httpParams = new HttpParams().set('Id', Id.toString()).set('CompanyId', CompanyId.toString());
    return this.sendRequest<any>("GET", this.paymentdetailUrl + "/Get?" + httpParams);

  }

  SavePaymentDetails(pdObj: SstPaymentDetails[]): Observable<SstPaymentDetails[]> {
  return this.sendRequest<SstPaymentDetails[]>("POST", this.paymentdetailUrl + '/Save', pdObj);


  }

  RemovePaymentDetails(pdObj: SstPaymentDetails): Observable<any> {

    return this.httpClient.request<any>("POST", this.paymentdetailUrl + '/Remove', {
      body: pdObj,
      headers: new HttpHeaders({
        'accept': 'application/json',
        'Cache-Enabled': 'true'
      })

    });
  }


  private sendRequest<T>(verb: string, url: string, body?: SstPaymentDetails[])
    : Observable<T> {
    return this.httpClient.request<T>(verb, url, {
      body: body,
      headers: new HttpHeaders({
        'accept': 'application/json',
        'Cache-Enabled': 'true'
      })
    });
  }

}
