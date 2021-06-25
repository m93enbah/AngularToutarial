import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrafficList } from 'node_modules/@core/data/traffic-list';
import {  TrafficBar } from 'node_modules/@core/data/traffic-bar';
import { TrafficBarService } from './traffic-bar.service';
import { TrafficListService } from './traffic-list.service';

@Component({
  selector: 'shc-traffic-card',
  templateUrl: './traffic-card.component.html',
  styleUrls: ['./traffic-card.component.scss']
})
export class TrafficCardComponent implements OnDestroy, OnInit {


  trafficBarData: TrafficBar;
  trafficListData: TrafficList;
  revealed = false;
  period: string = 'week';

  constructor(private trafficListService: TrafficListService,
    private trafficBarService: TrafficBarService) {
    
  }

  ngOnInit() {
    this.getTrafficBackCardData(this.period);
    this.getTrafficFrontCardData(this.period);
    console.log(this.trafficBarData + ' from home');
    console.log(this.trafficListData + ' from home');
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;

    this.getTrafficFrontCardData(value);
    this.getTrafficBackCardData(value);
  }

  getTrafficBackCardData(period: string) {
    this.trafficBarService.getTrafficBarData(period)
      .subscribe(trafficBarData => {
        this.trafficBarData = trafficBarData;
      });
  }

  getTrafficFrontCardData(period: string) {
    this.trafficListService.getTrafficListData(period)
      .subscribe(trafficListData => {
        this.trafficListData = trafficListData;
      });
  }

  ngOnDestroy() {
    
  }

}
