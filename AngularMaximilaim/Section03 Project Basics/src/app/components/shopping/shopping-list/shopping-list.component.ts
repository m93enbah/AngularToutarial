import { Component, OnInit } from '@angular/core';
import { Ingradient } from '../../models/models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingradient: Ingradient[] = 
  [
    new Ingradient('Apples',5),
    new Ingradient('Orange',15)
  ];

  constructor() { }

  ngOnInit() {
  }

}
