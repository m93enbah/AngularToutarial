import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpEntryCompComponent } from './components/emp-entry-comp/emp-entry-comp.component';
import { EmpLstCompComponent } from './components/emp-lst-comp/emp-lst-comp.component';
const routes: Routes = [
{ path: 'list', component: EmpLstCompComponent },
{ path: 'create', component: EmpEntryCompComponent },
{ path: 'edit/:id', component: EmpEntryCompComponent },
{ path: '', redirectTo: '/list', pathMatch: 'full' }];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]})
export class AppRoutingModule { }
