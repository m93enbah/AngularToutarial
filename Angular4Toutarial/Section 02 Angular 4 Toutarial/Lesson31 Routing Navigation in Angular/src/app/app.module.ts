import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import {MenuComponent} from './Components/menu/menu.component';

import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import {EmployeeService} from './Service/employee.service';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeDetailComponent } from './Components/employee-detail/employee-detail.component';
import { Home2Component } from './Components/home2/home2.component';
import { FormsModule } from '@angular/forms';
import {EmpModule} from './EmpModule';
import { TestServiceService } from './Service/test-service.service';
const appRoutes: Routes = [
//The Order of the routes path is important , so that the order of the default route and the 
//wild card route is the order is the last and before last order 
    { path: 'home', component: HomeComponent },
    { path: 'home2', component: Home2Component },
    { path: 'employees', component: EmployeeListComponent },
    {path:'detail/:id',component:EmployeeDetailComponent},
//we link the default route with the homeComponent
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    MenuComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    Home2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    EmpModule
  ],
  providers:[]
  ,  bootstrap: [AppComponent]
})
export class AppModule { }
