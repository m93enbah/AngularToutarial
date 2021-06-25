import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RuleBuilderComponent } from './rule-builder/rule-builder/rule-builder.component';
import { LoginComponent } from './core/login/login.component';
import { QuestionnaireEntryComponent } from './Questionnaire/questionnaire-entry/questionnaire-entry.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  //{ path: 'home', loadChildren: './core/core.module#CoreModule' },
  { path: 'rule-builder', loadChildren: './rule-builder/rule-builder.module#RuleBuilderModule' },
  //{ path: 'login', loadChildren: './core/core.module#CoreModule' },
  { path: 'login', component: LoginComponent },
  { path: 'QuestionnaireEntry', component: QuestionnaireEntryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
