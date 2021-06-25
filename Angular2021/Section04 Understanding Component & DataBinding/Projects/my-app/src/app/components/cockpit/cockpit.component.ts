import { ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServerModel } from 'src/app/models/server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  
  @Output() serverCreated:EventEmitter<ServerModel> = new EventEmitter();
  //we can assign alias name for the output event emitter
  @Output('btnCreated') bluePrintCreated:EventEmitter<ServerModel> = new EventEmitter();


  onAddServer(nameInput)
  {
    console.log(nameInput.value);
    var obj:ServerModel = 
    {
      // name:this.newServerName,
      name:nameInput.value,
      type:'server',
      // content:this.newServerContent
      content:this.serverContentInput.nativeElement.value
    }
    this.serverCreated.emit(obj);  
  }


  onAddBluePrint(nameInput)
  {
    var obj:ServerModel = 
    {
      // name:this.newServerName,
      name:nameInput.value,
      type:'bluePrint',
      // content:this.newServerContent
      content:this.serverContentInput.nativeElement.value
    }
    this.bluePrintCreated.emit(obj);  
  }
}
