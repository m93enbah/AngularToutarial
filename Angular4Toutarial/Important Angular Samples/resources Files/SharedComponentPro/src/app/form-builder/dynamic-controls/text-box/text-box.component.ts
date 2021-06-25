import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControlTextbox } from '../control-models/control-textbox';

@Component({
  selector: 'shc-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: ControlTextbox = new ControlTextbox();
  constructor() { }

  ngOnInit() {
  }
}
