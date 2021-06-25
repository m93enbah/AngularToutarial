import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dyn-host]'
})
export class DynamicChildDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
