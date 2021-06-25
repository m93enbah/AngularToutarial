import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{
  
  
  //next its the code run after create http request and before leave your app (we put authorization data)
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    //we can check the request method type as below
    if(req.method == 'GET')
    {
      console.log('Request is on its way');
    }

    //we can modify the request by adding 
    const modifiedRequest = req.clone({
      headers: req.headers.append('fullname', 'm93enbah'),
    });

    //it will return to request and then request go to the API
    //we can handle the response return from the API we can other operators such as using of tap , map , etc..
    return next.handle(modifiedRequest).pipe(tap(event => {
      if(event.type == HttpEventType.Response){
        console.log('Response arribed , body data : '+event.body);
      }
    }));
  }
}
