import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../models/ingredient';
import { ShoppinglistService } from '../../../../services/shoppinglist.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

  ingredients: Ingredient[];
  private igChangeSub : Subscription;

  constructor(private slService: ShoppinglistService) { }


  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
