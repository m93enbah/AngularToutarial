import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-lst-comp',
  templateUrl: './employee-lst-comp.component.html',
  styleUrls: ['./employee-lst-comp.component.css']
})
export class EmployeeLstCompComponent implements OnInit {

  constructor(private empService:EmployeeServiceService,private _route:Router) { }

  ngOnInit() {
    debugger;
    this.empService.employees = null;
    this.LoadEmployees();
  }

  LoadEmployees()
  {
    this.empService.getEmployees().subscribe(
      (employeesLst) => {
        this.empService.employees = employeesLst;
        debugger;
      },
      (err) => console.log(err)
    );
  }


  editButtonClick(employeeId:Number)
  {
    debugger;
    this._route.navigate(['/edit', employeeId]);
  }


  deleteButtonClick(employeeId:Number)
  {
    debugger;
    this.empService.deleteEmployee(employeeId)
      .subscribe(
        () => this.LoadEmployees() ,
        (err: any) => console.log(err)
      );

   ;
   
  }


}
