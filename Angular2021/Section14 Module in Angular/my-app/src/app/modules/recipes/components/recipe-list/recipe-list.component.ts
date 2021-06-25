import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit , OnDestroy {
  recipes: Recipe[] = [];
  recipeSub:Subscription;
  
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
   this.recipeSub = this.recipeService.recipesChanged.subscribe((result: Recipe[]) => {
      this.recipes = result;
    });

    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }
}
