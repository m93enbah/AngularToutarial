import { Injectable } from '@angular/core';
import { AccountsService } from './accounts.service';

//with the decorator we know this is service such as the component declared with @Component
@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logStatus(status:string)
  {
    console.log('A server status changed, new status: ' + status);
  }
}
