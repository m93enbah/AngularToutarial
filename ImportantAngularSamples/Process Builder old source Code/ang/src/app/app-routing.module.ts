import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shape01Component } from './components/shape01/shape01.component';
import { Shape02Component } from './components/shape02/shape02.component';
import { Shape03Component } from './components/shape03/shape03.component';
import { Shape04Component } from './components/shape04/shape04.component';
import { Shape05Component} from './components/shape05/shape05.component';
import { Shape06Component} from './components/shape06/shape06.component';
import { Shape07Component} from './components/shape07/shape07.component';
import { Shape09Component } from './components/shape09/shape09.component';
import { Shape11Component } from './components/shape11/shape11.component';
import { ProcessDefinitionComponent } from './components/processBuilder/process-definition/process-definition.component';
import { ProcessDesignerComponent } from './components/processBuilder/process-designer/process-designer.component';
import { ProcessBuilderComponent } from './components/processBuilder/process-builder/process-builder.component';
const routes: Routes = [
  { path:'',component:ProcessBuilderComponent},

  { path: 'shape01', component: Shape01Component },
  { path: 'shape02', component: Shape02Component },
  { path: 'shape03', component: Shape03Component },
  { path: 'shape04', component: Shape04Component },
  { path: 'shape05', component: Shape05Component },
  { path: 'shape06', component: Shape06Component},
  { path: 'shape07', component: Shape07Component},
  { path: 'shape09', component: Shape09Component},

  { path: 'shape11', component: Shape11Component},

  { path:'processBuilder',component:ProcessBuilderComponent},
  { path:'processDefinition',component:ProcessDefinitionComponent},
  { path:'processDesigner/:id',component:ProcessDesignerComponent},

  { path: '', redirectTo: '/processBuilder', pathMatch: 'full' }	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
