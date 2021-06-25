import { Component, Input, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { interval, Subscription } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { LiveUpdateChart } from 'node_modules/@core/data/earning';
import { EarningService } from '../earning.service';

@Component({
  selector: 'shc-earning-front-side',
  templateUrl: './earning-front-side.component.html',
  styleUrls: ['./earning-front-side.component.scss']
})
export class EarningFrontSideComponent implements OnInit {
  private alive = true;

  @Input() selectedCurrency: string = 'TPL';

  intervalSubscription: Subscription;
  currencies: string[] = ['TPL', 'Comprehensive', 'Medical'];
  currentTheme: string;
  earningLiveUpdateCardData: LiveUpdateChart;
  liveUpdateChartData: { value: [string, number] }[];

  constructor(private themeService: NbThemeService,
    private earningService: EarningService) {
    this.themeService.getJsTheme()      
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.getEarningCardData(this.selectedCurrency);
  }

  changeCurrency(currency) {
    if (this.selectedCurrency !== currency) {
      this.selectedCurrency = currency;

      this.getEarningCardData(this.selectedCurrency);
    }
  }

  private getEarningCardData(currency) {
    this.earningService.getEarningCardData(currency)     
      .subscribe((earningLiveUpdateCardData: LiveUpdateChart) => {
        this.earningLiveUpdateCardData = earningLiveUpdateCardData;
        this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;

        this.startReceivingLiveData(currency);
      });
  }

  startReceivingLiveData(currency) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(200)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.earningService.getEarningLiveUpdateCardData(currency)),
      )
      .subscribe((liveUpdateChartData: any[]) => {
        this.liveUpdateChartData = [...liveUpdateChartData];
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
