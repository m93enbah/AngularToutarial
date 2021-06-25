import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment01',
  templateUrl: './assigment01.component.html',
  styleUrls: ['./assigment01.component.css']
})
export class Assigment01Component implements OnInit {

  userName:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  resetUserName()
  {
    this.userName = "";
  }
}