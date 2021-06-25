import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from './control-base';
import { CommonService } from '../../services/common.service';
import { Options } from 'selenium-webdriver/opera';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng/api';
import { SelectButton } from 'primeng/primeng';

@Component({
  selector: 'ribms-dynamic-control',
  templateUrl: './dynamic-control.component.html'
})
export class DynamicControlComponent implements OnInit {
  @Input() control: ControlBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.control.key].valid; }

  Suggestions: SelectItem[];

  constructor(private cs: CommonService) { }

  filteredUsers: SelectItem[];
  isLoading = false;

  ngOnInit() {
  }

  autoComplete(event) {   
    this.cs.DynamicCall(this.control.serviceUrl, event.query).subscribe(
        (data) => {
          this.Suggestions = data;
          console.log(this.Suggestions);
        },
        err => console.log(err)
      );
  }
}

