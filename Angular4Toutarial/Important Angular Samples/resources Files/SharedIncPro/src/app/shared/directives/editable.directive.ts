import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Editable]'
})
export class EditableDirective {

  @Input('Editable') labelKey: string;

  private el: HTMLInputElement;
  private input: HTMLInputElement;
  private resourceKey: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener("click", ["$event"]) onclick(event) {
    this.el = this.elementRef.nativeElement;
    this.el.id = this.labelKey;

    var index = this.labelKey.indexOf("Resource");
    this.resourceKey = this.labelKey.substring(0, index);

    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Edit label ..";
    this.input.className = "ui-inputtext ui-corner-all label-edit";
    this.input.id = "txt" + this.labelKey;

    event.target.replaceWith(this.input);
  }

  @HostListener("document:keydown.enter", ["$event"]) onkeydown(event) {
    if (this.el != undefined && this.el != null) {
      if (event.target.id == this.input.id) {
        this.el.innerText = event.target.value;
        event.target.replaceWith(this.el);
        this.el = null;
      }
    }
  }

  @HostListener("document:click", ["$event"]) onDocumentClick(event) {
    if (this.el != null)
      if (event.target.id != this.input.id && event.target.id != this.el.id)
        this.input.replaceWith(this.el);
  }
}
