import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/models/dto/auth-resposne-data';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  @ViewChild('authForm') authForm:NgForm;
  //for show SignIn , SignUp in view and in the code behind
  isLoginMode: boolean = true;
  //for loading spinner show / hide
  isLoading:boolean = false;
  //to handle error messages and show on the view
  error:string = null;

  constructor(private authService:AuthService,private router:Router) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(){
    const email = this.authForm.value.email;
    const pwd = this.authForm.value.password;

    let authObs:Observable<AuthResponseData>;
    this.isLoading = true;

    if(this.isLoginMode){
     authObs = this.authService.signin(email, pwd);
    }
    else{
     authObs =  this.authService.signup(email, pwd)
    }

    authObs.subscribe((res: AuthResponseData) => {
      console.log(res);
      this.isLoading = false; 
      this.router.navigate(['/recipes']);
    },err => {  
      this.error =err;
      this.isLoading = false;
    });
    this.authForm.reset();
  }
}
