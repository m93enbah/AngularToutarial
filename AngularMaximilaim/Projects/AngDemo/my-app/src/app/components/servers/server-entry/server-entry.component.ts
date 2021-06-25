import { Component, OnInit, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ServerModel } from '../../models/models';

@Component({
  selector: 'app-server-entry',
  templateUrl: './server-entry.component.html',
  styleUrls: ['./server-entry.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class ServerEntryComponent implements OnInit {

  newServerName:string = "";
  newServerContent:string = "";
  @Output('SaveAlias') onSaveUpdate = new EventEmitter<ServerModel>();
  
  @ViewChild('serverContentNameEntry', {static: false}) contentDOM: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  onAddServer(ele:HTMLInputElement)
  {

     let obj: ServerModel = new ServerModel(
       'server',
       ele.value,
       this.contentDOM.nativeElement.value,
       );

     this.onSaveUpdate.emit(obj);
  }
  onAddBlueprint(ele:HTMLInputElement)
  {
    let obj: ServerModel = new ServerModel(
      'bluePrint',
      ele.value,
      this.contentDOM.nativeElement.value);

    this.onSaveUpdate.emit(obj);
  }

}
