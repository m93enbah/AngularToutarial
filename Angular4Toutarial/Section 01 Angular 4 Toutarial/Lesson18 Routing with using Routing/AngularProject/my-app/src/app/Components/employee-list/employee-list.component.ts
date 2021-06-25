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


  
  constructor(private empService:EmployeeServiceService,private toaster:ToastrService) 
  {
    this.ShowAllPersons();
  }

  ngOnInit() {}


  ShowAllPersons()
  {
    this.empService.GetPersons().subscribe(data => 
       this.empService.Employees = data as EmployeeModule[]
    );
  }

  showForEdit(Empid:number) {
    this.empService.GetPerson(Empid).subscribe(data => 
      this.empService.selectedEmployee = data as EmployeeModule
   );
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.empService.DeletePerson(id)
        .subscribe(x => {
          this.empService.GetPersons().subscribe(data => 
            this.empService.Employees = data as EmployeeModule[]
         );
          this.toaster.warning("Deleted Successfully", "Employee Register");
        })
    }
  }
}
