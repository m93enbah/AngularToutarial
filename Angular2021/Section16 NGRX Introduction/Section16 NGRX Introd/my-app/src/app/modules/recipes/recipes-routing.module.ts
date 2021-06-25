import { NgModule } from '@angular/core';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './components/recipes.component';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';


const appRoutes:Routes = [
   {path:'',component:RecipesComponent,canActivate:[AuthGuard],children:[
     {path:'',component:RecipeStartComponent},
     //you have to set all routing without parameters before the routing with parameter
     {path:'new',component:RecipeEditComponent},
     {path:':id',component:RecipeDetailsComponent,resolve:[RecipeResolver]},
     {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolver]}
   ]}
];


@NgModule({
  imports:[RouterModule.forChild(appRoutes)],
  exports:[RouterModule]
})
export class RecipesRoutingModule { }
