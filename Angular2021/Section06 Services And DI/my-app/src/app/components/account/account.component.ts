import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountModel } from 'src/app/models/accountmodel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: AccountModel;
  @Input() id: number;

  constructor(public accountService:AccountsService){}

  onSetTo(status: string) {   
    this.accountService.onStatusChanged(this.id,status);
    this.accountService.statusUpdated.emit('status created to '+status);
  }
}
