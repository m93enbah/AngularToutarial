import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './guards/auth-guard.service';
import { CanDeactivateGuard } from './guards/can-component-deactivate';
import { ServerResolver } from './resolvers/server-resolver';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,children:[
    {path:':id',component:UserComponent},
  ]},

  //,canActivate:[AuthGuard]
  {path:'servers',component:ServersComponent,canActivateChild:[AuthGuard],children:[
    {path:':id',component:ServerComponent,resolve:{server: ServerResolver}},
    {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]},
  ]},
  //we apply routing on ErrorPageComponent
  {path:'not-found',component:ErrorPageComponent,data:{message:'Page Not found!'}},
  //make sure that the wildcard routing is the last route 
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{useHash:true})],
  imports: [RouterModule.forRoot(routes)],
  //export means that make this class content accessiable to the outsourcing using
  exports: [RouterModule]
})
export class AppRoutingModule { }
