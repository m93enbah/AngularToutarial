import { Directive, ElementRef, Input, AfterViewInit, OnInit, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[customTheme]'
})
export class BgDirective implements OnInit {


  @Input() tcolor: string;
    @Input() bcolor: string;
    @Input() tsize: string;	


  @HostBinding('style.background-color') backgroundColor: string;
  @HostBinding('style.font-size') fontSize: string;
  @HostBinding('style.font-color') color: string;

  //This event called HostListener is called when Click on the element
  @HostListener('click') foo() {
    //when we set new value on the DOM element with the border style
    this.fontSize = '32px';
    this.backgroundColor = 'orange';
  }


  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'darkgrey';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'yellow';

  }

    constructor(private elRef: ElementRef) {
      debugger;
    }
    ngOnInit(): void {
      debugger;
	   this.tcolor = this.tcolor || 'green';
	   this.bcolor = this.bcolor || 'cyan';
	   this.tsize = this.tsize || '20px';
     this.color= this.tcolor;
	   this.backgroundColor = this.bcolor;
	   this.fontSize = this.tsize;
    }	
}
