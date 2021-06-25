import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlightDirective]'
})
export class BasicHighlightDirectiveDirective implements OnInit{

  //we make private automatic property 
  constructor(private elementRef:ElementRef) 
  { }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }

}
