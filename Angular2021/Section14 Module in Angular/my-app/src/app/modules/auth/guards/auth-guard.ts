import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { AuthService } from "../../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
//we use AuthGuard to protect recipes or any authenticate page to accesss directly with url if its authenticated
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  {

    //we use take(1) to take the latest value for the subject and then unsubscribe the subject
    return this.authService.user.pipe(
      take(1),
      map((usr) => {
        const state = !!usr;
        if (state) {
          return true;
        }
        else{
          this.router.createUrlTree(['/auth']);
          return false;
        }
      })
    );



    // return this.authService.user.pipe(
    //   map((usr) => {
    //     return !!usr;
    //   }),tap(isAuth => {
    //     if(!isAuth){
    //       this.router.navigate(['/auth']);
    //     }
    //   })
    // );
  }
}
