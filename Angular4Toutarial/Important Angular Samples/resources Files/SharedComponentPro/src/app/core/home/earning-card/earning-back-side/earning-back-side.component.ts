import { Component, OnDestroy } from '@angular/core';
import { PieChart } from 'node_modules/@core/data/earning';
import { EarningService } from '../earning.service';

@Component({
  selector: 'shc-earning-back-side',
  templateUrl: './earning-back-side.component.html',
  styleUrls: ['./earning-back-side.component.scss']
})
export class EarningBackSideComponent implements OnDestroy {
  private alive = true;

  earningPieChartData: PieChart[];
  name: string;
  color: string;
  value: number;
  defaultSelectedCurrency: string = 'TPL';

  constructor(private earningService: EarningService) {
    this.earningService.getEarningPieChartData()
      .subscribe((earningPieChartData) => {
        this.earningPieChartData = earningPieChartData;
      });
  }

  changeChartInfo(pieData: { value: number; name: string; color: any }) {
    this.value = pieData.value;
    this.name = pieData.name;
    this.color = pieData.color;
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
