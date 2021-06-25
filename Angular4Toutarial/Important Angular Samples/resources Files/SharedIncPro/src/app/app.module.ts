import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DataTableModule, MultiSelectModule, ConfirmDialogModule, GrowlModule, ConfirmationService, CalendarModule,  DropdownModule, InputSwitchModule, MessageService, BlockUIModule, ContextMenuModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppComponent } from './app.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { DatatableComponent } from './shared/controls/datatable/datatable.component';
import { NavbarComponent } from './shared/controls/master-controls/navbar/navbar.component';
import { MegaMenuComponent } from './shared/controls/master-controls/mega-menu/mega-menu.component';
import { SidebarComponent } from './shared/controls/master-controls/sidebar/sidebar.component';
import { ToolsSidebarComponent } from './shared/controls/master-controls/tools-sidebar/tools-sidebar.component';
import { ToDoListComponent } from './shared/controls/master-controls/tools-sidebar/to-do-list/to-do-list.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { LoginComponent } from './login/login.component';
import { TooltipModule } from 'primeng/tooltip';
import { tokenService } from './shared/services/token.service';
import { ResizeEvent } from 'angular-resizable-element';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ResizableModule } from 'angular-resizable-element';
import { EcoFabSpeedDialModule } from 'node_modules/@ecodev/fab-speed-dial';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastModule } from 'primeng/toast';

import { PaymentCycleComponent } from './payment-cycle/payment-cycle.component';
import { DocumentsComponent } from './documents/documents.component';
import { ClosingPeriodComponent } from './closing-period/closing-period.component';
import { systemCodes } from './system-codes/system-codes.component';
import { InsuranceClassesComponent } from './insurance-classes/insurance-classes.component';

import { MasterPageService } from './shared/services/MasterPage.service';
import { CoreService } from './shared/services/core.service';
import { CommonService } from './shared/services/common.service';
import { AuthGaurdService } from './shared/services/auth-gaurd.service';
import { AuthenticationService } from './shared/services/authentication.service';

import { DocumentgroupsService } from './shared/services/documentgroups.service';
import { DocumentsService } from './shared/services/documents.service';
import { systemCodesService } from './shared/services/systemCodes.service';
import { ClosingPeriodService } from './shared/services/closing-period.service';
import { SstpaymentcycleService } from './shared/services/sstpaymentcycle.service';
import { SstpaymentdetailsService } from './shared/services/sstpaymentdetails.service';
import { SstClassesService } from './shared/services/sst-classes.service';
import { ProductConfigurationComponent } from './shared/controls/product-configuration/product-configuration.component'
import { DragulaModule } from 'ng2-dragula';
import { SstpaymentsystemsService } from './shared/services/sstpaymentsystems.service';
import { ClausesComponent } from './clauses/clauses.component'
import { EditorModule } from 'primeng/editor';

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
import { EditableDirective } from './shared/directives/editable.directive';
import { ContextMenuComponent } from './shared/controls/context-menu/context-menu.component';
import { BusinessChannelsComponent } from './business-channels/business-channels.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    MasterPageComponent,
    NavbarComponent,
    MegaMenuComponent,
    SidebarComponent,
    ToolsSidebarComponent,
    ToDoListComponent,
    BaseComponentComponent,
    LoginComponent,
    ClosingPeriodComponent,
    systemCodes,
    PaymentCycleComponent,
    DocumentsComponent,
    InsuranceClassesComponent,
    ProductConfigurationComponent,
    EditableDirective,
    ContextMenuComponent,
    ClausesComponent,
    BusinessChannelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataTableModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ConfirmDialogModule,
    GrowlModule,
    HttpClientModule,
    MatIconModule,
    EditorModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    RadioButtonModule,
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
    MegaMenuModule,
    PanelMenuModule,
    InputSwitchModule,
    ColorPickerModule,
    ResizableModule,
    EcoFabSpeedDialModule,
    TooltipModule,
    AutoCompleteModule,
    CardModule,
    NgxDatatableModule,

    SweetAlert2Module.forRoot(),
    ToastModule,
    DragulaModule.forRoot(),
    ContextMenuModule,
    BlockUIModule
  ],
  providers: [
    AuthGaurdService,
    AuthenticationService,
    CommonService,
    tokenService,
    ConfirmationService,
    MessageService,
    SstpaymentcycleService,
    SstpaymentdetailsService,
    DocumentgroupsService,
    DocumentsService,
    systemCodesService,
    MasterPageService,
    CoreService,
    ClosingPeriodService,
    SstClassesService,
    SstpaymentsystemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
