import { Injectable } from '@angular/core';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment'
import { loginInfo, User, MenuItem, SystemMenus, DataMenus } from '../../models/data-models'
import { Router } from '@angular/router';
// import { WizardService } from './wizard.service';
import { Message, SelectItem } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthenticationService {

  private apiUrl = environment.apiUrl + '/api/v1/Helper/';
  private httpHeaders = new HttpHeaders().set('accept', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  getCompanies() {
    return this.http.get<SelectItem[]>(this.apiUrl + 'GetCompanies', { headers: this.httpHeaders, responseType: 'json' });
  }

  checkUserName(userName: string) {
    return this.http.get<User>(this.apiUrl + 'CheckUsername/' + userName, { headers: this.httpHeaders, responseType: 'json' });
  }

  getBranches(companyId: number, userName: string) {
    return this.http.get<SelectItem[]>(this.apiUrl + 'GetBranches/' + companyId + '/' + userName, { headers: this.httpHeaders, responseType: 'json' });
  }

  getLanguages(domainId: number, appId: number) {
    return this.http.get<SelectItem[]>(this.apiUrl + 'GetDomainValues/' + domainId + '/' + appId, { headers: this.httpHeaders, responseType: 'json' });
  }

  //login(loginInfo: loginInfo, returnUrl: string) {

  //let header = new Headers();
  //header.append('Content-Type', 'application/x-www-form-urlencoded');
  //let options = new RequestOptions();
  //options.headers = header;

  //let body = 'grant_type=password&username=' + loginInfo.userName + '&password=' + loginInfo.password + '&companyId=' + loginInfo.companyId + '&branchId=' + loginInfo.branchId + '&language=' + loginInfo.languageId;

  //return this.http.post(environment.apiUrl + '/token', body, options)
  //  .map(res => {
  //    // login successful if there's a jwt token in the response
  //    let credentials = res.json();
  //    if (credentials && credentials.access_token) {
  //      // store user details and jwt token in local storage to keep user logged in between page refreshes
  //      this.setToken(credentials.access_token);
  //      let user: User = new User();
  //      user.userName = credentials.userName;
  //      user.branchId = credentials.branchId;
  //      user.companyId = credentials.companyId;
  //      user.language = credentials.language;

  //      this.setLoggedInUser(user);
  //      let menus: MenuItem[] = [];
  //      this.getUserMenus().subscribe(
  //        data => {
  //          menus = data;
  //          console.log(menus);
  //        }
  //      );

  //      this.router.navigate([returnUrl]);

  //      return true;
  //    }
  //    else {
  //      return false;
  //    }
  //  })
  //  .catch(this.handleErrorObservable);
  //}


  public handleErrorObservable(response: Response | any) {
    let errorMessages: Message[] = [];
    let body = JSON.parse(response.text());
    let errorSubject = body.error ? body.error : "Error";
    let errorDetails = body.error_description ? body.error_description : "Error has occured";

    errorMessages.push({ severity: "error", summary: errorSubject, detail: errorDetails });
    return Observable.throw(errorMessages);

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
    debugger;
    let user = this.getLoggedInUser();


    return this.http.get<MenuItem[]>('http://localhost/CoreApi/api/SecurityIntegrationAPIs.GetAuthorizedMenu?ParentMenuID&ParentApplicationID=8&username=ADMIN&languageID=1&companyID=1', { headers: this.httpHeaders, responseType: 'json' })

    // return Observable.throw(userMenus);

  }

  GenerateApplicationMenus(): Observable<DataMenus> {
    debugger;
    let user = this.getLoggedInUser();
    if (user != null) {
      return this.http.get<DataMenus>('http://localhost/CoreApi/api/SecurityIntegrationAPIs.GetAuthorizedMenu?ParentMenuID&ParentApplicationID&username=' + user.userName + '&languageID=' + user.language + '&companyID=' + user.companyId, { headers: this.httpHeaders, responseType: 'json' })
    }
  }

  getLoggedInUser(): User {

    if (localStorage['loggedInUser']) {
      return <User>JSON.parse(localStorage['loggedInUser']);
    }
    else {
      this.logout();
      return null;
    }

  }

  removeLoggedInUser() {
    window.localStorage.removeItem('loggedInUser');
  }

  getToken(): String {
    if (localStorage['access_token']) {
      return window.localStorage['access_token'];
    }
    else {
      this.logout();
      return null;
    }
  }

  setToken(token: String) {
    window.localStorage['access_token'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('access_token');
  }


}

