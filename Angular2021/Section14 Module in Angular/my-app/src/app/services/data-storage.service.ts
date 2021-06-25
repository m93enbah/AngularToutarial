import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../modules/recipes/models/recipe';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecieps(): Observable<Recipe[]> {
    const recipes = this.recipeService.getRecipes();
    return this.http.put<Recipe[]>(
      'https://enbehpro-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes
    );
  }

  //we put all the configuration of set token on the interceptor and we return to normal calling get request as below
  fetchRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(
        'https://enbehpro-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  // fetchRecipes(): Observable<Recipe[]> {
  //   return this.authService.user.pipe(
  //     take(1),
  //     exhaustMap((usr) => {
  //       return this.http.get<Recipe[]>(
  //         'https://enbehpro-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
  //         {
  //           params:new HttpParams().set('auth',usr.token)
  //         }
  //       );
  //     }),
  //     map((recipes) => {
  //       return recipes.map((recipe) => {
  //         return {
  //           ...recipe,
  //           ingredients: recipe.ingredients ?  recipe.ingredients : [],
  //         };
  //       });
  //     }),
  //     tap((recipes) => {
  //       this.recipeService.setRecipes(recipes);
  //     })
  //   );
  // }
}
