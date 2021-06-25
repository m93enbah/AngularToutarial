import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/can-component-deactivate';
import { ServerModel } from 'src/app/models/server';
import { ServersService } from '../../../services/servers-service.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit , CanComponentDeactivate{
  server: ServerModel;
  serverName = '';
  serverStatus = '';
  allowEdit:boolean = false;
  changesSaved:boolean = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params) => {
      var id = +params['id'];
      this.server = this.serversService.getServer(id);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;

    });

    //it will make issue that it will update when component is initialized not after it
    console.log(`query params :${this.route.snapshot.queryParams}`);
    console.log(`query params :${this.route.snapshot.fragment}`);

    this.route.queryParams.subscribe((params) => {
      this.allowEdit = params['allowEdit'] == 0 ? true : false;
      console.log(params);
    });

    this.route.fragment.subscribe((fragments) => {
      console.log(fragments);
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>
  {
    if(!this.allowEdit)
    {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved)
    {
      return confirm('Do you want to discard the changes?');  
    }
    else{
      return true;
    }
  }
}
