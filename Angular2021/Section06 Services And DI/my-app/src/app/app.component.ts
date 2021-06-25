import { Component, OnInit } from '@angular/core';
import { AccountModel } from './models/accountmodel';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts:AccountModel[] = [];

  constructor(public accountService:AccountsService)
  {
    this.accountService.statusUpdated.subscribe((msg:string) => alert(msg));

  }

  ngOnInit(): void {
     this.accounts = this.accountService.accounts
  }

}
