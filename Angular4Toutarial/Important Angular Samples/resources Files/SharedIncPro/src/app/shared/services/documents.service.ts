import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Documents, DocumentGroups } from 'src/app/models/data-models';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private httpClient: HttpClient, private cs: CommonService) { }

  private DocumentUrl = environment.apiUrl + "api/Documents";


  GetDocuments(pcObj: DocumentGroups): Observable<Documents[]> {

    return this.sendRequest<any>("POST", this.DocumentUrl + '/GetAllBy', pcObj);

  }

  GetDocumentEntry(Id: number, CompanyId: number = 1): Observable<Documents> {
    let httpParams = new HttpParams().set('Id', Id.toString()).set('CompanyId', CompanyId.toString());
    return this.sendRequest<any>("Get", this.DocumentUrl + "/GetBy?" + httpParams);

  }

  SaveDocuments(pcObj: Documents): Observable<any> {
     pcObj.CreationDate = new Date();

    return this.sendRequest<any>("POST", this.DocumentUrl + '/Save', pcObj);


  }


  UpdateDocuments(pcObj: Documents): Observable<any> {
     pcObj.ModificationDate =new Date();
    return this.sendRequest<any>("POST", this.DocumentUrl + '/Edit', pcObj);


  }


  RemoveDocuments(pcObj: Documents): Observable<any> {
    
    pcObj.ModificationDate = new Date();
    return this.sendRequest<any>("POST", this.DocumentUrl + '/Remove', pcObj);


  }


  private sendRequest<T>(verb: string, url: string, body?: Documents)
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

