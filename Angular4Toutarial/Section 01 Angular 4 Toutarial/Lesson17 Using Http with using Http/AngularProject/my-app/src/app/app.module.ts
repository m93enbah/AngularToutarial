import { BrowserModule } from '@angular/platform-browser';
//we will put the NgModule on the app_module
import { NgModule } from '@angular/core';
//we will put the FormsModule on the app_module
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
//we see that we added the HttpClientModule in the app.module.ts
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import {EmployeeServiceService} from './Services/employee-service.service';
import { EmployeesComponent } from './Components/employees/employees.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
