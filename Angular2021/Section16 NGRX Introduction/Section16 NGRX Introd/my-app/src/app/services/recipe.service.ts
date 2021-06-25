import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../modules/recipes/models/recipe';
import { Ingredient } from '../modules/shopping/models/ingredient';
import { ShoppinglistService } from './shoppinglist.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  //used for notify the recipes list change
  recipesChanged = new Subject<Recipe[]>();

  constructor(public shoppingListService: ShoppinglistService) {}

  private recipes: Recipe[] = [];
  
  // [
  //   new Recipe(
  //     'A Tasty Schitzel - Just awesome!',
  //     'A super-tasty Schnitzel',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else you need to stay?',
  //     'https://img.pikbest.com/common/back-vertical.jpg!/crop/1024x1500a0a0/watermark/margin/135x212/url/L2JhY2tfb3JpZ2luX3BpYy8xOS8wMy8zMS82YWYzMDY5MzFlY2ZkNzRmN2NhMmE1NjNjYWU2YzBmMi5qcGchL2JvdGgvNzU0eDExMzAvdW5zaGFycC90cnVlL3F1YWxpdHkvODA=/watermark/align/center/url/L2NvbW1vbi9sb2dvLnBuZyEvc2NhbGUvMjAwL2ZvcmNlL3RydWU=',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
  //   ),
  // ];

  setRecipes(recip:Recipe[]){
    this.recipes = recip;
    this.recipesChanged.next(this.recipes);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
