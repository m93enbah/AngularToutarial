import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Service/Employee';
import {EmployeeService} from '../../Service/employee.service';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';
@Component({
  selector: 'app-employee',
  templateUrl: './employeeList.component.html',
 styleUrls: ['./employee.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService:EmployeeService) {}
  ngOnInit() {
    this.ShowEmployees();
  }
  selectedEmployeeCountRadioButton: string = 'All';
  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    debugger;
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
  GetFullName(Fname:string,Lname:string)
  {
    return Fname+Lname;
  }
  ShowEmployees()
  {
    this.employeeService.GetPersons().subscribe(data => 
       this.employeeService.Employees = data as Employee[]
    ); 
  }
  GetMaleEmployees():number
  {
    return this.employeeService.Employees.filter(e => e.Gender === "Male").length;
  }

  GetFemaleEmployees():number
  {
    return this.employeeService.Employees.filter(e => e.Gender === "Female").length;
  }
  GetAllEmployees():number
  {
    return this.employeeService.Employees.length;
  }
}
