import { BrowserModule } from '@angular/platform-browser';
//we will put the NgModule on the app_module
import { NgModule } from '@angular/core';
//we will put the FormsModule on the app_module
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
//we see that we added the HttpClientModule in the app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import {EmployeeServiceService} from './Services/employee-service.service';
import { EmployeesComponent } from './Components/employees/employees.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ToastrModule } from 'ngx-toastr';


import { ProfileComponent } from './Components/profile/profile.component';



//we make Navbar Component to access the page and link it with the Routing 
import { NavbarEmployeeComponent } from './Components/navbar-employee/navbar-employee.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
//this variable will carry the path with the Routing 


//we added the Routing in out application
import {RouterModule,Routes} from '@angular/router';
const appRoutes:Routes = [
  {path:'',component:EmployeesComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'profile/:id',component:ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeesComponent,
    EmployeeComponent,
    ProfileComponent,
    NavbarEmployeeComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    //we apply the Routing at the application level
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
