import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer:Renderer2,private eleRef:ElementRef) { }

  //we set which style we want to apply @HostBinding
  @HostBinding('style.backgroundColor') backgroundColor:string;

  ngOnInit(): void {
     this.renderer.setStyle(this.eleRef.nativeElement,"background-color","blue");
  }

  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    // this.renderer.setStyle(this.eleRef.nativeElement,"background-color","green");
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    // this.renderer.setStyle(this.eleRef.nativeElement,"background-color","red");
    this.backgroundColor = 'red';
  }
}
