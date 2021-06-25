import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

import { ControlTextarea } from '../control-models/control-textarea';


@Component({
  selector: 'shc-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input() control:ControlTextarea;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
