import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
  //we inject the view container ref to used to replace component on the target dom element that used directive
  constructor(public viewContainerRef:ViewContainerRef) 
  {

  }
}
