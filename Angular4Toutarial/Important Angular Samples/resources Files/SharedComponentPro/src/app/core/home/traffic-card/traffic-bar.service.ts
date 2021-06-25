import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { TrafficBar } from 'node_modules/@core/data/traffic-bar';

@Injectable({
  providedIn: 'root'
})
export class TrafficBarService {
  private data = {};
  constructor() {
    this.data = {
      week: this.getDataForWeekPeriod(),
      month: this.getDataForMonthPeriod(),
      year: this.getDataForYearPeriod(),
    };
  }

  getDataForWeekPeriod(): TrafficBar {
    return {
      data: [10, 15, 19, 7, 20, 13, 15],
      labels: this.getWeeks(),
      formatter: '{c0} MB',
    };
  }

  getDataForMonthPeriod(): TrafficBar {
    return {
      data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
      labels: this.getMonths(),
      formatter: '{c0} GB',
    };
  }

  getDataForYearPeriod(): TrafficBar {
    return {
      data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
      labels: this.getYears(),
      formatter: '{c0} GB',
    };
  }

  getTrafficBarData(period: string): Observable<TrafficBar> {
    return observableOf(this.data[period]);
  }

  getYears() {
    return [
      '2010', '2011', '2012',
      '2013', '2014', '2015',
      '2016', '2017', '2018',
    ];
  }

  getMonths() {
    return [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec',
    ];
  }

  getWeeks() {
    return [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
    ];
  }
}
