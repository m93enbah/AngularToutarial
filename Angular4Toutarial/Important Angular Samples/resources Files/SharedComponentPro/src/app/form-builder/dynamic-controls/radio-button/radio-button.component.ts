import { Component, OnInit,Input} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ControlRadioButton } from '../control-models/control-radiobutton';
@Component({
  selector: 'shc-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
  @Input() control :ControlRadioButton ;
  @Input() form :FormGroup;
  constructor( ) { }



  ngOnInit() {
  }

}
