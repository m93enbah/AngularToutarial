import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlCheckBox } from '../control-models/control-checkbox';

@Component({
  selector: 'shc-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {
  @Input() control: ControlCheckBox;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }


}
