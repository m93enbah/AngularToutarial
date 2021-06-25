import { Component, Inject, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../../models/ingredient';
import { ShoppinglistService } from '../../../../services/shoppinglist.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../reducers';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // private igChangeSub: Subscription;
  // ingredients:  Ingredient[];
  ingredients: Observable<Ingredient[]>;

  constructor(
    private slService: ShoppinglistService,
    @Inject private store:Store<AppState>

    // private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>

    //the type of the Store is the same of the globally injected with the property value is Ingredient[]
    // private store: Store<reducers>
  ) {}

  ngOnInit() {
   this.ingredients = this.store.select(state => state.shoppingList.ingredients);

    // this.ingredients = this.slService.getIngredients();
    // this.igChangeSub = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    // this.igChangeSub.unsubscribe();
  }
}
