import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { PostModel } from '../models/post-model';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  post(model: PostModel):Observable<any> {
    return this.http
      .post(
        'https://enbehpro-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        model,
        {
          observe:'response'
        }
      );
  }

  get():Observable<PostModel[]> {

    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty').append('custom','key');

    return this.http.get<{ [key: string]: PostModel }>(
      'https://enbehpro-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      {
        headers:new HttpHeaders({'accept':  'application/json','custom-header':'hello'}),
        params:searchParams,
        observe:'body',
        responseType:'json'
        // responseType:'text'
        // responseType:'blob'
      }
    ).pipe(
      map((responeData: { [key: string]: PostModel }) => {
        const postsArray: PostModel[] = [];
        for (const key in responeData) {
          if (responeData.hasOwnProperty(key)) {
            postsArray.push({ ...responeData[key], id: key });
          }
        }
        return postsArray;
      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }

  delete(){
    return this.http.delete(
      'https://enbehpro-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      {
        observe:'events',
      }
    ).pipe(
      tap(event => {
        console.log(event);
        if(event.type === HttpEventType.Sent){
          console.log(event);
        }
        if(event.type === HttpEventType.Response){
          console.log(event.body);
        }
      })
    );
  }
}
