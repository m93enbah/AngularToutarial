import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormBuilder2Component } from './form-builder2/form-builder2.component';
import { ComponentEntryComponent } from './component-entry/component-entry.component';

const routes: Routes = [


  {
    path: '',
    redirectTo: 'formbuilder',
    pathMatch: 'full'
  },
  {
    path: 'formbuilder',
    component: FormBuilderComponent,
    children: [
      { path: '', component: FormBuilderComponent }
    ]
  },
  {
    path: 'formbuilder2',
    component: FormBuilder2Component,
    children: [
      { path: '', component: FormBuilder2Component }
    ]
  },
  {
    path: 'ComponentEntry',
    component: ComponentEntryComponent,
    children: [
      { path: '', component: ComponentEntryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
