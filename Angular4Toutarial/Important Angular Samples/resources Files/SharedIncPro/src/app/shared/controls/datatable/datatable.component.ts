import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgIf } from "@angular/common";
import {
  DataTableModule,
  SharedModule,
  Header,
  Footer,
  Message
} from "primeng/primeng";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "css-datatable",
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

  @Output() OnCheckboxSelected: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output() OnRowClicked = new EventEmitter<any>();

  @Output() OnRowcheckboxSelected = new EventEmitter<any>();

  dateFormat = environment.DATE_FMT;

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

  RowCheckboxSelected(name: any, val: any) {
    let checkboxreturn = { field: name, value: val.checked }
    this.OnRowcheckboxSelected.emit(checkboxreturn);
  }



  formatDate(date: Date) {
    return 'reema';
  }

  ngOnInit() { }

}
