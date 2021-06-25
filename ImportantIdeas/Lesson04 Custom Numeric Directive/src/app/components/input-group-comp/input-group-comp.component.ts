import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-group-comp',
  templateUrl: './input-group-comp.component.html',
  styleUrls: ['./input-group-comp.component.css']
})
export class InputGroupCompComponent implements OnInit {

  empForm:FormGroup;
  calenderDateFormat: 'mm/dd/yyyy';
  txtsize:number = 32;

  @Input() tsize: string; 


  constructor(private fb:FormBuilder) { }	

  ngOnInit() {
    this.empForm = this.fb.group({
      minSalary:[''],
      Salary:[''],
      signedLine:[''],
      maxSalary : ['']
        });
              
  }
}
