import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'shc-area-chart',
  template: `<div echarts [options]="options" class="echart"></div>`,
  styleUrls: ['./back-side.component.scss']
})
export class AreaChartComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  private statsBarData: number[] = [
    300, 520, 435, 530,
    730, 620, 660, 860,
  ];

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: echarts.tooltipBackgroundColor,
            },
          },
          textStyle: {
            color: echarts.tooltipTextColor,
            fontWeight: echarts.tooltipFontWeight,
            fontSize: 16,
          },
        },



        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.statsBarData,
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
            show: true,
            lineStyle: {
              color: '#000000',
              opacity: 0.06,
              width: '1',
            },
          },
        },

        series: [
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            sampling: 'average',
            silent: true,
            itemStyle: {
              normal: {
                color: colors.shadowLineDarkBg,
              },
              emphasis: {
                color: 'rgba(0,0,0,0)',
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: colors.shadowLineDarkBg,
              },
            },
            data: this.statsBarData.map(p => p - 15),
          },
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: colors.itemColor,
                borderColor: colors.itemBorderColor,
                borderWidth: 2,
              },
              emphasis: {
                color: 'white',
                borderColor: colors.itemEmphasisBorderColor,
                borderWidth: 2,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: colors.bg,
                shadowColor: colors.bg,
                shadowBlur: colors.lineShadowBlur,
              },
            },
            areaStyle: {
              areaStyle: { normal: { opacity: 0.1 } },
              data: this.statsBarData,
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
