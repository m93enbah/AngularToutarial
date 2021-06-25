import { Directive, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[DateFormat]'
})
export class DateDirective implements OnInit {

  constructor(private ngModel: NgModel) {
  }

  ngOnInit() {
    let date = this.bindDate(this.ngModel.model);
    this.ngModel.update.emit(date);
  }

  bindDate(value: any) {
    return new Date(value);
  }
}
