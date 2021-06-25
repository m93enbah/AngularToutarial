import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  SelectedColor:string;
  constructor() 
  {
    this.SelectedColor = 'Orange';
  }
}
