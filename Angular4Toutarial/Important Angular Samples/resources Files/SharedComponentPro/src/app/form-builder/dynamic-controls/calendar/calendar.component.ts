import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControlCalendar } from '../control-models/control-calendar';


@Component({
  selector: 'fb-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  @Input() control: ControlCalendar;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }
}
