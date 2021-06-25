import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MenuItem } from '../../../models/data-models';

@Component({
  selector: 'ribms-side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
  apps: MenuItem;
  subpages: MenuItem[];
  pages: MenuItem[];
  userMenus: MenuItem[] = [];
  data: any;
  constructor(private activatedRoute: ActivatedRoute, private auths: AuthenticationService) {
    this.data = this.activatedRoute.data;
    console.log(this.data);
    //this.name = 'Sam';
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.auths.getUserMenus().subscribe(
      data => {
        this.userMenus = data;
      },
      err => {
        this.userMenus = [];
      }
    );

  }

  routeTo(url: string, app: string) {
    console.log(url, app);
    //this.auths.route("http://localhost/BMSCloudSetup.UI/" + value).subscribe();
    switch (app.toString()) {
      case '9':
        window.location.href = "http://192.168.0.32/ReinsuranceBMS/" + url;
        break;

      case '268':
        window.location.href = "http://192.168.0.32/BMSSetup/" + url;
        break;
    }
    
  }
}


