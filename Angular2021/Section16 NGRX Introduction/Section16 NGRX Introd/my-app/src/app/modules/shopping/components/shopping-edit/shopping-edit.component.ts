import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../models/ingredient';
import { ShoppinglistService } from '../../../../services/shoppinglist.service';
import { Store } from '@ngrx/store';
import { ShoppingListActions ,AddIngredient} from '../../store/shopping-list.actions';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {

  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode:boolean = false;
  editedItemIndex:number;
  editiedItem:Ingredient;

  constructor(private slService: ShoppinglistService) { }
  

  ngOnInit(): void {
    this.subscription =this.slService.startedEditing.subscribe((index:number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editiedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name:this.editiedItem.name,
        amount:this.editiedItem.amount
      });
    })
  }

  onSubmitItem(form:NgForm){
    const value = form.value;
    var newIngred = new Ingredient(value.name,parseInt(value.amount));
    if(this.editMode)
    {
      this.slService.updateIngredient(this.editedItemIndex,newIngred);
    }
    else{
      // this.slService.addIngredient(newIngred);

      //used to call action as parameter inside the reducer to call it
      // this.store.dispatch(new AddIngredient(newIngred)); 
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
