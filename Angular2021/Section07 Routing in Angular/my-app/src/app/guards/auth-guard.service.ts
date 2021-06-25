import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { promise } from "protractor";
import { Observable } from "rxjs";
import { AuthService } from "./auth-service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private authService:AuthService,private router:Router)
  {
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute,state);
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  {

    const promise = new Promise<boolean>(async (resolve, reject) => {
      setTimeout(() =>{
       var result = this.authService.loggedIn;
       if(!result)
       {
         console.log('nvaigate to home url');
        this.router.navigate(['/']);
       }
       resolve(result);
      }, 800);
    });
    return promise;
    
  }
}