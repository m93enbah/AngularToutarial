import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class StringDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive. ";
 }

}
