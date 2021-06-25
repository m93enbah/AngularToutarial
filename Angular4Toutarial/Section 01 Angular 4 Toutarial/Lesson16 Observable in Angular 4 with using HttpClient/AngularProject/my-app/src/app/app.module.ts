import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
//we see that we added the HttpClientModule in the app.module.ts
import {HttpClientModule} from '@angular/common/http';

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
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
