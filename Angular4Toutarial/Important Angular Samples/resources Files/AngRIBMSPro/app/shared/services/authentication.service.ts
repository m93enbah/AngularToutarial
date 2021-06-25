import { Injectable } from '@angular/core';
 import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment'
import { loginInfo, User, MenuItem } from '../../models/data-models'
import { Router } from '@angular/router';
// import { WizardService } from './wizard.service';
import { Message, SelectItem } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable()
export class AuthenticationService {

  private apiUrl = environment.apiUrl + 'api/Helper/';
  private httpHeaders = new HttpHeaders().set('accept', 'application/json');
  private user: any;
  constructor(private http: HttpClient, private router: Router) { }

  getCompanies() {
    return this.http.get<SelectItem[]>(this.apiUrl + 'GetCompaniesList', { headers: this.httpHeaders, responseType: 'json' });
  }

  checkUserName(userName: string) {
    return this.http.get<User>(this.apiUrl + 'CheckUsername/' + userName, { headers: this.httpHeaders, responseType: 'json' });
  }

  getBranches(companyId: number, userName: string) {
    return this.http.get<SelectItem[]>(this.apiUrl + 'GetBranchList/' + companyId + '/' + userName, { headers: this.httpHeaders, responseType: 'json' });
  }

  getLanguages(domainId: number, appId: number) {
    return this.http.get<SelectItem[]>(this.apiUrl + 'GetDomainValues/' + domainId + '/' + appId, { headers: this.httpHeaders, responseType: 'json' });
  }

  login(loginInfo: loginInfo, returnUrl: string) {
    this.user = {
      username: loginInfo.userName,
      password: loginInfo.password,
      company: loginInfo.companyId,
      branch: loginInfo.branchId,
      language: loginInfo.languageId
    };
    
    console.log(this.user); 
    console.log(loginInfo);
    let httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    this.loginSharedSetup(this.user);

    return this.http.post<User>(environment.apiUrl + 'api/Account/login', loginInfo, httpHeaders)
      .pipe(map(res => {
        //login successful if there's a jwt token in the response
        let credentials = res;
        console.log(credentials);
        if (credentials ) {
          let user: User = new User();
          // store user details and jwt token in local storage to keep user logged in between page
          this.setToken(credentials.token);
          user.userName = credentials.userName;
          user.branchId = credentials.branchId;
          user.companyId = credentials.companyId;
          user.language = credentials.language;

          this.setLoggedInUser(user);
          let menus: MenuItem[] = [];
          this.getUserMenus().subscribe(
            data => {
              menus = data;
              console.log(menus);
            }
          );

          this.router.navigate([returnUrl]);

          return true;
        } else {
          return false;
        }
      }), catchError(this.handleErrorObservable));
     
    
  }


  public handleErrorObservable(response: Response | any) {
    let errorMessages: Message[] = [];
    let body = JSON.parse(response.text());
    let errorSubject = body.error ? body.error : "Error";
    let errorDetails = body.error_description ? body.error_description : "Error has occured";

    errorMessages.push({ severity: "error", summary: errorSubject, detail: errorDetails });
    return throwError(errorMessages);

  }

  logout() {
    // remove user from local storage to log user out
    this.removeLoggedInUser();
    this.destroyToken();
  }

  setLoggedInUser(user: any) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  getUserMenus(): Observable<MenuItem[]> {
    let userMenus: MenuItem[] = [];
    let user = this.getLoggedInUser();
    if (user != null) {
      return this.http.get<MenuItem[]>(this.apiUrl + 'GetMenus/' + user.userName + '/1/1', { headers: this.httpHeaders, responseType: 'json' })
    }
    return throwError(userMenus);

  }

  getLoggedInUser(): User {

    if (localStorage['loggedInUser']) {
      return <User>JSON.parse(localStorage.getItem('loggedInUser'));
    }
    else {
      this.logout();
      return null;
    }

  }
  //headers: new HttpHeaders({
      //  'Content-Type': 'application/json',
      //}),
  loginSharedSetup(user: any) {
    //let user: User = this.getLoggedInUser();
    //let httpHeaders = {
    //  withCredentials: true
    //};
   
    this.http.post(environment.sharedSetupUrl + 'Account/Login', user, { withCredentials: true })
      .subscribe();
  }

  removeLoggedInUser() {
    localStorage.removeItem('loggedInUser');
  }

  getToken(): string {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    }
    else {
      this.logout();
      return null;
    }
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    console.log(localStorage.getItem('token'));
  }

  destroyToken() {
    localStorage.removeItem('token');
  }


}

