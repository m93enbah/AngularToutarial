import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assigment';
  oddLst:number[] = [];
  evenLst:number[] = [];


  onAddCount(evnt:number)
  {
    if(evnt%2 ==0)
    {
      this.evenLst.push(evnt);
    }
    else
    {
      this.oddLst.push(evnt);
    }
  }
  
}
