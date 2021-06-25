import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../../Services/employee-service.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeServiceService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService : EmployeeServiceService) { }

  ngOnInit() {
  }

}
