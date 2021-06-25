import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ControlBase } from '../../dynamic-controls/control-models/control-base';
import { FormGroup } from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { rotateInUpRight ,slideInLeft, fadeOutUp, flipInX, lightSpeedIn } from 'ng-animate';

@Component({
  selector: 'shc-dynamic-control-editor',
  templateUrl: './dynamic-control-editor.component.html',
  styleUrls: ['./dynamic-control-editor.component.css'],
  animations: [
    trigger('rotateInUpRight', [transition('* => *', useAnimation(rotateInUpRight,{
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 1, delay: 0 }
    }))]),
    trigger('lightSpeedIn', [transition('* => *', useAnimation(lightSpeedIn,{
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 1, delay: 0 }
    }))])
    
  ]
})
export class DynamicControlEditorComponent implements OnInit {

  @Input() control: ControlBase<any>;
  @Input() form: FormGroup;
  @Output() viewSettings = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();

  get isValid() { return this.form.controls[this.control.key].valid; }
  rotateInUpRight: any;
  lightSpeedIn:  any;

  constructor() { }

  ngOnInit() {
  }

  interval: any;

  viewSettingsClick(event: any) {

    this.viewSettings.emit(this.control);

  }

  removeClick(event: any) {
    this.remove.emit(this.control);
  }


}
