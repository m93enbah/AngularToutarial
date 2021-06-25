import { Directive, OnInit  } from '@angular/core';
import { NgModel } from '@angular/forms';
@Directive({
    selector: '[DateFormatTst]'
  })

export class DateDirective implements OnInit {

    constructor(private ngModel: NgModel) {
      debugger;
    }
  
    ngOnInit() {
      debugger;
      let date = this.bindDate(this.ngModel.model);
      this.ngModel.update.emit(date);
    }
  
    bindDate(value: any) {
      debugger
      return new Date(value);
    }

}






