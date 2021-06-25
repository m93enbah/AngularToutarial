import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute,private userService:UserService) {
  }

  ngOnInit() {
    //the params called observers which is stream of data that listen to any data / event coming into
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }


  onActivate(){
    this.userService.activatedEmitter.next(true);
  }
}

