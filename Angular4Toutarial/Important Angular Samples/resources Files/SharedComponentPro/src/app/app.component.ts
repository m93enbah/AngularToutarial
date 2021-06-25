import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SharedComponentsNG';
  data : any;
  showMasterPage: boolean = true;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.data = this.activatedRoute.data;
    console.log(router.url);
    console.log(this.activatedRoute.snapshot.url);
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        console.log("current url", event.url);
        if (event.url.includes("/login")) {
          this.showMasterPage = false;
        }
        else {
          this.showMasterPage = true;
        }
      }
    });
  }
}
