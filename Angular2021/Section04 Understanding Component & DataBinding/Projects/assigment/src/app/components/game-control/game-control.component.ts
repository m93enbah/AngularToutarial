import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output('eventCount') evnt:EventEmitter<number> = new EventEmitter();
  count:number = 0;
  interval:any = null;
  constructor() { }

  ngOnInit(): void {

  }

  startGame(){
    this.interval = setInterval(() => {
      this.count++;
      this.evnt.emit(this.count);
    },1000)
  }

  stopGame(){
    clearInterval(this.interval);
  }
}
