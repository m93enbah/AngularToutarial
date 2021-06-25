import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { CoreModule } from "./modules/auth/core.module";
import { RecipesModule } from "./modules/recipes/recipes.module";
import { ShoppingModule } from "./modules/shopping/shopping.module";

const appRoutes:Routes = [
  //it will say redirect to the /recipes if the full path is empty after the base url
   {path:'',redirectTo:'/auth',pathMatch:'full'},
   //for apply lazy loading with advance load children 

   {path:'recipes',loadChildren:() => RecipesModule},
   {path:'shopping-list',loadChildren:() => ShoppingModule},
   {path:'auth',loadChildren:() => CoreModule}

  //  {path:'recipes',loadChildren:() => import('./modules/recipes/recipes.module').then(m => m.RecipesModule)},
  //  {path:'shopping-list',loadChildren:() => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule)},
  //  {path:'auth',loadChildren:() => import('./modules/auth/core.module').then(m => m.CoreModule)}

  //  {path:'recipes',loadChildren:('./recipes/recipes.module.ts')},
  //  {path:'shopping-list',loadChildren:('./shopping/shopping.module.ts')},
  //  {path:'auth',loadChildren:('./modules/core/core.module.ts')},
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
  exports:[RouterModule]
})

export class AppRoutingModule{}