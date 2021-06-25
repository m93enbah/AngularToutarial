import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServerModel } from "../models/server";
import { ServersService } from "../services/servers-service.service";

@Injectable()
//we create custom resolver which return to us custom data of type ServerModel
export class ServerResolver implements Resolve<ServerModel> {

  constructor(private serversService:ServersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ServerModel | Observable<ServerModel> | Promise<ServerModel> {
    return this.serversService.getServer(+route.params['id']);
  }
}
