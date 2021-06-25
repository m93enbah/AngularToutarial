import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationError } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RIBMS';

  data: any;
  msgs: any;
  showMasterPage: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private auth: AuthenticationService) {
    this.data = this.activatedRoute.data;

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        if (event.url.includes("/login")) {
          this.showMasterPage = false;
        }
        else {
          this.showMasterPage = true;
        }

      }

      if (event instanceof NavigationError) {

        this.router.navigate(["/login"]);
        this.showMasterPage = false;
        this.auth.destroyToken();

      }
    });
  }
}
