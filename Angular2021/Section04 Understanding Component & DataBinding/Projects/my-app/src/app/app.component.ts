import { Component } from '@angular/core';
import { ServerModel } from 'src/app/models/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
  h3{
    color:darkblue
  }
  `]
})
export class AppComponent {

  serverElements:ServerModel[] = [];

  onAddServer(serverData:ServerModel){
    this.serverElements.push({
      type:'server',
      name:serverData.name,
      content:serverData.content
    });
   }
 
   onAddBluePrint(bluePrintData:ServerModel)
   {
     this.serverElements.push({
       type:'blueprint',
       name:bluePrintData.name,
       content:bluePrintData.content
     });
   }

   onChangeFirst()
   {
     this.serverElements[0].name = 'changed';
   }
}
