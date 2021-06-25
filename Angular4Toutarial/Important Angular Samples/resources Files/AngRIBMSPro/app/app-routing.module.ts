import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FacultativeProcessingComponent } from './facultative-processing/facultative-processing.component';
import { FacultativeClaimComponent } from './facultative-claim/facultative-claim.component';
import { AuthGaurdService } from './shared/services/auth-gaurd.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: FacultativeProcessingComponent, canActivate: [AuthGaurdService]},
  { path: 'FacProcessing', component: FacultativeProcessingComponent },
  { path: 'FacClaim', component: FacultativeClaimComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
