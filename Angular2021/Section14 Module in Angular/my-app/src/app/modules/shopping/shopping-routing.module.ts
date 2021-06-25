import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';

const appRoutes:Routes = [
   {path:'',component:ShoppingListComponent,canActivate:[AuthGuard]},
];


@NgModule({
  imports:[RouterModule.forChild(appRoutes)],
  exports:[RouterModule]
})
export class ShoppingRoutingModule { }
