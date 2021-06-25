import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmployeeServiceService} from '../../Services/employee-service.service';
import {EmployeeModule} from '../../Services/employee-module';
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
  onSubmit(form: NgForm) {
    debugger;
    if (form.value.EmployeeID == null) {
      this.employeeService.postEmployee(form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.employeeService.GetPersons().subscribe(data => 
          this.employeeService.Employees = data as EmployeeModule[]
       );
        this.toaster.success('New Record Added Succcessfully', 'Employee Register');
      })
    }
    else {
      this.employeeService.putEmployee(form.value.EmployeeID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.employeeService.GetPersons().subscribe(data => 
          this.employeeService.Employees = data as EmployeeModule[]
       );
        this.toaster.info('Record Updated Successfully!', 'Employee Register');
      });
    }
  }
}
