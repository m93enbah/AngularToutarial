import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputGroupCompComponent } from './components/input-group-comp/input-group-comp.component';
import { Shape01Component } from './components/shape01/shape01.component';

const routes: Routes = [
  { path: 'list', component: InputGroupCompComponent },
  { path: 'shape01', component: Shape01Component },

  { path: '', redirectTo: '/list', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
