import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'css-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('on init');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

}
