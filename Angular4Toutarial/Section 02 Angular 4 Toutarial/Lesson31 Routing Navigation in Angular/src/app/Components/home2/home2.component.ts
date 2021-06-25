import { Component, OnInit } from '@angular/core';
import {TestServiceService} from '../../Service/test-service.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
  //providers:[TestServiceService]
})
export class Home2Component implements OnInit {
  //private _testServie:TestServiceService;
  constructor(private _testServie:TestServiceService) 
  {
   // this._testServie = new TestServiceService();
   }

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
