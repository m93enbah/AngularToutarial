import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'shc-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit, AfterViewInit {
  selected: boolean[] = [true, false, false];
  content: number = 0;
  constructor() { }

  ngOnInit() {
   
  }

  ngAfterViewInit() {
    //this.selected = [];
  }
  updateView(content: number) {
    if (content == 0) {
      this.content = 0;
      this.selected[0] = true;
      this.selected[1] = false;
      this.selected[2] = false;
    }
    else if (content == 1) {
      this.content = 1;
      this.selected[0] = false;
      this.selected[1] = true;
      this.selected[2] = false;
    }
    else if (content == 2) {
      this.content = 2;
      this.selected[0] = false;
      this.selected[1] = false;
      this.selected[2] = true;
    }
  }
}
