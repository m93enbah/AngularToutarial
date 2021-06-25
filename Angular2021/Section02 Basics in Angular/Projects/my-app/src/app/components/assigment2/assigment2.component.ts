import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html',
  styleUrls: ['./assigment2.component.css']
})
export class Assigment2Component implements OnInit {

  showScret:boolean = false;
  logs = [];
  
  constructor() { }

  count:number = 0;

  ngOnInit(): void {
  }

  showDetails(){
    this.logs.push(new Date());
  }

}
