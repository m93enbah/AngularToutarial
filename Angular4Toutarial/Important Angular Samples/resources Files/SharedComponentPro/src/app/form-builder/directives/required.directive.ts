
import { Directive, Self } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import {
  Input
} from '@angular/core';
import { DynamicControlService } from '../services/dynamic-control.service';

@Directive({
  selector: '[shcRequired]'
})
export class RequiredDirective {
  @Input() set shcRequired(required: any) {
   if (this.dcs.convertToBoolean(required) == true) {
      this.ngControl.control.setValidators([Validators.required]);
      this.ngControl.control.updateValueAndValidity();
    } else {
      this.ngControl.control.clearValidators();
      this.ngControl.control.updateValueAndValidity();
    }

  }
  constructor(@Self() private ngControl: NgControl, private dcs: DynamicControlService) {

  }

}
