import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasicEditorComponent } from '../basic editor/basic-editor.component';
import { AdvEditorComponent } from '../adv editor/adv-editor.component';

export interface myInterface {
  remove(index: number);
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @ViewChild(BasicEditorComponent) basicChild: BasicEditorComponent;
  @ViewChild(AdvEditorComponent) advChild: AdvEditorComponent;
  @ViewChild('panelContainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  //@ViewChild('focus') el: ElementRef;
  basicRuleForm: FormGroup;
  advRuleForm: FormGroup;
  seleted: boolean = true;
  disableHeader: boolean = true;
  showCursor: boolean = false;
  checked: boolean = true;
  selectedValue: number = 1;
  temp: string="0";
  headerName: string = "Rule Name";
  public index: number;
  public selfRef: PanelComponent;
  public compInteraction: myInterface;
  constructor(private form: FormBuilder) { }

  onSave() {

  }

  delete(index) {
    this.compInteraction.remove(index);
  }

  editHeader(event:any) {
    this.disableHeader = !this.disableHeader;
    this.showCursor = !this.showCursor;
    //this.el.nativeElement.focus();
  }

  rdSelected() {
    if (this.selectedValue == 1)
      this.seleted = true;
    else
      this.seleted = false;

  }

  ngAfterViewInit() {
    /*if (this.selectedValue == 1)
      this.basicRuleForm = this.basicChild.basicRuleForm;
    else
      this.advRuleForm = this.advChild.advRuleForm;
    this.basicRuleForm.patchValue({
      conition:this.child.basicRuleForm.get('conition').value,
      conition1: this.child.basicRuleForm.get('conition1').value,
      conition2: this.child.basicRuleForm.get('conition2').value,
      name: this.child.basicRuleForm.get('name').value,
      action:this.child.basicRuleForm.get('action').value,
      actionName: this.child.basicRuleForm.get('actionName').value
    })*/
  }
  ngOnInit() {
    this.basicRuleForm = this.form.group({
      conition: [''],
      conition1: [''],
      conition2: [''],
      name: [''],
      action: [''],
      actionName: ['']
    });
    this.advRuleForm = this.form.group({
      expreesion: ['']

    });
  }
}
