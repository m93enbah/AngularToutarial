import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { TrafficList } from 'node_modules/@core/data/traffic-list';


@Component({
  selector: 'shc-traffic-front-side',
  templateUrl: './traffic-front-side.component.html',
  styleUrls: ['./traffic-front-side.component.scss']
})
export class TrafficFrontSideComponent implements OnDestroy {

  private alive = true;

  @Input() frontCardData: TrafficList;

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  trackByDate(_, item) {
    return item.date;
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
