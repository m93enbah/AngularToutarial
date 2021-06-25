import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'shc-bar-animation-chart',
  template: `<div echarts [options]="options" class="echart"></div>`,
  styleUrls: ['./front-side.component.scss']
})
export class BarAnimationChartComponent implements AfterViewInit, OnDestroy {

  private alive = true;

  @Input() linesData: { firstLine: number[]; secondLine: number[] } = {
    firstLine: [],
    secondLine: [],
  };

  echartsIntance: any;
  options: any = {};

  constructor(private theme: NbThemeService) {
    
  }

  ngAfterViewInit() {
    this.theme.getJsTheme()
      .subscribe(config => {
        const profitBarAnimationEchart: any = config.variables;

        this.setChartOption(profitBarAnimationEchart);
      });
  }

  setChartOption(chartVariables) {
    this.options = {
      color: [
        chartVariables.primaryLight, chartVariables.infoLight
      ],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      legend: {
        data: ['Premuim', 'Claims'],
        borderWidth: 0,
        borderRadius: 0,
        itemWidth: 15,
        itemHeight: 15,
        textStyle: {
          color: chartVariables.fgText,
        },
      },
      tooltip: {
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: chartVariables.tooltipTextColor,
          fontWeight: chartVariables.tooltipFontWeight,
          fontSize: chartVariables.tooltipFontSize,
        },
        position: 'top',
        backgroundColor: chartVariables.bg,
        borderColor: chartVariables.successLight,
        borderWidth: 1,
        formatter: params => `$ ${Math.round(parseInt(params.value, 10))}`,
        //extraCssText: chartVariables.tooltipExtraCss,
      },
      xAxis: [
        {
          data: this.linesData.firstLine.map((_, index) => index),
          silent: false,
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: chartVariables.dangerLight,
              opacity: 0.1,
              width: 1,
            },
          },
        },
      ],
      series: [
        {
          name: 'Premuim',
          type: 'bar',
          data: this.linesData.firstLine,
          animationDelay: idx => idx * 10,
        },
        {
          name: 'Claims',
          type: 'bar',
          data: this.linesData.secondLine,
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
