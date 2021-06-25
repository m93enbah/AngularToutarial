import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment'
import { loginInfo, User, MenuItem, DataMenus, SstCodes} from '../../models/data-models'
import { Router } from '@angular/router';
import { Message, SelectItem } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  private apiUrl = environment.coreApiUrl + 'api/SecurityIntegrationAPIs.';
  private httpHeaders = new HttpHeaders().set('Authorization', 'application/json');
  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

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
    let body = {
      "username": loginInfo.userName,
      "password": loginInfo.password,
      "companyID": loginInfo.companyId,
      "branchID": loginInfo.branchId
    };
    //let body2 = JSON.stringify(loginInfo);
    this.http.post<any>(this.apiUrl + 'IsAuthorized', body , { responseType: 'json' }).subscribe(response => {
      if (response.data === true) {
        let UserName = loginInfo.userName;
        let CompanyID = loginInfo.companyId.toString();

        return this.http.post('https://localhost:44320/api/LogIn/Login', { UserName, CompanyID }).subscribe(res => {
      
        let user: User = new User();
        user.userName = loginInfo.userName;
        user.branchId = loginInfo.branchId;
        user.companyId = loginInfo.companyId;
        user.language = loginInfo.languageId;
          this.setLoggedInUser(user);
          this.setSession(res);
          this.router.navigate([returnUrl]);
        });
      }
     else {
       this.messageService.add({ severity: 'Invailed', summary: 'Error', detail: 'Invaild username or password!' });
     
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
    this.removeLoggedInUser();
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
    }
  }
}
