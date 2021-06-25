import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes:Routes = [
  //it will say redirect to the /recipes if the full path is empty after the base url
   {path:'',redirectTo:'/auth',pathMatch:'full'},
   //for apply lazy loading with advance load children 
   {path:'recipes',loadChildren:() => import('./recipes/recipes.module').then(m => m.RecipesModule)},
   {path:'shopping-list',loadChildren:() => import('./shopping/shopping.module').then(m => m.ShoppingModule)},
   {path:'auth',loadChildren:() => import('./core/core.module').then(m => m.CoreModule)}

  // {path:'recipes',loadChildren:('./recipes/recipes.module.ts')},
  // {path:'shopping-list',loadChildren:('./shopping/shopping.module.ts')},
  // {path:'auth',loadChildren:('./modules/core/core.module.ts')},
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}