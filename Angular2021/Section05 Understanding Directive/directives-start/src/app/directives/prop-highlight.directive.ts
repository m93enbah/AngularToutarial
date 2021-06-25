import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPropHighlight]'
})
export class PropHighlightDirective {

  constructor() { }

  @Input() defaultColor:string = "transparent";
  @Input() highlightColor:string = "blue";

  //we set which style we want to apply @HostBinding
  @HostBinding('style.backgroundColor') backgroundColor:string;

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    this.backgroundColor = this.defaultColor;
  }
}
