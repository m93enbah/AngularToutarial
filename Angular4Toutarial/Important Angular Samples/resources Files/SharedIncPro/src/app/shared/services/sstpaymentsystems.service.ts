import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SstPaymentSystems } from 'src/app/models/data-models';
@Injectable({
  providedIn: 'root'
})
export class SstpaymentsystemsService {

  constructor(private httpClient: HttpClient, private cs: CommonService) { }

  private paymentdetailUrl = environment.apiUrl + "api/SstPaymentSystems";

  GetPaymentSystems(Id: number, CompanyId: number=1): Observable<SstPaymentSystems[]> {
    let httpParams = new HttpParams().set('Id', Id.toString()).set('CompanyId', CompanyId.toString());
    return this.sendRequest<any>("GET", this.paymentdetailUrl + "/Get?" + httpParams);

      }


  private sendRequest<T>(verb: string, url: string, body?: SstPaymentSystems[])
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
