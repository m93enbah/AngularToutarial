import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('f') signForm: NgForm;
  defaultValue: string = 'pet';
  answer: string = '';
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  submitted:boolean = false;  

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signForm.setValue({
      userData: {
        username: suggestedName,
        email: '',
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male',
    });

    this.signForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit() {
    console.log(this.signForm);

    this.submitted = true;
    this.user.username = this.signForm.value.userData.username;
    this.user.email = this.signForm.value.userData.email;
    this.user.secretQuestion = this.signForm.value.secret;
    this.user.answer = this.signForm.value.questionAnswer;
    this.user.gender = this.signForm.value.gender;

  }

  resetForm(){
    this.signForm.reset();
  }

  ngOnInit(): void {
  }
}
