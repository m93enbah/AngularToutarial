import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fullName:string = "";

  serverElements:any[] = [];
  onSaveUpdate(event:any)
  {
    debugger;
    this.serverElements.push(event);
  }

}
