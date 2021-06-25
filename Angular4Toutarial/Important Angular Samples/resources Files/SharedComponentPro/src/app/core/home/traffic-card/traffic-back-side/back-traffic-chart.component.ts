import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import * as echarts from 'echarts';
import { TrafficBarService } from '../traffic-bar.service';

@Component({
  selector: 'shc-back-traffic-chart',
  template: `<div echarts
         [options]="options"
         class="echart"
        style="height: 340px"
         (chartInit)="onChartInit($event)">
    </div>`,
  //styleUrls: ['./traffic-back-side.component.css']

})
export class BackTrafficChartComponent implements AfterViewInit, OnDestroy, OnChanges, OnInit {
  //@Input() data: number[];
  //@Input() labels: string[];
  //@Input() formatter: string;

  themeSubscription: any;
  trafficBarData: any;

  private alive = true;

  options: any = {};
  echartsInstance: any;
  //themeSubscription: any;


  constructor(private theme: NbThemeService) {

  }

  ngOnInit() {
    //console.log(' from back chart');
    //console.log(this.data);
    //console.log(this.labels);
    //console.log(this.formatter);

  }
  //onChartInit(ec) {
  //  this.echartsInstance = ec;
  //  console.log(this.echartsInstance);
  //}

  //resizeChart() {
  //  if (this.echartsInstance) {
  //    this.echartsInstance.resize();
  //  }
  //}




  ngOnChanges(changes: SimpleChanges): void {
    //console.log('from ngOnChanges');
    //console.log(this.data);
    //console.log(this.labels);
    //console.log(this.formatter);
    //if (!changes.data.isFirstChange() && !changes.labels.isFirstChange()) {
    //  this.echartsInstance.setOption({
    //    series: [{
    //      data: this.data,
    //    }],
    //    xAxis: {
    //      data: this.labels,
    //    },
    //    tooltip: {
    //      formatter: this.formatter,
    //    },

    //  });
    //  console.log('from ngOnChanges');
    //  console.log(this.data);
    //  console.log(this.labels);
    //  console.log(this.formatter);
    //}
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: echarts.fgText,
              },
            },
          },
        ],
        yAxis: {
          show: false,
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          boundaryGap: [0, '5%'],
        },
        series: [
          {
            name: 'Traffic',
            type: 'bar',
            barWidth: '40%',
            data: [100, 100, 200, 334, 390, 330, 220],
          },
        ],
      };
    });
  }

  chartInitialization() {

  }

  ngOnDestroy() {
    this.alive = false;
  }

}
