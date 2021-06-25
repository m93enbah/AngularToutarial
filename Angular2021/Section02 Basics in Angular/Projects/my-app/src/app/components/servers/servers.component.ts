import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
   templateUrl: './servers.component.html',
//   template:`
//   <app-server></app-server>
//   <app-server></app-server>
//   <app-server></app-server>
//  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string = "server before create";
  serverName:string = "";
  serverCreated:boolean = false;
  serverLst = ["Server01","Server02"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer():void
  {
    this.serverCreated = true;
    this.serverCreationStatus = "server created "+this.serverName;
    this.serverLst.push(this.serverName);
  }


  onUpdateServerName(event)
  {
    console.log(event);
    this.serverName = event.target.value;
  }
}
