import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment'

import { Router } from '@angular/router';

import { Message } from 'primeng/api';


import { Observable } from 'rxjs';
import { MenuItem, User } from 'src/app/form-builder/models/models';
import { DataMenus} from '../../shared/models/models';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService   {

  private apiUrl = '';
  private httpHeaders = new HttpHeaders().set('accept', 'application/json');


  constructor(private http: HttpClient, private router: Router ) { }

  getCompanies() {
    return this.http.get(this.apiUrl + 'GetCompanies')
        .subscribe(res => res );
}

checkUserName(userName: string) {
    return this.http.get(this.apiUrl + 'CheckUsername/' + userName)
        .subscribe(res => res  );
}

getBranches(companyId: number, userName: string) {
    return this.http.get(this.apiUrl + 'GetBranches/' + companyId + '/' + userName)
    .subscribe(res => res  );
}

getLanguages(domainId: number, appId: number) {
    return this.http.get(this.apiUrl + 'GetDomainValues/' + domainId + '/' + appId)
    .subscribe(res => res  );
}

// login(loginInfo: loginInfo, returnUrl: string) {

//     let header = new Headers();
//     header.append('Content-Type', 'application/x-www-form-urlencoded');
//     let options = new RequestOption();
//     options.headers = header;

//     let body = 'grant_type=password&username=' + loginInfo.userName + '&password=' + loginInfo.password + '&companyId=' + loginInfo.companyId + '&branchId=' + loginInfo.branchId + '&language=' + loginInfo.languageId;

//     return this.http.post(environment.apiUrl + '/token', body, options)
//         .subscribe(res => {
//             // login successful if there's a jwt token in the response
//             let credentials = res ;
//             if (credentials && credentials.access_token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 this.setToken(credentials.access_token);
//                 let user: User = new User();
//                 user.userName = credentials.userName;
//                 user.branchId = credentials.branchId;
//                 user.companyId = credentials.companyId;
//                 user.language = credentials.language;

//                 this.setLoggedInUser(user);
//                 let menus: MenuItem[] = [];
//                 this.getUserMenus().subscribe(
//                     data => {
//                         menus = data;
//                         console.log(menus);
//                     }
//                 );

//                 this.router.navigate([returnUrl]);

//                 return true;
//             }
//             else {
//                 return false;
//             }
//         }
//         )
//         .catch(this.handleErrorObservable);
// }


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
    // this.ws.initializeWizard();
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



  GenerateApplicationMenus(): Observable<DataMenus> {
    debugger;
    let user = this.getLoggedInUser();
    if (user != null) {
      return this.http.get<DataMenus>('http://localhost/CoreApi/api/SecurityIntegrationAPIs.GetAuthorizedMenu?ParentMenuID&ParentApplicationID&username=' + user.userName + '&languageID=' + user.language + '&companyID=' + user.companyId, { headers: this.httpHeaders, responseType: 'json' })
    }
  }

}
