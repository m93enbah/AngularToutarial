import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:UserModel[] = [
    new UserModel(1, 'Max'),
    new UserModel(2, 'Anna'),
    new UserModel(3, 'Chris'),
  ]
  constructor() { }


  getUsers():UserModel[]
  {
    return this.users;
  }

  getUser(id:number):UserModel
  {
    const user = this.users.filter(
      (s) => {
        return s.id === id;
      }
    );
    return user[0];
  }
}
