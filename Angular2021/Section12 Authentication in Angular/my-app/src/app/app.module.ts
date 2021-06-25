import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoppinglistService } from './services/shoppinglist.service';
import { RecipeService } from './services/recipe.service';
import { DataStorageService } from './services/data-storage.service';
import { AuthComponent } from './components/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ShoppinglistService,
    RecipeService,
    DataStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor,multi:true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
