import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Outgoing request');
    console.log(request.url);

    return next.handle(request).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Incoming Response');
          console.log(event.body);
        }
      })
    );
  }
}
