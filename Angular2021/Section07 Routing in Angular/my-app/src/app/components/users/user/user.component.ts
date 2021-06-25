import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit,OnDestroy {

  user: UserModel;
  userId: number;
  paramsSub:Subscription;

  //with AcitvatedRoute injected we can acccess to parameters passed
  constructor(
    private route: ActivatedRoute,
    private userSerivce: UsersService) {
    //when ever recieved new value update the userId and then refelect the changes on the template
  }

  ngOnInit() {

    this.paramsSub = this.route.paramMap.subscribe((params) => {
      if (params.get('id') != null) {
        this.userId = Number(params.get('id'));
        this.user = this.userSerivce.getUser(this.userId);
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }
}
