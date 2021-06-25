import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { RecipeDetailsComponent } from "./components/recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./components/recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./components/recipes/recipe-start/recipe-start.component";

import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { AuthGuard } from "./guards/auth-guard";
import { RecipeResolver } from "./resolvers/recipe.resolver";

const appRoutes:Routes = [
  //it will say redirect to the /recipes if the full path is empty after the base url
   {path:'',redirectTo:'/auth',pathMatch:'full'},
   //we use AuthGuard to check if SubjectBehaviour is null or not
   //we use resolvers in order to call recipeService to fill recipes to reflect to the recipe page
   {path:'recipes',component:RecipesComponent,canActivate:[AuthGuard],children:[
     {path:'',component:RecipeStartComponent},
     //you have to set all routing without parameters before the routing with parameter
     {path:'new',component:RecipeEditComponent},
     {path:':id',component:RecipeDetailsComponent,resolve:[RecipeResolver]},
     {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolver]}
   ]},
   {path:'shopping-list',component:ShoppingListComponent},
   {path:'auth',component:AuthComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}