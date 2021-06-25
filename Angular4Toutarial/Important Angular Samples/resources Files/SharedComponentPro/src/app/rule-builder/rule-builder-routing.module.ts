import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleBuilderComponent } from './rule-builder/rule-builder.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [


  {
    path: '',
    redirectTo: 'rulebuilder',
    pathMatch: 'full'
  },
  
  {
    path: 'rulebuilder',
    component: RuleBuilderComponent,
    children: [
      { path: '', component: RuleBuilderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuleBuilderRoutingModule { }
