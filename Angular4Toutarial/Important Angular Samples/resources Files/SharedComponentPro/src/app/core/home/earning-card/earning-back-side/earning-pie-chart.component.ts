import { AfterViewInit, Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'shc-earning-pie-chart',
  template: `<div echarts
         class="echart"
         [options]="options"
          style="height: 200px" >
    </div>`,
  styleUrls: ['./earning-back-side.component.scss']

})
export class EarningPieChartComponent implements AfterViewInit{

  
  themeSubscription: any;

  options: any = {};
  echartsInstance;

  constructor(private theme: NbThemeService) {
  }

  

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },

        series: [
          {
            name: 'Earning',
            type: 'pie',
            radius: '65%',
            center: ['50%', '40%'],
            data: [
              { value: 335, name: 'TPL' },
              { value: 310, name: 'Comprehensive' },
              { value: 1548, name: 'Medical' },

            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.fgText,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });


  }

}
