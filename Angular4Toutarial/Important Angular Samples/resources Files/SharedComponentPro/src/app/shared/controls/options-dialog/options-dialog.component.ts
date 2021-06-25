import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { swing, rubberBand} from 'ng-animate';


@Component({
  selector: 'shc-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.css'],
  animations: [
    trigger('swing', [transition('* => *', useAnimation(swing))]),
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand))])
  ]
})
export class OptionsDialogComponent implements OnInit {
  @Input() displayDialog: boolean;


  @Input() rows:{ label: string, value: string }[] = [];
  swing: any;
  rubberBand: any;
  cols: any[] = [

    { field: "label", header: "label", hidden: false, editable: true  },
    { field: "value", header: "value", hidden: false, editable: true  }

  ]

  selectedRows: { label: string, value: string }[] = [];

  @Output() delete = new EventEmitter<any>();
  @Output() save = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  saveRow() {

    this.save.emit(this.rows.slice());

  }
  deleteRow() {
    let selectRowsTemp=this.selectedRows.slice();
    let tempRows = this.rows.filter(function (obj) { return selectRowsTemp.indexOf(obj) == -1; });
    this.rows = [...tempRows];
    this.selectedRows = [];
    this.swing = !this.swing;
    this.delete.emit(this.rows);
   }

  getSelectedRows(selectedRows: { label: string, value: string }[]) {
    this.selectedRows = selectedRows;
  }
  addNewRow() {

    this.rows = [...this.rows, { label: 'add label ...', value: 'add value ...' }];
    this.rubberBand = !this.rubberBand;
  }
}
