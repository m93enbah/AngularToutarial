import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-server]',
  //  selector: '.app-server',
   selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  serverId:number = 10;
  name:string = "server name";
  serverStatus:string = "offline";

  getServerStatus(statusName)
  {
    return `The Server Status : ${statusName}`;
  }

  getColor()
  {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
