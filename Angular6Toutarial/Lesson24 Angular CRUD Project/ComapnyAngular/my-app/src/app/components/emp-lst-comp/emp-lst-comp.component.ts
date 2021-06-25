import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../../Services/emp-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-lst-comp',
  templateUrl: './emp-lst-comp.component.html',
  styleUrls: ['./emp-lst-comp.component.css']
})
export class EmpLstCompComponent implements OnInit {

  constructor(private empService:EmpServiceService,private _route:Router) { }
  ngOnInit() {
  debugger;
  this.empService.employees = null;
  this.LoadEmployees();}
  
  LoadEmployees(){
  this.empService.getEmployees().subscribe(
  (employeesLst) => {
  this.empService.employees = employeesLst;
  debugger;},
  (err) => console.log(err));}
  //when the user click to edit button we navigate to employee-entry component
  editButtonClick(employeeId:Number){
    debugger;
    this._route.navigate(['/edit', employeeId]);
  }
  //when the user click to delete button we called Load Employees Service
  deleteButtonClick(employeeId:Number){
  this.empService.deleteEmployee(employeeId)
  .subscribe(() => this.LoadEmployees() ,(err: any) => console.log(err)
  );;}}
  