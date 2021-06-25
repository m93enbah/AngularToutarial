import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
   new Recipe('A Test','A simply test','../../../../assets/images/img1.jpg'),
   new Recipe('B Test','B simply test','../../../../assets/images/img1.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
