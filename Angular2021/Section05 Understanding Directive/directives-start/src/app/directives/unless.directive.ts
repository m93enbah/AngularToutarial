import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //we define Input() property which change the visibility of the DOM element
  @Input() set appUnless(condition:boolean){
    if(!condition)
    {
      //it will create template container that hold multiple embeded templates 
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else
    {
      this.vcRef.clear();
    }
  } 

  constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }

}
