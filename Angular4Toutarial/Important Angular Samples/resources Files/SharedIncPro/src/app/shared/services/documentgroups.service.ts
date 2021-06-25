import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DocumentGroups } from 'src/app/models/data-models';

@Injectable({
  providedIn: 'root'
})
export class DocumentgroupsService {

  constructor(private httpClient: HttpClient, private cs: CommonService) { }


  private DocumentgroupUrl = environment.apiUrl + "api/DocumentGroups";


  SearchDocumentGroups(pcObj: DocumentGroups): Observable<DocumentGroups[]> {

    return this.sendRequest<any>("POST", this.DocumentgroupUrl + '/Search', pcObj);

  }

  GetDocumentGroupEntry(Id: number, CompanyId: number = 1): Observable<DocumentGroups> {
    let httpParams = new HttpParams().set('Id', Id.toString()).set('CompanyId', CompanyId.toString());
    return this.sendRequest<any>("Get", this.DocumentgroupUrl + "/Get?" + httpParams);

  }


  SaveDocumentGroups(pcObj: DocumentGroups): Observable<any> {
    pcObj.CreationDate = new Date();
     pcObj.Documents = [];



    return this.sendRequest<any>("POST", this.DocumentgroupUrl + '/Save', pcObj);


  }


  UpdateDocumentGroups(pcObj: DocumentGroups): Observable<any> {
     pcObj.ModificationDate = new Date();
     pcObj.Documents = [];
    return this.sendRequest<any>("POST", this.DocumentgroupUrl + '/Edit', pcObj);


  }


  RemoveDocumentGroups(pcObj: DocumentGroups): Observable<any> {
    pcObj.ModificationDate = new Date();
    pcObj.Documents = [];
    return this.sendRequest<any>("POST", this.DocumentgroupUrl + '/Remove', pcObj);


  }




  private sendRequest<T>(verb: string, url: string, body?: DocumentGroups)
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
