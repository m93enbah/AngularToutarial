import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmployeeServiceService} from '../../Services/employee-service.service';
import {EmployeeModule} from '../../Services/employee-module';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeServiceService,private toaster:ToastrService) 
  {
  }
  
  private selectedEmployee:EmployeeModule;
  errorMsg:string;

  ngOnInit() {
   this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employeeService.selectedEmployee = {
      EmployeeID: null,
      FirstName: '',
      LastName: '',
      EmpCode: '',
      Position: '',
      Office: ''
    }
  }
  ShowAllPersons()
  {
    this.employeeService.GetPersons().subscribe(Data => {
      this.employeeService.Employees = Data;});
  }
  onSubmit(form: NgForm) {
    debugger;
    if (form.value.EmployeeID == null) {
      this.employeeService.postEmployee(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.ShowAllPersons();
          this.toaster.success('New Record Added Succcessfully', 'Employee Register');
        },error =>
        {
          this.errorMsg = error;
        })
    }
    else {
      debugger;
      this.employeeService.putEmployee(form.value.EmployeeID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.ShowAllPersons();
        this.toaster.info('Record Updated Successfully!');
      },error =>{
        this.errorMsg = error
      });
    }
  }
}
