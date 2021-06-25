import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ContentChild,
  DoCheck,
  ElementRef,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ServerModel } from 'src/app/models/server';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  //we can asign alias name and use srcElement instead of element on the parent component
  @Input('srcElement') element: ServerModel;
  @Input() name: string;
  @ViewChild('headingEle') heading:ElementRef;
  @ContentChild('paragraph') paragraph:ElementRef;

  //it will called when the instance is created
  constructor() {
    console.log('constructor called!');
  }

  //it will called when the page initialized
  ngOnInit(): void {
    console.log('ngOnInit called');
    //we see that its not accessable with @ViewChild value
    console.log(this.heading?.nativeElement?.textContent);
    console.log(this.paragraph?.nativeElement?.textContent)
  }
  //it will called for any changes for @Input , @Output variables
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  //it will called every whenever angular check for any changes there happen ,like event click
  ngDoCheck(): void {
    console.log('ngDoCheck Called.');
  }
  //it will called after DoCheck and called once when page initialized
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called.');
    console.log(this.paragraph.nativeElement.textContent)
  }
  //it will called after ngAfterContentInit and
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called.');
  }
  //it will called after ngAfterContentChecked and called once when page initialized
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called.');
      //we see that its not accessable with @ViewChild value
      console.log(this.heading.nativeElement.textContent);
  }
  //it will called after ngAfterViewInit and called once when page initialized
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called.');
  }
  //it will called when destroy view and navigate to new view
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called.');
  }
}
