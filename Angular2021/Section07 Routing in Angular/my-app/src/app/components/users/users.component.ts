import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  
  users: UserModel[];

  constructor(private router:Router,private userService:UsersService,private route:ActivatedRoute)
  {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  sendUser(userId:number)
  {
    this.router.navigate(['users',userId],{relativeTo:this.route});
    // this.route.navigate(['user/',userId]);
  }
}
