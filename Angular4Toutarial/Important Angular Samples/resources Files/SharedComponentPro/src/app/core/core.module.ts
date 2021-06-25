import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MegaMenuComponent } from './master-page/master-controls/mega-menu/mega-menu.component';
import { SidebarComponent } from './master-page/master-controls/sidebar/sidebar.component';
import { ToolsSidebarComponent } from './master-page/master-controls/tools-sidebar/tools-sidebar.component';
import { ToDoListComponent } from './master-page/master-controls/tools-sidebar/to-do-list/to-do-list.component';
import { ProgressBarModule } from 'primeng/progressbar';



// home page modules
import { NbThemeModule } from '@nebular/theme';
import { NbCardModule, NbLayoutModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// end

// home page component
import { HomeComponent } from './home/home.component';
import { EarningCardComponent } from './home/earning-card/earning-card.component';
import { EarningBackSideComponent } from './home/earning-card/earning-back-side/earning-back-side.component';
import { EarningFrontSideComponent } from './home/earning-card/earning-front-side/earning-front-side.component';
import { LiveUpdateChartComponent } from './home/earning-card/earning-front-side/live-update-chart.component';
import { ProfitCardComponent } from './home/profit-card/profit-card.component';
import { FrontSideComponent } from './home/profit-card/front-side/front-side.component';
import { BackSideComponent } from './home/profit-card/back-side/back-side.component';
import { BarAnimationChartComponent } from './home/profit-card/front-side/bar-animation-chart.component';
import { AreaChartComponent } from './home/profit-card/back-side/area-chart.component';
import { EarningPieChartComponent } from './home/earning-card/earning-back-side/earning-pie-chart.component';
import { TrafficCardComponent } from './home/traffic-card/traffic-card.component';
import { TrafficFrontSideComponent } from './home/traffic-card/traffic-front-side/traffic-front-side.component';
import { TrafficBackSideComponent } from './home/traffic-card/traffic-back-side/traffic-back-side.component';
import { TrafficCardHeaderComponent } from './home/traffic-card/traffic-card-header/traffic-card-header.component';
import { TrafficBarComponent } from './home/traffic-card/traffic-front-side/traffic-bar/traffic-bar.component';
import { BackTrafficChartComponent } from './home/traffic-card/traffic-back-side/back-traffic-chart.component';
import { ProfileInfoComponent } from './home/profile-info/profile-info.component';
import { WidgetsComponent } from './home/widgets/widgets.component';
// end

//user-settings component
import { UserSettingsComponent } from './user-settings/user-settings.component';
// end

// user-settings module
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
//end

import { ResizableModule } from 'angular-resizable-element';
import { TooltipModule } from 'primeng/tooltip';
import { ResizeEvent } from 'angular-resizable-element';
import { ColorPickerModule } from 'primeng/colorpicker';
import { EcoFabSpeedDialModule } from 'node_modules/@ecodev/fab-speed-dial';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NavbarComponent } from './master-page/master-controls/navbar/navbar.component';


import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,

} from '@angular/material';





@NgModule({
  declarations: [HomeComponent, LoginComponent, MasterPageComponent,
    NotFoundComponent, SideMenuComponent, ProfitCardComponent,
    FrontSideComponent, BackSideComponent, BarAnimationChartComponent,
    AreaChartComponent,
    EarningCardComponent,
    EarningBackSideComponent,
    EarningFrontSideComponent,
    LiveUpdateChartComponent,
    EarningPieChartComponent,
    TrafficCardComponent,
    TrafficFrontSideComponent,
    TrafficBackSideComponent,
    TrafficCardHeaderComponent,
    TrafficBarComponent,
    BackTrafficChartComponent,
    ProfileInfoComponent,
    NavbarComponent,
    MegaMenuComponent,
    SidebarComponent,
    ToolsSidebarComponent,
    ToDoListComponent,
    WidgetsComponent,
    UserSettingsComponent
  ],
  imports: [
    PanelMenuModule,
    SweetAlert2Module,
    ColorPickerModule,
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    NbThemeModule.forRoot(),
    NgbModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    BrowserAnimationsModule,
    NgxEchartsModule,
    ResizableModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    CardModule,
    ResizableModule,
    EcoFabSpeedDialModule,
    TooltipModule,
    ProgressBarModule,
    TabViewModule,
    ButtonModule
  ],
  exports: [
    RouterModule,
    MasterPageComponent
  ],
  providers: []
})
export class CoreModule { }
