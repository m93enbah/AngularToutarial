import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ClosingPeriods } from 'src/app/models/data-models';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})

export class ClosingPeriodService {
 
  private apiUrl = environment.apiUrl + 'api/ClosingPeriod';
  private httpHeaders = new HttpHeaders().set('Authorization', 'application/json');

  constructor(private http: HttpClient, private cs: CommonService, private core: CoreService) { }


  getData(id: number): Observable<ClosingPeriods> {

    return this.http.get<ClosingPeriods>(this.apiUrl + '/Get/' + id + '/' + this.core.getLoggedInUser().companyId, { headers: this.httpHeaders, responseType: 'json' });
  }

  SaveClosingPeriod(model: ClosingPeriods) {
    debugger;
    model.CreationUser = this.core.getLoggedInUser().userName;
    model.CompanyId = this.core.getLoggedInUser().companyId;
    
    return this.http.post<any>(this.apiUrl + '/SaveClosingPeriod', model, { responseType: 'json' })
      .catch(this.cs.handleErrorObservable);;
      

  }
 

  UpdateClosingPeriod(model: ClosingPeriods) {

    model.ModificationUser = this.core.getLoggedInUser().userName;
    
    return this.http.put<any>(this.apiUrl + '/UpdateClosingPeriod', model, { responseType: 'json' })
      .catch(this.cs.handleErrorObservable);

  }


  RemoveRangeClosingPeriod(selectedRows: ClosingPeriods[]) : any {
    return this.http.post<any>(this.apiUrl + '/RemoveRangeClosingPeriod', selectedRows);
    
  }

  //GetAllClosingPeriod(companyId: number): any {
  //  return this.http.get<any>(this.apiUrl + '/GetAllClosingPeriod?companyId=' + companyId);
  //}


  FindClosingPeriod(searchCriteria: any): Observable<ClosingPeriods[]> {
    let Queryparams = new HttpParams();
    Queryparams = Queryparams.append("companyId", "1");  //todo
    for (let criteria in searchCriteria) {
      if (searchCriteria.hasOwnProperty(criteria)) {
        Queryparams = Queryparams.append(criteria, searchCriteria[criteria])
      }
    }
    return this.http.get<ClosingPeriods[]>(this.apiUrl + '/FindClosingPeriod', { params: Queryparams, headers: this.httpHeaders, responseType: 'json' });
  }

}

