import { EventEmitter, Injectable } from '@angular/core';
import { AccountModel } from '../models/accountmodel';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(public loggingService:LoggingService) { }
  
  statusUpdated = new EventEmitter<string>();

  //array is reference type
  accounts:AccountModel[] = [
    new AccountModel('Master Account','active'),
    new AccountModel('Testaccount','inactive'),
    new AccountModel('Hidden Account','unknown'),
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
    this.loggingService.logStatus(newAccount.status);
  }

  onStatusChanged(id:number,newStatus:string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatus(newStatus);
  }  
}
