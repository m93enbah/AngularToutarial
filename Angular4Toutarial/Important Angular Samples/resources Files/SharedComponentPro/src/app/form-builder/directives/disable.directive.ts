import { Directive, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import {
  Input
} from '@angular/core';
import { DynamicControlService } from '../services/dynamic-control.service';


@Directive({
  selector: '[appDisable]'
})
export class DisableDirective {
  @Input() set appDisable(   disable : any ) {

     if(this.dcs.convertToBoolean(disable)==true){
      this.ngControl.control.disable();
        }else {
           this.ngControl.control.enable();
        }




  }
  constructor(@Self() private ngControl : NgControl ,private dcs : DynamicControlService ) {

   }
}
