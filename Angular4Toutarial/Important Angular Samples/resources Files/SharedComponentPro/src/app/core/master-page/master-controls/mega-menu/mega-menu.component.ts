import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router } from '@angular/router';
import { MasterPageComponent } from '../../../../../app/core/master-page/master-page.component';


@Component({
  selector: 'ribms-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {

  constructor(private router: Router, private MasterPageComponent: MasterPageComponent) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Module Name', icon: 'fa fa-fw fa-laptop',
        items: [
          [
            {
              label: 'Module Name',
              items: [{ label: 'Page Title' }, { label: 'Page Title' }]
            },
            {
              label: 'Module Name',
              items: [{ label: 'Page Title' }, { label: 'Page Title' }]
            }
          ],
          [
            {
              label: 'Module Name',
              items: [{ label: 'Page Title' }, { label: 'Page Title' }]
            },
            {
              label: 'Module Name',
              items: [{ label: 'Page Title' }, { label: 'Page Title' }]
            }
          ]
        ]
      },
      {
        label: 'Page Title', icon: 'fa fa-fw fa-file'
      }
    ];
  }

  getActiveRoute(): string {
    return this.MasterPageComponent.currentPage ||
      this.router.url.replace(new RegExp('/', 'g'), "-").replace(/(-.)/g, function (letter) {
        return " " + letter[1].toUpperCase();
      });

  }

}
