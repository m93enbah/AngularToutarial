import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipesComponent } from './components/recipes/recipes.component';

import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping/shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    RecipesComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,

    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
