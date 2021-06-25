import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { log } from 'util';

// translateY

@Component({
  selector: 'shc-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  animations: [
    trigger('move', [
      state('in', style({ opacity: 1, transform: 'translateY(0%)' })),
      state('out', style({opacity: 0, transform: 'translateY(100%)' })),
      transition('in => out', animate('250ms  ease-out')),
      transition('out => in', animate('500ms  ease-in')),
    ])
  ]
})
export class WidgetsComponent implements OnInit, AfterViewInit {
  card1Front: any;
  card1Back: any;
  card1State;

  card2Front: any;
  card2Back: any;
  card2State;

  card3Front: any;
  card3Back = [];
  card3State;
  

  show1: boolean 
  show2: boolean 
  show3: boolean 


  constructor() {
    
  }

  ngOnInit() {
    this.initContent();
  }

  initContent() {
    this.card1Front = {
      title: 'Overall Issuance',
      content: 'Overall Issuance - Retrieve no. per product :',
      last: 'Total : 352'
    }
    this.card1State = 'in';

    this.card2Front = {
      title: 'Todays Issuance',
      content: 'Todays count of issued policies per application',
      last: '...'
    }
    this.card2State = 'in';

    this.card3Front = {
      title: 'Todays Successful Deals',
      content: 'Todays successful deals - premium per product',
      last: 'Total : 6800'
    }
    this.card3State = 'in';

    this.card1Back = {};
    this.card2Back = {};
    this.card3Back = [];

    this.show1 = true;
    this.show2 = true;
    this.show3 = true;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.card1State = 'out';

    }, 6000);

    setTimeout(() => {
      
      this.card2State = 'out';
      
    }, 4000);

    

    setTimeout(() => {
      
      this.card3State = 'out';
    }, 5000);
  }


  onEnd1(event) {
    this.card1State = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.card1State = 'out'
        this.show1 = !this.show1,
          this.changeContent1(this.show1)

      }, 6000);
    }

  }
    
  onEnd2(event) {
    this.card2State = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.card2State = 'out'
        this.show2 = !this.show2,
          this.changeContent2(this.show2)

      }, 4000);
    }

  }
  onEnd3(event) {
    this.card3State = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.card3State = 'out'
        this.show3 = !this.show3,
        this.changeContent3(this.show3) 

      }, 5000);
    }  
    
  }
  changeContent1(show: boolean) {
    if (show) {

      this.card1Front;

    } else {
      this.card1Back = {
        title: 'TPD',
        content: 'TPD Policies Issuance :',
        last: 'Total : 110'
      }
    }
  }

  changeContent2(cond: boolean) {
    if (cond) {

      this.card2Front;

    } else {
      this.card2Back = {
        title: 'Travel',
        content: 'Travel issued policies',
        last: 'Total : 101'
      }
    }
  }

  changeContent3(show: boolean) {
    if (show) {

      this.card3Front;
      
    } else {

      this.card3Back = [
        { name: 'General BMS', value: '0' },
        { name: 'General Accident', value: '0' },
        { name: 'Motor', value: '0' },
        { name: 'Property', value: '0' },
      ]
     
    }
  }

  
  

  
}
