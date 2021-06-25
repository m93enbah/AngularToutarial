import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { SstPolicyTypes } from 'src/app/models/data-models';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class SstpolicytypesService {

  private apiUrl = environment.apiUrl + "api/SstPolicyTypes/";
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json');

  constructor(private httpClient: HttpClient, private cs: CommonService) { }

  getData(policyTypeId: number, companyId: number): Observable<SstPolicyTypes> {
    let httpParams = new HttpParams()
      .set('policyTypeId', policyTypeId.toString())
      .set('companyId', companyId.toString());
    return this.httpClient.get<SstPolicyTypes>(this.apiUrl + "Get", { headers: this.httpHeaders, params: httpParams, responseType: 'json' });
  }

  SearchPolicyTypes(ClassId: number, companyId: number): Observable<SstPolicyTypes[]> {
    let httpParams = new HttpParams().set('ClassId', ClassId.toString())
      .set('companyId', companyId.toString());
    return this.httpClient.get<SstPolicyTypes[]>(this.apiUrl + "Search", { headers: this.httpHeaders, params: httpParams, responseType: 'json' })
  }

  SavePolicyType(pltObj: SstPolicyTypes): Observable<SstPolicyTypes> {
    return this.httpClient.post<SstPolicyTypes>(this.apiUrl + "Save", pltObj, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  UpdatePolicyType(pltObj: SstPolicyTypes): Observable<SstPolicyTypes> {
    return this.httpClient.put<SstPolicyTypes>(this.apiUrl + "Edit", pltObj, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }

  RemovePolicyType(companyId: number, pltObjs: SstPolicyTypes[]): Observable<any> {
    let IDz: number[] = [];
    pltObjs.forEach(PolicyTypeObj => {
      IDz.push(PolicyTypeObj.Id);
    });

    return this.httpClient.post<any>(this.apiUrl + "Remove" + companyId, IDz, { headers: this.httpHeaders, responseType: 'json' })
      .catch(this.cs.handleErrorObservable);
  }


}
