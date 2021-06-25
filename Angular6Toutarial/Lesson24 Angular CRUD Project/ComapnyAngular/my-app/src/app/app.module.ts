import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpLstCompComponent } from './components/emp-lst-comp/emp-lst-comp.component';
import { EmpEntryCompComponent } from './components/emp-entry-comp/emp-entry-comp.component';
import { MenuCompComponent } from './components/menu-comp/menu-comp.component';
import { PageNotFoundCompComponent } from './components/page-not-found-comp/page-not-found-comp.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpServiceService } from './Services/emp-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpEntryCompComponent,
    EmpLstCompComponent,
    MenuCompComponent,
    PageNotFoundCompComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],

  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
