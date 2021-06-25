import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'ribms-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit, OnDestroy {

  isWizardComponent: boolean = false;
  currentYear: number = new Date().getFullYear();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public auths: AuthenticationService) {

  }


  logout() {
    this.auths.logout();
    this.router.navigate(['/login'], { queryParams: { action: "logout" } });
  }
  ngOnInit() {
    document.body.className = "skin-blue sidebar-mini";
  }
  ngOnDestroy() {
    document.body.className = "";
  }

}
