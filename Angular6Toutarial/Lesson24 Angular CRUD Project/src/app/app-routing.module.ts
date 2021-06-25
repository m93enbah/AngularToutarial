import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEntryCompComponent } from './Components/employee-entry-comp/employee-entry-comp.component';
import { EmployeeLstCompComponent } from './Components/employee-lst-comp/employee-lst-comp.component';


const routes: Routes = [
  { path: 'list', component: EmployeeLstCompComponent },
  { path: 'create', component: EmployeeEntryCompComponent },
  { path: 'edit/:id', component: EmployeeEntryCompComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
