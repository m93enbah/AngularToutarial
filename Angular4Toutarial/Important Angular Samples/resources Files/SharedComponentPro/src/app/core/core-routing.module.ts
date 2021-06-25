import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileSettingsService } from './services/profile-settings.service';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'admin',
  //   canActivate: [AuthGaurdService],
  //   loadChildren: '../admin/admin.module#AdminModule'
  // },
  {
    path: 'formbuilder',
    loadChildren: '../form-builder/form-builder.module#FormBuilderModule'
  },

  {
    path: 'rulebuilder',
    loadChildren: '../rule-builder/rule-builder.module#RuleBuilderModule'
  },
  {
    path: 'payment',
    loadChildren: '../payment/payment.module#PaymentModule'
  },
  {
    path: 'integration',
    loadChildren: '../integration/integration.module#IntegrationModule'
  },
  {
    path: 'profileSettings',
    component: UserSettingsComponent
  },
  
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
