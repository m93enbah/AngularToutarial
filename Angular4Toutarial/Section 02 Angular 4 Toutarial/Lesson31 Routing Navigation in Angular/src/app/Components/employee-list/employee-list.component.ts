import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../Service/employee.service';
import {Employee} from '../../Service/Employee';
import {TestServiceService} from '../../Service/test-service.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  MessageStatus:string;

  constructor(public employeeService:EmployeeService) 
  {
    this.MessageStatus = "Loading Employees .... Please Wait";
  }
  ngOnInit() {
    debugger;
    this.ShowEmployees();
  }
  selectedEmployeeCountRadioButton: string = 'All';
  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    debugger;
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
  GetFullName(Fname:string,Lname:string):string
  {
    return Fname+" "+Lname;
  }
  ShowEmployees()
  {
    debugger;
    this.employeeService.GetPersons().subscribe(data => 
       this.employeeService.Employees = data as Employee[],
       error => {
        this.MessageStatus =
            'Problem with the service. Please try again after sometime';
        // Notice here we are logging the error to the browser console
        console.error(error);
    }); 
  }
  private _testServie:TestServiceService;
  get colour(): string {
    return this._testServie.SelectedColor;
  }
// Implement a setter to change the colourPreference value
// of the service
set colour(value: string) {
  this._testServie.SelectedColor = value;
}


  // GetMaleEmployees():number
  // {
  //   return this.employeeService.Employees.filter(e => e.Gender == "Male").length;
  // }

  // GetFemaleEmployees():number
  // {
  //   return this.employeeService.Employees.filter(e => e.Gender == "Female").length;
  // }
  // GetAllEmployees():number
  // {
  //   return this.employeeService.Employees.length;
  // }

}













