import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'shc-traffic-back-side',
  templateUrl: './traffic-back-side.component.html',
  styleUrls: ['./traffic-back-side.component.scss']
})
export class TrafficBackSideComponent implements OnDestroy ,OnInit {

  private alive = true;

  @Input() trafficBarData: any;

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
    
  }

  ngOnInit() {
    console.log(this.trafficBarData);
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
