import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthResponseData } from '../models/dto/auth-resposne-data';
import {throwError} from 'rxjs';
import { Router } from '@angular/router';
import { Signin } from '../models/signin';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey: string = 'AIzaSyDlndkAleImIpkEPIGT_rZK0RM-KaNjTW8';
  constructor(private http: HttpClient, private router: Router) {}
  //this BehaviourSubject is used in 2 places : Interceptor , header component show login / logout ,etc..
  user = new BehaviorSubject<User>(null);
  //this field is used to fill expiration time from firebase resposne
  private tokenExpirationTimer: any;

  //we use tap in order to execute some action without effect to the main observable request
  signup(usrName: string, pwd: string): Observable<AuthResponseData> {
    let signIn = new Signin(usrName, pwd, true);

    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
        signIn
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthenticate(resData);
        })
      );
  }

  signin(usrName: string, pwd: string): Observable<AuthResponseData> {
    let signIn = new Signin(usrName, pwd, true);

    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        signIn
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthenticate(resData);
        })
      );
  }

  //we reset the subject behavioural and remove local storage item and navigate to /auth page
  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    //to check if the token is expired it will clearTimeout set to zero to execute again
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  //whenever you reload the page it will check for local storage and then store into the behaviour subject as below
  autoSignIn() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    //it will return in case of register or login
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      //in autoSignIn we make calcaoulation of subtract expiration date with the current date 
      const expireationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expireationDuration);
    }
  }

  //its called in two cases : 
  //A-when sign in , signup case : store expireation time from firebase response
  //B-when reload page , called by autoSignIn : calcoulation = expiration time expected - current time 
  autoLogout(expirationDuration: number) {
    console.log(`remain time ${expirationDuration}`);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
  
  private handleAuthenticate(resData: AuthResponseData) {
    var expireIn = (+resData.expiresIn * 1000);
    //we get the time in 1970 + get time differences between now and 1970 in ms * 1000
    const expirationDate = new Date(
      new Date().getTime() + expireIn
    );
    const usr = new User(
      resData.email,
      resData.localId,
      resData.idToken,
      expirationDate
    );
    this.user.next(usr);
    console.log(`remain time ${expireIn}`);
    //to make logout with set timeout of 1000 ms
    this.autoLogout(expireIn);
    //to store javascript object to json into the local storage
    localStorage.setItem('userData', JSON.stringify(usr));
  }

  //handle the error message that comes in case of sign in , sign up
  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg: string = null;
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'This email not found';
        break;

      case 'INVALID_PASSWORD':
        errorMsg = 'Invalid Password';
        break;
      default:
        errorMsg = 'An unknow error occured!';
        break;
    }
    return throwError(errorMsg);
  }
}
