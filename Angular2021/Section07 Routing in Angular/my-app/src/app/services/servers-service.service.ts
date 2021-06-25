import { ServerModel } from "src/app/models/server";

export class ServersService {
  private servers : ServerModel[] = [
    new ServerModel(1,'SampeTestServer','online'),
    new ServerModel(2,'Testserver','offline'),
    new ServerModel(3,'Devserver','offline')
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number): ServerModel {
    const server = this.servers.filter(
      (s) => {
        return s.id === id;
      }
    );
    return server[0];
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const servers = this.servers.filter(
      (s) => {
        return s.id === id;
      }
    );
    if (servers.length > 0) {
      servers[0].name = serverInfo.name;
      servers[0].status = serverInfo.status;
    }
  }
}
