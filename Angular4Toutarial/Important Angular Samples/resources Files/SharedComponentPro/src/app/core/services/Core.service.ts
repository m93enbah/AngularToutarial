import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { Message, SelectItem } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { MessageService } from 'primeng/api';
import { DataMenus, User, loginInfo } from 'src/app/shared/models/models';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  private apiUrl = 'http://localhost/CoreApi/' + 'api/SecurityIntegrationAPIs.';
  private httpHeaders = new HttpHeaders().set('Authorization', 'application/json');
  constructor(private http: HttpClient, private router: Router
    //, private messageService: MessageService
  ) { }

  getLanguages(domainId: number, appId: number): any {
    return this.http.get<any>(this.apiUrl + 'GetDomainValues?domainID=3144&applicationID=32', { headers: this.httpHeaders, responseType: 'json' });
  }

  GetUserInfo(UserName: String): any {
    return this.http.get<User>(this.apiUrl + 'GetUserInfo?username=' + UserName, { headers: this.httpHeaders, responseType: 'json' });
  }

  getCompanies(): any {
    return this.http.get<any>(this.apiUrl + 'GetCompanies', { headers: this.httpHeaders, responseType: 'json' });
  }

  getBranches(companyID: number, userName: string): any {
    return this.http.get<any>(this.apiUrl + 'GetBranches?companyID=' + companyID, { headers: this.httpHeaders, responseType: 'json' });
  }

  login(loginInfo: loginInfo, returnUrl: string) {
    debugger;
    let body = {
      "username": loginInfo.userName,
      "password": loginInfo.password,
      "companyID": loginInfo.companyId,
      "branchID": loginInfo.branchId
    };
    let body2 = JSON.stringify(loginInfo);
    this.http.post<any>(this.apiUrl + 'IsAuthorized', body, { responseType: 'json' }).subscribe(response => {
      if (response.data === true) {
        debugger;
        this.router.navigate([returnUrl]);


        //let UserName = loginInfo.userName;
        //let CompanyID = loginInfo.companyId.toString();
                 

        //return this.http.post('https://localhost:44307/api/LogIn/Login', { UserName, CompanyID }).subscribe(res => {
        //  debugger;
        //  let user: User = new User();
        //  user.userName = loginInfo.userName;
        //  user.branchId = loginInfo.branchId;
        //  user.companyId = loginInfo.companyId;
        //  user.language = loginInfo.languageId;
        //  this.setLoggedInUser(user);
        //  this.setSession(res);
        //  this.router.navigate([returnUrl]);
        //});
      //}
      //else {
      //  this.messageService.add({ severity: 'Invailed', summary: 'Error', detail: 'Invaild username or password!' });

      }
    });
  }

  private setSession(authResult: any) {
    localStorage.setItem('id_token', authResult.idToken);
  }
  ngOnDestroy() {
    document.body.className = "";
  }

  getExpiration() {
    const expiration: string = localStorage.getItem("expires_at") || '';
    const expiresAt = expiration && JSON.parse(expiration);
    return new Date(expiresAt);
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  setLoggedInUser(user: any) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
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
    if (localStorage['id_token']) {
      return window.localStorage['id_token'];
    }
    else {
      this.logout();
      return null;
    }
  }

  destroyToken() {
    window.localStorage.removeItem('id_token');
  }



  GenerateApplicationMenus(): Observable<DataMenus> {   
    let user = this.getLoggedInUser();
    if (user != null) {
      return this.http.get<DataMenus>(this.apiUrl +'GetAuthorizedMenu?ParentMenuID&ParentApplicationID&username=' + user.userName + '&languageID=' + user.language + '&companyID=' + user.companyId, { headers: this.httpHeaders, responseType: 'json' })

    //  return this.http.get<DataMenus>(this.apiUrl + 'GetAuthorizedMenu?ParentMenuID&ParentApplicationID&username=admin&languageID=1&companyID=1', { headers: this.httpHeaders, responseType: 'json' })
    }
  }


}

