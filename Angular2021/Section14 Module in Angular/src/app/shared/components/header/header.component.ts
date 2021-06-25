import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Recipe } from 'src/app/recipes/models/recipe';
import { DataStorageService } from 'src/app/recipes/services/data-storage.service';
import { RecipeService } from 'src/app/recipes/services/recipe.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  //for handle colapse and expand the menu bar
  collapsed: boolean = true;
  sub: Subscription;
  isAuthenticated: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    //used to show / hide login , authenticated menu ,etc..
    this.sub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user); //show user is null
      console.log(!!user); //show use is not null
    });
  }

  onSaveData() {
    this.sub = this.dataStorageService.storeRecieps().subscribe((res) => {
      console.log(res);
    });
  }

  onGetData() {
    this.sub = this.dataStorageService
      .fetchRecipes()
      .subscribe((res: Recipe[]) => {
        this.recipeService.setRecipes(res);
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
