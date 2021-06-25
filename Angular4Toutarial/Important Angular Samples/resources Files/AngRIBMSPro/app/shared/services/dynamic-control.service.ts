import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { ControlBase } from '../controls/search-dialog/control-base';

@Injectable()
export class DynamicControlService {

  constructor() { }

  toFormGroup(controls: ControlBase<any>[] ) {
    let group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
                                              : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }

}
