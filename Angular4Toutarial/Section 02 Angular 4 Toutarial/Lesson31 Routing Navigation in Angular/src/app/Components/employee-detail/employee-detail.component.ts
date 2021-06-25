import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../../Service/Employee';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  statusMessage: string;

  ID: any;
  constructor(private empService:EmployeeService,private router:Router,private route:ActivatedRoute){
    debugger;
    this.route.params.subscribe((params:Params) => {
    this.ID = params.id;
    this.showForEdit(this.ID);
    })} 
  ngOnInit() {
  }
  showForEdit(Empid: number) {
    debugger;
    this.empService.GetPerson(Empid).subscribe(data =>
      this.empService.selectedEmployee = data as Employee
    ,error => this.statusMessage = error);
  }

  BackToEmployee()
  {
    this.router.navigate(['/employees']);
  }

}
