import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';


const appRoutes:Routes = [
  //it will say redirect to the /recipes if the full path is empty after the base url
   {path:'',component:AuthComponent}
];

@NgModule({
  imports:[RouterModule.forChild(appRoutes)],
  exports:[RouterModule]
})
export class CoreRoutingModule { }
