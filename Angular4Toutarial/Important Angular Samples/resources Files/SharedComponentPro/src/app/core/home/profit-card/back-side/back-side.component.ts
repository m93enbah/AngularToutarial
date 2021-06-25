import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'shc-back-side',
  templateUrl: './back-side.component.html',
  styleUrls: ['./back-side.component.scss']
})
export class BackSideComponent implements OnDestroy {
  private statsBarData: number[] = [
    300, 520, 435, 530,
    730, 620, 660, 860,
  ];

  chartData: number[];

  constructor() {

    this.chartData = this.statsBarData;

  }

  ngOnDestroy() {
    
  }

}
