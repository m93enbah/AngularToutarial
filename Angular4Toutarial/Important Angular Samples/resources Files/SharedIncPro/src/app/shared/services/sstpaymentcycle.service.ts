import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SstPaymentCycles, Application } from 'src/app/models/data-models';



@Injectable({
  providedIn: 'root'
})
export class SstpaymentcycleService {

  constructor(private httpClient: HttpClient, private cs: CommonService) { }
  
  private paymentcycleUrl = environment.apiUrl + "api/SstPaymentCycles";


  SearchPaymentCycle(CycleName: string, SystemId: number[], CompanyId: number = 1): Observable<SstPaymentCycles[]> {

    let httpParams = new HttpParams().set('CycleName', CycleName).set('SystemId', SystemId.toString()).set('CompanyId', CompanyId.toString());

    return this.sendRequest<SstPaymentCycles[]>("GET", this.paymentcycleUrl + "/Search?" + httpParams);
  }

  GetPaymentCycle(Id: number, CompanyId: number = 1): Observable<SstPaymentCycles> {
    console.log('xx');
    let httpParams = new HttpParams().set('Id', Id.toString()).set('CompanyId', CompanyId.toString());

    return this.sendRequest<SstPaymentCycles>("GET", this.paymentcycleUrl + "/Get?" + httpParams);
  }


  SavePaymentCycle(pcObj: SstPaymentCycles): Observable<any> {
     pcObj.CreationDate = new Date();
    pcObj.SstPaymentDetails = [];


    return this.sendRequest<any>("POST", this.paymentcycleUrl + '/Save', pcObj);


  }


  UpdatePaymentCycle(pcObj: SstPaymentCycles): Observable<any> {
     pcObj.ModificationDate = new Date();
    pcObj.SstPaymentDetails = [];
    return this.sendRequest<any>("POST", this.paymentcycleUrl + '/Edit', pcObj);


  }


  RemovePaymentCycle(pcObj: SstPaymentCycles): Observable<any> {
     pcObj.ModificationDate = new Date();
    pcObj.SstPaymentDetails = [];
    return this.sendRequest<any>("POST", this.paymentcycleUrl + '/Remove', pcObj);


  }

  private sendRequest<T>(verb: string, url: string, body?: SstPaymentCycles)
    : Observable<T> {
    return this.httpClient.request<T>(verb, url, {
      body: body,
      headers: new HttpHeaders({
        'accept': 'application/json',
        'Cache-Enabled': 'true'
      })
    });



    /* 
     "Access-Key": "<secret>",
         "Application-Name": "exampleApp"
    .pipe(catchError((error: Response) =>
     throwError(`Network Error: ${error.statusText} (${error.status})`)));*/
  }


}
