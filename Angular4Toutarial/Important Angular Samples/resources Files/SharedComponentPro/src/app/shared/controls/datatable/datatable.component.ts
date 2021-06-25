
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from "@angular/core";

import {

  Message
} from "primeng/primeng";

import { FormGroup } from '@angular/forms';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'shc-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatatableComponent implements OnInit {

  form: FormGroup;
  tableData: Array<any>;

  @Input() rows: any[];

  @Input() cols: any[];
  @Input() dataKey: string = "Id";
  @Input() title: string = "list";
  @Input() style: string;
  @Input() selectedRows: any[];
  @Input() mouseHover: boolean;

  @Input() showCheckBox: boolean;

  @Input() showSelectionColumn: boolean;

  @Output() OnSelectedRow = new EventEmitter<any>();

  @Output() OnCheckboxSelected: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output() OnRowClicked = new EventEmitter<any>();


   rowsClonned = [];

  dateFormat = environment.DATE_FMT;

  msgs: Message[] = [];

  onRowSelected(event: any[]) {
    this.OnCheckboxSelected.emit(this.selectedRows);
  }

  onRowUnSelected(event: any[]) {
    this.OnCheckboxSelected.emit(this.selectedRows);
  }

  onRowClicked(item: any) {
    this.OnRowClicked.emit(item.data);
  }

  onHeaderCheckboxToggle(event: any[]) {
    this.OnCheckboxSelected.emit(this.selectedRows);
  }

  selectRow(item: any) {
    this.OnSelectedRow.emit(item);
  }

  formatDate(date: Date) {
    return 'reema';
  }
  constructor() {

  }
  ngOnInit() {
   

  }
}
