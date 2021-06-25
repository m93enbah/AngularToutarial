import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssigmentComponent } from './components/assigment/assigment.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';


const routes: Routes = [
  {path:'',component:ReactiveFormComponent},
  {path:'template',component:TemplateFormComponent},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'assigmnet',component:AssigmentComponent}

];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
