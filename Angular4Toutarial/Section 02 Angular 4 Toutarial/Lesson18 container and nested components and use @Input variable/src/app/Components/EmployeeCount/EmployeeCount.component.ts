import { Component, OnInit,Input , Output, EventEmitter } from '@angular/core';
import {Employee} from '../../Service/Employee';
import {EmployeeService} from '../../Service/employee.service';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

ngOnInit(){}

  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;

  // Holds the selected value of the radio button
  selectedRadioButtonValue: string = 'All';

  // The Output decorator makes the property an Output property
  // EventEmitter class is used to create the custom event
  // When the radio button selection changes, the selected
  // radio button value which is a string gets passed to the
  // event handler method. Hence, the event payload is string.
  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
                                      new EventEmitter<string>();

  // This method raises the custom event. We will bind this
  // method to the change event of all the 3 radio buttons
  onRadioButtonSelectionChange() {
    debugger;
      this.countRadioButtonSelectionChanged
          .emit(this.selectedRadioButtonValue);
  }

 
}
