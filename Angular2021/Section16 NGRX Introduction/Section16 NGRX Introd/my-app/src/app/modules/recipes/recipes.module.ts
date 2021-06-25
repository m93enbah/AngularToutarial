import { NgModule } from '@angular/core';

import { RecipesComponent } from './components/recipes.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent,
  ],
  providers: [],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent,
  ],
  imports: [
    RecipesRoutingModule,
    SharedModule
  ],
})
export class RecipesModule {}
