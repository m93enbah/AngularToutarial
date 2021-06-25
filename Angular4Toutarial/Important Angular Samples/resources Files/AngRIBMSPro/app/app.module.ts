import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DataTableModule, MultiSelectModule, ConfirmDialogModule, GrowlModule, ConfirmationService, CalendarModule, DropdownModule, InputSwitchModule, MessageService, AutoCompleteModule, FileUploadModule, RadioButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';

import { AppComponent } from './app.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { DatatableComponent } from './shared/controls/datatable/datatable.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { LoginComponent } from './login/login.component';

import { AuthGaurdService } from './shared/services/auth-gaurd.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { CommonService } from './shared/services/common.service';
import { tokenService } from './shared/services/token.service';
import { DynamicControlService } from './shared/services/dynamic-control.service';
import { FacultativeClaimService } from './shared/services/FacultativeClaimService';
import { FacultativeProcessingService } from './shared/services/FacultativeProcessingService';
import { FacInwardInstallmentsService } from './shared/services/fac-inward-installments.service';
import { FacOutwardService } from './shared/services/fac-outward.service';
import { FacOutwardInstallmentsService } from './shared/services/fac-outward-installments.service';

import { FacultativeProcessingComponent } from './facultative-processing/facultative-processing.component';
import { DynamicControlComponent } from './shared/controls/search-dialog/dynamic-control.component';
import { MenuTitleComponent } from './shared/menu/menu-title/menu-title.component';
import { MenuComponent } from './shared/menu/menu/menu.component';
import { FacultativeClaimComponent } from './facultative-claim/facultative-claim.component';
import { CurrencyComponent } from './shared/controls/currency/currency.component';
import { FacOutwardComponent } from './fac-outward/fac-outward.component';
import { SearchDialogComponent } from './shared/controls/search-dialog/search-dialog.component';
import { SearchBlockComponent } from './shared/controls/search-dialog/search-block.component';


import { DecimalPipe, DatePipe, PercentPipe } from '@angular/common';
import { FileUploadComponent } from './shared/controls/file-upload/file-upload.component';
import { FacOutwardAttachmentsService } from './shared/services/fac-outward-attachments.service';
import { DateDirective } from './shared/directives/date.directive';
import { NumericDirective } from './shared/directives/numeric.directive';
import { NumericPipe } from './shared/pipes/numeric.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    MasterPageComponent,
    BaseComponentComponent,
    LoginComponent,
    FacultativeProcessingComponent,
    DynamicControlComponent,
    MenuTitleComponent,
    MenuComponent,
    FacultativeClaimComponent,
    CurrencyComponent,
    FacOutwardComponent,
    SearchDialogComponent,
    SearchBlockComponent,
    FileUploadComponent,
    DateDirective,
    NumericDirective,
    NumericPipe
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
    MegaMenuModule,
    PanelMenuModule,
    InputSwitchModule,
    AutoCompleteModule,
    FileUploadModule,
    RadioButtonModule
  ],
  providers: [
    AuthGaurdService,
    AuthenticationService,
    CommonService,
    tokenService,
    ConfirmationService,
    MessageService,
    DynamicControlService,
    FacultativeProcessingService,
    FacInwardInstallmentsService,
    FacultativeClaimService,
    FacOutwardService,
    FacOutwardInstallmentsService,
    DecimalPipe,
    PercentPipe,
    DatePipe,
    NgModel,
    FacOutwardAttachmentsService,
    NumericPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
