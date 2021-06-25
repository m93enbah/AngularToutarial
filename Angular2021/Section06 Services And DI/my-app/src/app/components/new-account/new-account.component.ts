import { Component, EventEmitter, Output } from '@angular/core';
import { AccountModel } from 'src/app/models/accountmodel';
import { AccountsService } from 'src/app/services/accounts.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(public loggingService: LoggingService,private accountService:AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountService.onAccountAdded(new AccountModel(accountName,accountStatus));
    this.accountService.statusUpdated.emit('status updated to '+accountStatus);
  }
}
