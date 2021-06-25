import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shc-earning-card',
  templateUrl: './earning-card.component.html',
  styleUrls: ['./earning-card.component.scss']
})
export class EarningCardComponent implements OnInit {
  flipped = false;

  toggleFlipView() {
    this.flipped = !this.flipped;
  }

  constructor() { }

  ngOnInit() {
  }

}
