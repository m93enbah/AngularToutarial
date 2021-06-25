import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {EmployeeServiceService} from '../../Services/employee-service.service';
import { EmployeeModule } from '../../Services/employee-module';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ID:any;
  constructor(private empService:EmployeeServiceService,private router:Router,private route:ActivatedRoute) 
  {
    debugger;
    this.route.params.subscribe((params:Params) => {
      this.ID = params.id;
      this.showForEdit(this.ID);
    })
  }
  
  showForEdit(Empid:number) {
    this.empService.GetPerson(Empid).subscribe(data => 
      this.empService.selectedEmployee = data as EmployeeModule
   );
   debugger;
  }

  ngOnInit() {
  }

}
