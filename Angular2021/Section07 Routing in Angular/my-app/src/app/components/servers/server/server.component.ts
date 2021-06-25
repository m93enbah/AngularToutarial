import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ServerModel } from 'src/app/models/server';
import { ServersService } from 'src/app/services/servers-service.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: ServerModel;
  serverId:number= 1;
  allowEdit:string;
  
  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router)
  {

  }

  ngOnInit() {

    this.route.data.subscribe((data:Data) => {
      this.server = data['server'];
    })



    // this.route.params.subscribe((params) => {
    //   if (params.id != null) {
    //     this.serverId = Number(params['id']);
    //     this.server = this.serversService.getServer(this.serverId);
    //   }
    // });

    this.route.queryParams.subscribe((params) => {
      this.allowEdit = params['allowEdit'];
    });
  }

  onEdit(){
    //normal way to pass router link plus the query parameters
    //this.router.navigate(['../servers',this.server.id,'edit'],{queryParams:{allowEdit: this.allowEdit}});
    //if you want to keep the query parameter passing as below
    this.router.navigate(['../servers',this.server.id,'edit'],{queryParamsHandling:'preserve'});
  }
}
