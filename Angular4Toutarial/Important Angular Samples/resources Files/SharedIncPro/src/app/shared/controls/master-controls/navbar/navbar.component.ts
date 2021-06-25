import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { ColorPicker } from 'primeng/colorpicker';
import { CoreService } from '../../../services/core.service';
import { User } from 'src/app/models/data-models';
import { Router   } from '@angular/router';

@Component({
  selector: 'css-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logoStyle = {};
  showUploadSelect = false;
  showUploadOpen = true;
  showSubList = false;
  showOverlay = false;
  @ViewChild('uploadSubButton') uploadSubButton: ElementRef;
  @ViewChild('colorPicker') colorPicker: ColorPicker;
  OUser: any;
  UserName: string;
  constructor(private CService: CoreService, private router: Router) { }

  ngOnInit() {
    let OUser = this.CService.getLoggedInUser();
    if (OUser != null) {
      this.UserName = OUser.userName;
    }

  }
  showSelectHandler() {
    this.showOverlay = true;
    this.showUploadSelect = true;
    this.showUploadOpen = false;
  }

  hideSelectHandler() {
    this.showOverlay = false;
    this.showUploadSelect = false;
    this.showUploadOpen = true;
  }

  showSubListHandler() {
    this.showSubList = !this.showSubList;
    this.uploadSubButton.nativeElement.classList.toggle('active');
    console.log(this.colorPicker);

  }

  closeUploadMenu() {
    this.showUploadOpen = true;
    this.showOverlay = false;
    this.showUploadSelect = false;
    this.showSubList = false;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.logoStyle = {
      width: `${event.rectangle.width}px`,
    };
  }

  logoutUser() {
    debugger;
    this.CService.logout();
    this.router.navigate(['/login']);
    
  }
}
