import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {


  @Input('aliasElement') element:any;

  constructor() { }

  ngOnInit() {
  }

}
