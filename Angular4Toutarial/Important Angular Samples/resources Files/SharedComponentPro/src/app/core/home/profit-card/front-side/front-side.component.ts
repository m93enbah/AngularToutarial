import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
//import { ProfitBarAnimationChartService } from 'node_modules/@core/mock/profit-bar-animation-chart.service';

@Component({
  selector: 'shc-front-side',
  templateUrl: './front-side.component.html',
  styleUrls: ['./front-side.component.scss']
})
export class FrontSideComponent implements OnInit {
  private alive = true;

  linesData: { firstLine: number[]; secondLine: number[] } = {
    firstLine: [],
    secondLine: [],
  };

  constructor() {

  }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.linesData.firstLine.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.linesData.secondLine.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
  }

}
