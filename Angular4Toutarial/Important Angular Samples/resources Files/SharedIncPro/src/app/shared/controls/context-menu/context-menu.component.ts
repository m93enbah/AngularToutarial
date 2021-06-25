import { Component, OnInit, Input, HostListener, Directive, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NgControl } from '@angular/forms';
import { ContextMenu } from 'primeng/primeng';

@Component({
  selector: 'css-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnInit {

  @Input() global: boolean;
  @Input() target: HTMLInputElement;

  globalItems: MenuItem[];
  controlItems: MenuItem[];
  private hiddenElements: HTMLInputElement[] = [];

  constructor() { }

  ngOnInit() {
    this.globalItems = [
      {
        label: 'Lock Screen',
        icon: 'fa fa-lock',
        command: (event) => { this.lockScreen(event.item); },
        visible: true
      },
      {
        label: 'Unlock Screen',
        icon: 'fa fa-unlock',
        command: (event) => { this.unlockScreen(event.item); },
        visible: false
        //},
        //{
        //  label: 'Show Hidden Fields',
        //  icon: 'fa fa-eye',
        //  command: (event) => { this.showHiddenControls(event.item); },
        //  visible: true
      }
    ];

    this.controlItems = [
      {
        label: 'Hide',
        icon: 'fa fa-eye-slash',
        command: (event) => { this.hideControl(event.item); },
        visible: true
      }];
  }

  hideControl(item): void {
    this.hiddenElements.push(this.target);
    this.target.style.display = "none";
  }

  //showHiddenControls(item): void {
  //  this.hiddenElements.forEach(hiddenElement =>
  //    hiddenElement.style.display = "block");
  //}

  blockedScreen: boolean = false;

  lockScreen(item): void {
    this.blockedScreen = true;
    item.visible = false;
    this.globalItems.find(item => item.label == 'Unlock Screen').visible = true;
  }

  unlockScreen(item): void {
    this.blockedScreen = false;
    item.visible = false;
    this.globalItems.find(item => item.label == 'Lock Screen').visible = true;
  }

  @HostListener("document:keydown", ["$event"]) onkeydown(e: KeyboardEvent) {
    if (e.ctrlKey && e.altKey)
      this.unlockScreen(this.globalItems[1]);
  }

}

//@Directive({
//  selector: '[ContextMenu]'
//})

//export class ContextMenuDirective {
//  constructor(private contextMenuComponent: ContextMenuComponent) { }

//  @Input('ContextMenu') target: string;

//  @HostListener("contextmenu", ["$event"]) oncontextmenu(event) {
//    debugger;
//    this.contextMenuComponent.contextMenu.target = this.target;
//    this.contextMenuComponent.contextMenu.model = this.contextMenuComponent.controlItems;
//    this.contextMenuComponent.contextMenu.show();
//  }

//}
