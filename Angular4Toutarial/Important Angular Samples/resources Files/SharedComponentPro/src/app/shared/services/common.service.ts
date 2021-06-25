import { Injectable, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators/delay';
import { Message, MessageService } from 'primeng/api';




@Injectable({
  providedIn: 'root'
})
export class CommonService {
  msgs: Message[] = [];
  messageUpdated=new EventEmitter <Message []> ();
  constructor( public fb: FormBuilder,
    private messageService: MessageService   ) { }


  isFieldValid(formGroup: FormGroup, field: string) {
    return formGroup.get(field).valid;
  }

  resetForm(formGroup: FormGroup) {
    formGroup.reset();
  }

  pushError(errors: Message[]) {
    this.messageService.clear();
    this.messageService.addAll(errors);
  }
  getMessage() {
    return this.msgs.slice();
  }
  addMessage(type: string, summary: string, messageText: string) {

    this.messageService.clear();
    this.messageService.add({ severity: type, summary: summary, detail: messageText });

  }

  pushMessage(key:string,type: string, summary: string, messageText: string) {
    this.msgs = [];
    this.messageService.clear();
    this.messageService.add({key:key, severity: type, summary: summary, detail: messageText });
    this.msgs.push({ severity: type, summary: summary, detail: messageText });
  }

  pushMessageNotify(key :string , type: string, summary: string, messageText: string) {
    this.msgs = [];
    this.messageService.clear();
    this.msgs.push({ severity: type, summary: summary, detail: messageText });
    this.messageService.add({key:'settings', severity: type, summary: summary, detail: messageText });

  }
  clearMessages(){
    this.msgs = [];
    this.messageService.clear();
  }
  loadData<T>(data:any) {
    debugger;
    return of<T>(data).pipe(
      delay(2000)
    );
  }

}
