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
    this.empService.GetPersons();
    this.toaster.success('Record Updated Successfully!', 'Employee Register');
  }

  showForEdit(Empid:number) {
    this.empService.GetPerson(Empid);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.empService.DeletePerson(id);
      this.empService.Page_Load();
    } 
   }
}
