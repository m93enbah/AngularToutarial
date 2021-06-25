import { Component, Input } from '@angular/core';

@Component({
  selector: 'shc-traffic-bar',
  templateUrl: './traffic-bar.component.html',
  styleUrls: ['./traffic-bar.component.scss']
})
export class TrafficBarComponent {
  @Input() barData: { prevDate: string; prevValue: number; nextDate: string; nextValue: number };
  @Input() successDelta: boolean;
  constructor() { }
  
}
