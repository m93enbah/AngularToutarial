import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit, Renderer2, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT, CommonModule } from '@angular/common';
import { MasterPageService } from '../../../../core/services/MasterPage.service';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { Route, ActivatedRoute } from '@angular/router'
import { MenuItem, MenuType, Application } from '../../../../shared/models/models';
import { debug } from 'util';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CoreService } from '../../../services/Core.service';
//import { MenuItem } from 'primeng/api'




@Component({
  selector: 'ribms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('toolsSettings') toolsSettings: ElementRef;
  @ViewChild('toggleMenu') toggleMenu: ElementRef;
  headerColor = '#68bee7';
  sideColor = '#ffffff';
  bodyColor = '#ecf7f9';
  ToDoKist
  FixedLayoutChecked = false;
  BoxedLayoutChecked = false;
  ToggleSidebarChecked = false;
  DarkSkinChecked = false;
  previousSkin = null;
  toggleNav = false;
  // menuSubOpened: false;
  step = 0;
  websiteSize: any[] = [
    {
      'icon': 'fa fa-window-maximize',
      'class': 'layout-small',
      'type': 'Small'
    },
    {
      'icon': 'fa fa-window-maximize fa-2x',
      'class': 'layout-medium',
      'type': 'Medium'
    },
    {
      'icon': 'fa fa-window-maximize fa-3x',
      'class': 'layout-large',
      'type': 'Large'
    },
    {
      'icon': 'fa fa-window-maximize fa-2x',
      'class': 'layout-default',
      'type': 'Default'
    }

  ]
  websiteSkins: any[] = [
    {
      'class': 'default-theme',
      'tooltip': 'Default Theme'
    },
    {
      'class': 'blue-theme',
      'tooltip': 'Blue Theme'
    },
    {
      'class': 'red-theme',
      'tooltip': 'Red Theme'
    },
    {
      'class': 'purple-theme',
      'tooltip': 'Purple Theme'
    },
    {
      'class': 'yellow-theme',
      'tooltip': 'Yellow Theme'
    },
    {
      'class': 'blue-grey-theme',
      'tooltip': 'Blue Grey Theme'
    },
    {
      'class': 'purple-light-theme',
      'tooltip': 'Purple Light Theme'
    },
    {
      'class': 'green-light-theme',
      'tooltip': 'Green Light Theme'
    },
    {
      'class': 'red-light-theme',
      'tooltip': 'Red Light Theme'
    },
    {
      'class': 'yellow-light-theme',
      'tooltip': 'Yellow Light Theme'
    },
  ];
  // @ViewChild('toolsSideBar') sideBar: ElementRef;
  apps: MenuItem[];
  Pages: MenuItem[];
  SubPages: MenuItem[];
  userMenus: MenuItem[];
  AppMenus: MenuItem[];
  ModuleMwnus: MenuItem[];
  Data: any;
  Items: MenuItem[];
  constructor(private router: Router,
    private renderer: Renderer2,
    private MasterPageService: MasterPageService, private ActivatedRoute: ActivatedRoute, private Auth: AuthenticationService, private CService: CoreService) {

    //this.data = ActivatedRoute.data;
    //console.log(this.data);

  }
  items: any[];


  ngOnInit() {

    this.items = JSON.parse(localStorage.getItem('coreMenu')) || [];


    let AllMenus: any;
    let SystemMenus: MenuItem[] = [];
    let userMenus = [];

    let user = this.CService.getLoggedInUser();
    if (user != null) {
      this.CService.GenerateApplicationMenus().subscribe(
        response => {
          debugger;
          let menus = response.data;
          let appMenus = menus.filter(menu => menu.mENU_TYPE == 1);
          appMenus.forEach(appMenu => {


            SystemMenus = [...SystemMenus, {
              Id: appMenu.iD,
              label: appMenu.nAME,
              Url: appMenu.uRL,
              AlternativeName: "",
              icon: appMenu.hELP_PAGE_URL,
              Application: Application.SharedSetup,
              items: this.GetSubPages(appMenu.mENU_TYPE + 1, appMenu.iD, menus)
            }]
          });

          // AllMenus = response.data;
          //   return SystemMenus;

          this.userMenus = SystemMenus;
          console.log(this.userMenus);

        });
    }
    console.log(this.userMenus);



  }

  ngAfterViewInit(): void {

  }

  toolsOpenHandler() {
    this.toggleMenu.nativeElement.classList.add('tools-open')
  }

  menuOpenHandler() {
    this.toggleMenu.nativeElement.classList.remove('tools-open')
  }

  signOut() {
    this.router.navigateByUrl('/sign-in');
  }

  activeRoute(routeName: string): boolean {
    return this.router.url.indexOf(routeName) > -1;
  }

  toggleClass() {
    // this.sideBar.nativeElement.classList.toggle('open-test');
  }

  resetSettings() {

  }

  layoutChanged(e) {
    if (this.FixedLayoutChecked) {
      this.renderer.addClass(document.body, 'fixed-header');
    } else {
      this.renderer.removeClass(document.body, 'fixed-header');
    }

    if (this.BoxedLayoutChecked) {
      this.renderer.addClass(document.body, 'layout-boxed');
    } else {
      this.renderer.removeClass(document.body, 'layout-boxed');
    }
  }
  darkSkinHanlder(e) {
    console.log('test');
    this.toggleMenu.nativeElement.classList.toggle('control-sidebar-dark');
  }

  changeSkinHandler(skin: string) {
    if (skin !== this.previousSkin) {
      this.renderer.removeClass(document.body, this.previousSkin);
      this.renderer.addClass(document.body, skin);
      this.previousSkin = skin;
    }
  }

  manualColorChange(e, source: string) {
    if (source === 'headerColor') {
      this.MasterPageService.headerColorEmitter.emit(e.value);

    } else if (source === 'sideColor') {
      this.MasterPageService.sideColorEmitter.emit(e.value);

    } else if (source === 'bodyColor') {
      this.MasterPageService.bodyColorEmitter.emit(e.value);

    }

    else if (source == "ToDoListColor") {
      this.MasterPageService.headerColorEmitter.emit(e.value);
    }
  }

  snavToggleHandler() {
    this.toggleNav = !this.toggleNav;
    this.MasterPageService.snavToggleEmitter.emit(this.toggleNav);
  }

  setStep(index: number) {
    this.step = index;
  }

  GetMenus(): any {

    //let AllMenus: any;
    //let SystemMenus: MenuItem[] = [];    
    //this.Auth.GenerateApplicationMenus().subscribe(
    //  response => {

    //    let menus = response.data;
    //    let appMenus = menus.filter(menu => menu.mENU_TYPE == 1);


    //    appMenus.forEach(appMenu => {


    //      SystemMenus = [...SystemMenus, {
    //        Id: appMenu.iD,
    //        Name: appMenu.nAME,
    //        Url: appMenu.uRL,
    //        AlternativeName: "",
    //        Icon: "",
    //        Application: Application.GeneralInsurance,
    //        Pages: this.GetSubPages(appMenu.mENU_TYPE + 1, appMenu.iD, menus)
    //      }]
    //    });

    //    AllMenus = response.data;
    //    return SystemMenus;


    //  });

  }



  GetSubPages(Menu_Type: number, Parent_id: number, Data: any): MenuItem[] {
    debugger;
    let MenuPages: MenuItem[] = [];
    let SubMenus = Data.filter(a => a.mENU_TYPE == Menu_Type && a.cAM_SMU_ID == Parent_id)
    SubMenus.forEach(SubMenus => {
      MenuPages = [...MenuPages, {
        Id: SubMenus.iD,
        label: SubMenus.nAME,
        Url: SubMenus.uRL,
        AlternativeName: "",
        Application: Application.SharedSetup,
        icon: Menu_Type == 4 ? "" : SubMenus.hELP_PAGE_URL,
        items: Menu_Type == 4 ? null : this.GetSubPages(Menu_Type + 1, SubMenus.iD, Data),


      }];
    });

    return MenuPages;


  }

}
