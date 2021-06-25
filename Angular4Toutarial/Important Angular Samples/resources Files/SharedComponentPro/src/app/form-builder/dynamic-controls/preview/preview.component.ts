import { Component, OnInit, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormContainer } from '../../models/models';


@Component({
  selector: 'shc-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() formContent :FormContainer[] = [];
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
