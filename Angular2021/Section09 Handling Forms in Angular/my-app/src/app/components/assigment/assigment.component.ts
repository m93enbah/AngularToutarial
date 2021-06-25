import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.css']
})
export class AssigmentComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private customValidators:CustomValidators){}
  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],this.customValidators.validate.bind(this.customValidators)  
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }

}
