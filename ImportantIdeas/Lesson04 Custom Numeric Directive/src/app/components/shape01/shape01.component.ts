import { Component, OnInit } from '@angular/core';
import { Employee} from '../../Model/employee';

@Component({
  selector: 'app-shape01',
  templateUrl: './shape01.component.html',
  styleUrls: ['./shape01.component.css']
})
export class Shape01Component implements OnInit {

  // num1: number = 12.638467846;
  // num2: number = 0.5;


  num1: number = 2.5;
  num2: number = 0.5;

  cur1: number = 0.25;
  cur2: number = 10.263782;
  constructor() { }

  emp:Employee = new Employee();

  ngOnInit() {
  }

}
