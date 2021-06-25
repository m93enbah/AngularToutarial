import { Component, OnInit } from '@angular/core';
import {TestServiceService} from '../../Service/test-service.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers:[TestServiceService]
})
export class HomeComponent implements OnInit {


  constructor(private _testServie:TestServiceService) 
  {}

  ngOnInit() {
  }

  get colour(): string {
    return this._testServie.SelectedColor;
}
// Implement a setter to change the colourPreference value
// of the service
set colour(value: string) {
  this._testServie.SelectedColor = value;
}

}
