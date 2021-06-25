import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  //in the interceptor we modify any request URI with add header auth : user token
  //we get the latest value of the behavioural subject and then unsubscribe it
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    debugger;
    return this.authService.user.pipe(
      take(1),
      exhaustMap((usr) => {
        //to handle login and signup request without sending auth params as below
        if (!usr) {
          return next.handle(request);
        }
        //for other requests
        const modifiedReq = request.clone({
          params: new HttpParams().set('auth', usr.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
