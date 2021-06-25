import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {

  constructor() { }

  @Input() oddNo:number = 0;

  ngOnInit(): void {
  }

}
