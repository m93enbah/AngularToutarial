import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shc-profit-card',
  templateUrl: './profit-card.component.html',
  styleUrls: ['./profit-card.component.scss']
})
export class ProfitCardComponent implements OnInit {
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }

  constructor() { }

  ngOnInit() {
  }

}
