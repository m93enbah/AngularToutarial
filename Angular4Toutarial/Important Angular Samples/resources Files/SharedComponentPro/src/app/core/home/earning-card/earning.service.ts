import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { LiveUpdateChart, PieChart } from 'node_modules/@core/data/earning';


@Injectable({
  providedIn: 'root'
})
export class EarningService {

  private currentDate: Date = new Date();
  private currentValue = Math.random() * 1000;
  private ONE_DAY = 24 * 3600 * 1000;

  private pieChartData = [
    {
      value: 50,
      name: 'TPL',
    },
    {
      value: 25,
      name: 'Comprehensive',
    },
    {
      value: 25,
      name: 'Medical',
    },
  ];

  private liveUpdateChartData = {
    tpl: {
      liveChart: [],
      delta: {
        up: true,
        value: 4,
      },
      dailyIncome: 45895,
    },
    comprehensive: {
      liveChart: [],
      delta: {
        up: false,
        value: 9,
      },
      dailyIncome: 5862,
    },
    Medical: {
      liveChart: [],
      delta: {
        up: false,
        value: 21,
      },
      dailyIncome: 584,
    },
  };

  getDefaultLiveChartData(elementsNumber: number) {
    this.currentDate = new Date();
    this.currentValue = Math.random() * 1000;

    return Array.from(Array(elementsNumber))
      .map(item => this.generateRandomLiveChartData());
  }

  generateRandomLiveChartData() {
    this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
    this.currentValue = this.currentValue + Math.random() * 20 - 11;

    if (this.currentValue < 0) {
      this.currentValue = Math.random() * 100;
    }

    return {
      value: [
        [
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          this.currentDate.getDate(),
        ].join('/'),
        Math.round(this.currentValue),
      ],
    };
  }

  getEarningLiveUpdateCardData(currency): Observable<any[]> {
    const data = this.liveUpdateChartData[currency.toLowerCase()];
    const newValue = this.generateRandomLiveChartData();

    data.liveChart.shift();
    data.liveChart.push(newValue);

    return observableOf(data.liveChart);
  }

  getEarningCardData(currency: string): Observable<LiveUpdateChart> {
    const data = this.liveUpdateChartData[currency.toLowerCase()];

    data.liveChart = this.getDefaultLiveChartData(150);

    return observableOf(data);
  }

  getEarningPieChartData(): Observable<PieChart[]> {
    return observableOf(this.pieChartData);
  }
}
