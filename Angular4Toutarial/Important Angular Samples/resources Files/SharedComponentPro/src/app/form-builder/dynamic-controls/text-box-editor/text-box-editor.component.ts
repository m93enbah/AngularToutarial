import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlTextboxEditor } from '../control-models/control-textboxeditor';
import { DynamicControlService } from '../../services/dynamic-control.service';


@Component({
  selector: 'shc-text-box-editor',
  templateUrl: './text-box-editor.component.html',
  styleUrls: ['./text-box-editor.component.css']
})
export class TextBoxEditorComponent implements OnInit {

  @Input() control: ControlTextboxEditor;
  @Input() form: FormGroup;
  constructor(private dcs: DynamicControlService) { }



  ngOnInit() {
  }

}
