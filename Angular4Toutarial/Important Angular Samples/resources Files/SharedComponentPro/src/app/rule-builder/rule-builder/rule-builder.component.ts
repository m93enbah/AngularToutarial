import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-rule-builder',
  templateUrl: './rule-builder.component.html',
  styleUrls: ['./rule-builder.component.css'] ,
  entryComponents:[PanelComponent]
})
export class RuleBuilderComponent implements OnInit {
  counter: number = 0;
  searchItem: any;
  name: any;
  results: string[];
  filtered: any[];
  panels: any[];
  components = [];
  index: number = 0;
  @ViewChild('panelContainer',{read:ViewContainerRef}) entry: ViewContainerRef;
  componentRef: any;
  constructor(private resolver:ComponentFactoryResolver) {
    this.panels = [
      "1",
      "2",
      "3",
      "4",
      "5"
    ]
   }

   search(event){
     this.filtered = this.filter(event.query,this.panels);
   }

   filter(query:any,panels:any[]): any[]{
    let filtered: any[] =[]; 
    for(let i =0;i<panels.length;i++){
      if(panels[i]==query){
        filtered.push(panels[i]);
      }
    }
    return filtered; 
   } 

   newRule(){
    const factory = this.resolver.resolveComponentFactory(PanelComponent)
     this.componentRef = this.entry.createComponent(factory);
     let currentComponent = this.componentRef.instance;
     currentComponent.selfRef = currentComponent;
     currentComponent.index = ++this.index;
     currentComponent.compInteraction = this;
     this.counter++;
     currentComponent.temp = this.counter.toString();
     this.components.push(this.componentRef);
   }

  remove(index: number) {
    if (this.entry.length < 1)
      return;
    let comRef = this.components.filter(x => x.instance.index == index)[0];
    let entryindex: number = this.entry.indexOf(comRef);
    this.entry.remove(entryindex);
    this.components.splice(entryindex, 1)
  }

  ngOnInit() {
  }

}
