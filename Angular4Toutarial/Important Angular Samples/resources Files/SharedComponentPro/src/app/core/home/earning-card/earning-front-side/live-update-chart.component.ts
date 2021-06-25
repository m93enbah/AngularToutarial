import { AfterViewInit, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import * as echarts from 'echarts';

@Component({
  selector: 'shc-live-update-chart',
  template: `<div echarts
         class="echart"
         [options]="option"
         (chartInit)="onChartInit($event)"></div>`,
  styleUrls: ['./earning-front-side.component.scss']
})
export class LiveUpdateChartComponent implements  AfterViewInit, OnDestroy, OnChanges {
  private alive = true;

  @Input() liveUpdateChartData: { value: [string, number] }[];

  option: any;
  echartsInstance;

  constructor(private theme: NbThemeService) { }

  ngOnChanges(): void {
    if (this.option) {
      this.updateChartOptions(this.liveUpdateChartData);
    }
  }

  ngAfterViewInit() {
    this.theme.getJsTheme()
      .subscribe(config => {
        const earningLineTheme: any = config.variables;

        this.setChartOption(earningLineTheme);
      });
  }

  setChartOption(earningLineTheme) {
    this.option = {
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'time',
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
          show: false,
        },
      },
      yAxis: {
        boundaryGap: [0, '5%'],
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
          show: false,
        },
      },
      tooltip: {
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: earningLineTheme.primaryLight,
          fontWeight: 1.25,
          fontSize: '2rmb',
        },
        position: 'top',
        backgroundColor: earningLineTheme.bg,
        borderColor: earningLineTheme.primary,
        borderWidth: 1,
        formatter: params => `$ ${Math.round(parseInt(params.value[1], 10))}`,
        extraCssText: earningLineTheme.tooltipExtraCss,
      },
      series: [
        {
          type: 'line',
          symbol: 'circle',
          sampling: 'average',
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 0,
            },
          },
          lineStyle: {
            normal: {
              width: 0,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: earningLineTheme.primary,
              }, {
                offset: 1,
                  color: earningLineTheme.primaryLight,
              }]),
              opacity: 1,
            },
          },
          data: this.liveUpdateChartData,
        },
      ],
      animation: true,
    };
  }

  updateChartOptions(chartData: { value: [string, number] }[]) {
    this.echartsInstance.setOption({
      series: [{
        data: chartData,
      }],
    });
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  resizeChart() {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
