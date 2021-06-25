import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
// import { WizardService } from './wizard.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthGaurdService implements CanActivate {


  constructor(private router: Router/*, private ws: WizardService*/, private auths: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.auths.getToken()) {
      // this.ws.setWizardVisibility(environment.wizardComponentUrls.find(x => x === state.url) ? true : false);
      // let wizardComponent = environment.wizardComponentUrls.find(x => x === state.url) ? true : false;

      return true;
    }

    
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
