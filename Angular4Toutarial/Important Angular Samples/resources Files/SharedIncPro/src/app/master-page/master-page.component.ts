import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MasterPageService } from '../shared/services/MasterPage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ResizeEvent } from 'angular-resizable-element';
import { ColorPicker } from 'primeng/colorpicker';
import { ToDoListComponent } from '../shared/controls/master-controls/tools-sidebar/to-do-list/to-do-list.component';
import { MatSidenavContainer } from '@angular/material';
// import { MatSidenavContent, MatSidenav } from '@angular/material';
@Component({
  selector: 'css-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit, OnDestroy {
  logoStyle = {};
  toolsbarStyle = {};
  logoSrc;
  mobileQuery: MediaQueryList;
  public currentPage: string;
  selectedLogo: File;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({ length: 50 }, () => `test`);
  private _mobileQueryListener: () => void;
  public bookmarkMenu: any['bootmarks'];
  @ViewChild(ToDoListComponent)
  private ToDoListComponent: ToDoListComponent;
  taskData: any[] = [{ id: 1, name: 'Sample Task', completed: true },
  { id: 2, name: 'Learn Angular', completed: false },
  { id: 3, name: 'Schedule Meeting', completed: false }];
  @ViewChild('uploadSubButton') uploadSubButton: ElementRef;
  @ViewChild('colorPicker') colorPicker: ColorPicker;
  @ViewChild('contentWrapper') contentWrapper: any;
  // @ViewChild('matSidenavContent') matSidenav: ElementRef;
  uploadLogoColor = 'transparent';
  headerColor: string;
  bodyColor: string;
  sideColor: string;
  toggleTodoList = false;
  previousColor: string;
  // private ToDoListComponent: ToDoListComponent;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _sanitizer: DomSanitizer,
    private router: Router,
    private MasterPageService: MasterPageService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    router.events.subscribe((val) => {
      this.currentPage = null;
    });

  }

  ngOnInit() {
    this.MasterPageService.headerColorEmitter.subscribe((color: string) => {
      this.headerColor = color;
      this.onResizeToolbar(null, this.headerColor);
    });
    this.MasterPageService.sideColorEmitter.subscribe((color: string) => {
      this.sideColor = color;
    });
    this.MasterPageService.bodyColorEmitter.subscribe((color: string) => {
      this.bodyColor = color;
    });

    this.MasterPageService.snavToggleEmitter.subscribe((toggleNav: boolean) => {
      console.log('toggleNav', toggleNav);
      if (toggleNav) {
        this.contentWrapper._element.nativeElement.classList.add('sidebar-mini');
      } else {
        this.contentWrapper._element.nativeElement.classList.remove('sidebar-mini');

      }
    });

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  onResizeEnd(event: ResizeEvent): void {
    this.logoStyle = {
      width: `${event.rectangle.width}px`,
    };
  }

  onResizeToolbar(event: ResizeEvent, color: string): void {
    if (color) {
      this.previousColor = color;
    }
    this.toolsbarStyle = {
      'height': (event) ? `${event.rectangle.height}px` : '50px',
      'background-color': this.previousColor
    };
  }

  changeLayoutColor(event) {
    console.log('event', event);
  }

  uploadHandler() {
    console.log('test');
  }


  toggleColorPanel() {
    this.colorPicker.togglePanel();
  }

  showTasks(tasks: any[]) {
    console.log(tasks);
  }

  sideNavStyle() {
    if (this.bodyColor) {
      return {
        'background-color': this.bodyColor,
        'background-image': 'none'
      };
    } else {
      return { 'background-color': null };
    }
  }

  openToDo(event: any) {
    this.toggleTodoList = !this.toggleTodoList;
    this.MasterPageService.todoListEmitter.emit(this.toggleTodoList);
  }
}
