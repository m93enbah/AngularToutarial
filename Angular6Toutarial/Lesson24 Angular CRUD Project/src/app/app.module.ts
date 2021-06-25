import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeEntryCompComponent } from './Components/employee-entry-comp/employee-entry-comp.component';
import { EmployeeLstCompComponent } from './Components/employee-lst-comp/employee-lst-comp.component';
import { MenuCompComponent } from './components/menu-comp/menu-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {IEmployee} from './Models/employee';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeEntryCompComponent,
    EmployeeLstCompComponent,
    MenuCompComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
