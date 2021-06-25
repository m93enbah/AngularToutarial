import { Component, OnInit } from '@angular/core';

import {EmployeeServiceService} from '../../Services/employee-service.service';
import {EmployeeModule} from '../../Services/employee-module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  errorMsg:string;

  constructor(private empService:EmployeeServiceService,private toaster:ToastrService) 
  {
    debugger;
    this.ShowAllPersons();
  }
  ngOnInit() {}
  ShowAllPersons()
  {
    debugger;
    this.empService.GetPersons().subscribe(
      Data => this.empService.Employees = Data,error => this.errorMsg = error
    );
    debugger;
    this.toaster.success('Record Updated Successfully!', 'Employee Register');
  }
  showForEdit(Empid:number) {
    this.empService.GetPerson(Empid).subscribe(
      Data => this.empService.selectedEmployee = Data,error => this.errorMsg = error);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.empService.DeletePerson(id)
      .subscribe(x => {
        this.ShowAllPersons();
        this.toaster.warning("Deleted Successfully","Employee Register");
      },error =>{
        this.errorMsg = error
      })
    }
  }
}
