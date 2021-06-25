import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FacInward } from '../../../models/data-models';
import { ControlBase } from './control-base';
import { ControlDropdown } from './control-dropdown';
import { ControlTextbox } from './control-textbox';
import { DynamicControlService } from '../../services/dynamic-control.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'ribms-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css'],
  providers: [DynamicControlService]
})
export class SearchDialogComponent implements OnInit {

  constructor(private cs: CommonService, private dcs: DynamicControlService) { }

  @Input() dialogTitle: string = "";

  @Input() searchTitle: string = "";

  @Input() resultTitle: string = "";

  @Input() controls: ControlBase<any>[] = [];

  @Output() emitSuggest = new EventEmitter<any>();

  form: FormGroup;

  onSubmit() {
    this.onSearch.emit(this.form.value);
  }

  ngOnInit() {
    this.form = this.dcs.toFormGroup(this.controls);
  }

  showModel() {
    this.show = true;
  }

  resetForm() {
    this.cs.resetForm(this.form);
    this.form = this.dcs.toFormGroup(this.controls);
    this.rows = [];
  }

  //#region  \\DataTable\\
  @Input() rows: any[];

  @Input() cols: any[];

  @Input() show: boolean = true;

  @Input() showCheckBox: boolean = false;

  @Input() showSelectionColumn: boolean = true;

  @Input() mouseHover: boolean = false;

  @Output() onSearch = new EventEmitter<any[]>();

  @Output() onSelectedRow = new EventEmitter<any>();

  OnSelectedRow(selectedRow: any) {
    this.onSelectedRow.emit(selectedRow);
  }

  GetSuggestVal(selectedRow: any) {
    this.emitSuggest.emit(selectedRow);
  }

  HideSearchPanel()
  {
    this.resetForm();
  }

  //#endregion
}
