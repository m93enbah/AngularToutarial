import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { DataStorageService } from 'src/app/services/data-storage.service';


@Injectable({
  providedIn: 'root',
})
export class RecipeResolver implements Resolve<Recipe[]> {
  constructor(
    private dataStorageServcie: DataStorageService,
    private recipeService: RecipeService
  ) {}
  //we using resolvers in order to get recieps and call recipesChanged Subject to reflect to recieps page
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length == 0) {
      return this.dataStorageServcie.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
