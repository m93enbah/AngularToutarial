import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
//import { MasterPageComponent } from '../app/core/master-page/master-page.component';
import { DataTableModule, MultiSelectModule, ConfirmDialogModule, GrowlModule, ConfirmationService, CalendarModule, DropdownModule, InputSwitchModule, MessageService } from 'primeng/primeng';
//import { NavbarComponent } from './shared/controls/master-controls/navbar/navbar.component';
//import { MegaMenuComponent } from './shared/controls/master-controls/mega-menu/mega-menu.component';
//import { SidebarComponent } from './shared/controls/master-controls/sidebar/sidebar.component';
//import { ToolsSidebarComponent } from './shared/controls/master-controls/tools-sidebar/tools-sidebar.component';
//import { ToDoListComponent } from './shared/controls/master-controls/tools-sidebar/to-do-list/to-do-list.component';
//import { BaseComponentComponent } from './base-component/base-component.component';
//import { LoginComponent } from './login/login.component';
import { TooltipModule } from 'primeng/tooltip';
import { ResizeEvent } from 'angular-resizable-element';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ResizableModule } from 'angular-resizable-element';
import { EcoFabSpeedDialModule } from 'node_modules/@ecodev/fab-speed-dial';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireEntryComponent } from './Questionnaire/questionnaire-entry/questionnaire-entry.component';

//import {
//  MatAutocompleteModule,
//  MatBadgeModule,
//  MatBottomSheetModule,
//  MatButtonModule,
//  MatButtonToggleModule,
//  MatCardModule,
//  MatCheckboxModule,
//  MatChipsModule,
//  MatDatepickerModule,
//  MatDialogModule,
//  MatDividerModule,
//  MatExpansionModule,
//  MatGridListModule,
//  MatIconModule,
//  MatInputModule,
//  MatListModule,
//  MatMenuModule,
//  MatNativeDateModule,
//  MatPaginatorModule,
//  MatProgressBarModule,
//  MatProgressSpinnerModule,
//  MatRadioModule,
//  MatRippleModule,
//  MatSelectModule,
//  MatSidenavModule,
//  MatSliderModule,
//  MatSlideToggleModule,
//  MatSnackBarModule,
//  MatSortModule,
//  MatStepperModule,
//  MatTableModule,
//  MatTabsModule,
//  MatToolbarModule,
//  MatTooltipModule,
//  MatTreeModule,

//} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireEntryComponent
 //   MasterPageComponent
    //NavbarComponent,
    //MegaMenuComponent,
   // SidebarComponent,
    //ToolsSidebarComponent,
    //ToDoListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    CalendarModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  // ConfirmDialogModule,
  //  GrowlModule,
    HttpClientModule,
    //MatIconModule,
    //MatToolbarModule,
    //MatSidenavModule,
    //MatListModule,
    //MatAutocompleteModule,
    //MatBadgeModule,
    //MatBottomSheetModule,
    //MatButtonModule,
    //MatButtonToggleModule,
    //MatCardModule,
    //MatCheckboxModule,
    //MatChipsModule,
    //MatStepperModule,
    //MatDatepickerModule,
    //MatDialogModule,
    //MatDividerModule,
    //MatExpansionModule,
    //MatGridListModule,
    //MatInputModule,
    //MatMenuModule,
    //MatNativeDateModule,
    //MatPaginatorModule,
    //MatProgressBarModule,
    //MatProgressSpinnerModule,
    //MatRadioModule,
    //MatRippleModule,
    //MatSelectModule,
    //MatSidenavModule,
    //MatSliderModule,
    //MatSlideToggleModule,
    //MatSnackBarModule,
    //MatSortModule,
    //MatTableModule,
    //MatTabsModule,
    //MatTooltipModule,
    //MatTreeModule,
    //MegaMenuModule,
    //PanelMenuModule,
    //InputSwitchModule,
    //ColorPickerModule,
    //ResizableModule,
    //EcoFabSpeedDialModule,
    //TooltipModule,
    //AutoCompleteModule,
    //CardModule,
    //NgxDatatableModule,

    SweetAlert2Module.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
