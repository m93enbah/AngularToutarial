import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Components/employee/employeeList.component';
import {EmployeeService} from './Service/employee.service';

//we see that we added the HttpClientModule in the app.module.ts
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeTitlePipe } from '../app/Service/EmployeeTitle.Pipe';
import { EmployeeCountComponent } from './Components/EmployeeCount/EmployeeCount.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
