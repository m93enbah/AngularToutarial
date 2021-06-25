import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers = [1,3,5,7,9];
  evenNumbers = [2,4,6,8,10];
  numbers = [1,2,3,4,5,6,7,8,9,10];

  onlyOdd = false;
  value= 10;
}
