import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlDropdown } from '../control-models/control-dropdown';

@Component({
  selector: 'shc-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  @Input() control: ControlDropdown;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {

  }

}
