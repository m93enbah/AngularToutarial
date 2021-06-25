import { Directive,ElementRef,Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutoFocusDirective implements OnInit {
  //@Input('autofocus') isFocused: boolean;
  private focus: boolean;
  constructor(private el: ElementRef, private re: Renderer) { }

  ngOnInit() {
    if (this.autofocus) {
      this.re.invokeElementMethod(this.el.nativeElement, 'focus');
    }
    console.log(this.focus); 
  }

  @Input() set autofocus(condition: boolean) {
    this.focus = condition;
    
  }
}
