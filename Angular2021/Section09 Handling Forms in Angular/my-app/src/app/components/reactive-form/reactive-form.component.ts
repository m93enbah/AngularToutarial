import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyEmailValidator } from 'src/app/validators/my-email-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signForm: FormGroup;

  forbiddenUserName = ['Chris', 'Ana'];

  constructor(private myEmailValidator:MyEmailValidator)
  {

  }

  ngOnInit(): void {
    this.signForm = new FormGroup({
      //first param is initial value , second param is validator , third is async validator
      userData: new FormGroup({
        //we have to bind the validator the the form control as below
        username: new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email],this.myEmailValidator.validate.bind(this.myEmailValidator)),
      }),
      gender: new FormControl('male'),
      hoppies: new FormArray([]),
    });

    //you can register event listener for the status changes or value changes
    this.signForm.statusChanges.subscribe((val) => {
      console.log(`status changes to ${val}`);
    });

    this.signForm.valueChanges.subscribe((val) => {
      console.log(`value changes to ${val}`);
    });
  }

  onSubmit() {
    console.log(this.signForm);
  }

  get getControls(): any {
    return this.signForm['controls'];
  }

  onAddHobby() {
    const ctrl = new FormControl(null, [Validators.required]);
    (<FormArray>this.signForm.get('hoppies')).push(ctrl);
  }

  //this custom validator take form control as parameter and we return object of boolean value or null
  //and using on the validator of the form control 
  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }


  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signForm.setValue({
      userData:{
        username:suggestedName,
        email:'max@test.com'
      },
      gender:'male',
      hoppies:[]
    });

    this.signForm.patchValue({
      userData:{
        username:suggestedName,
        email:'max@test.com'
      }
    });
  }

  resetForm(){
    this.signForm.reset();
  }
}
