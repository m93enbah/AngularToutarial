import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { NgIf } from "@angular/common";
import {
  DataTableModule,
  SharedModule,
  Header,
  Footer,
  Message,

  Calendar
} from "primeng/primeng";
import { environment } from "../../../../environments/environment";
import { NumberTypes } from 'src/app/models/data-models';

@Component({
  selector: "ribms-datatable",
  templateUrl: "./datatable.component.html"
})

export class DatatableComponent implements OnInit {
  @Input() rows: any[];

  @Input() cols: any[];

  @Input() title: string = "list";

  @Input() mouseHover: boolean;

  @Input() showCheckBox: boolean;

  @Input() showSelectionColumn: boolean;

  @Output() OnSelectedRow = new EventEmitter<any>();

  @Output() OnLinkSelected = new EventEmitter<any>();

  @Output() OnCheckboxSelected: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output() OnRowClicked = new EventEmitter<any>();

  dateFormat = environment.DATE_FMT;
  calenderDateFormat = environment.calenderDateFormat;

  percentFormat = "1.2-2";
  percentNumberType = NumberTypes.Percentage;

  selectedRows: any[];
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

  onLinkSelected(item: any, col: string, colIndex: number) {
    let commandEventArg = new CommandEventArg(item, col, colIndex);
    this.OnLinkSelected.emit(commandEventArg);
  }

  formatDate(date: Date) {
    return 'reema';
  }

  ngOnInit() {
  } 
}

export class CommandEventArg {
  commandRow: any;
  commandCol: string;
  commandIndex: number;
  constructor(Row: any, Col: string, Index: number) {
    this.commandRow = Row;
    this.commandCol = Col;
    this.commandIndex = Index;
  }
}
