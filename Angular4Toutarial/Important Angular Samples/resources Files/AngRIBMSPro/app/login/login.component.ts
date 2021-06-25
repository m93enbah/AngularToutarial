import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { DomainId, Application, loginInfo } from '../models/data-models'
import { SelectItem } from 'primeng/api';
import { CommonService } from '../shared/services/common.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { environment } from '../../environments/environment.prod';
import { CoreService } from '../shared/services/core.service';

@Component({
  selector: 'ribms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loading = false;
  returnUrl: string;
  companies: SelectItem[];
  branches: SelectItem[];
  languages: SelectItem[];
  loginInfo: loginInfo = new loginInfo();
  currentYear: number;
  loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private cs: CommonService,
    private coreService: CoreService) { }

  ngOnInit() {
    document.body.className = "body-login-background";
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.authenticationService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
    this.authenticationService.getLanguages(DomainId.Languages, Application.iCore3).subscribe(languages => {
      this.languages = languages;
    });

    this.currentYear = new Date().getFullYear();
    this.createForm();

  }

  createForm() {

    this.loginForm = this.cs.fb.group({
      userName: new FormControl('', {
        updateOn: 'blur', validators: [
          Validators.required,
        ]
      }),
      password: ['', [Validators.required]],
      company: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      language: ['', [Validators.required]]
    })

    this.bindEvents();
  }

  bindEvents() {
    const loginCtrls = (<any>this.loginForm).controls;

    const company: FormControl = loginCtrls.company;
    const language: FormControl = loginCtrls.language;
    const branch: FormControl = loginCtrls.branch;
    const companyChange$ = loginCtrls.company.valueChanges;
    const usernameChange$ = loginCtrls.userName.valueChanges;

    usernameChange$.subscribe(username => {

      this.authenticationService.checkUserName(username).subscribe
        (
        user => {
          let defaultCompanyId = user.companyId;
          company.setValue(user.companyId);
          language.setValue(user.language);
          //this.getBranches(user.companyId, username);
        },
        err => {
          company.setValue("");
          language.setValue("");
          branch.setValue("");
          this.branches = [];
          console.log(err);
        }
        )

    });

    companyChange$.subscribe(companySelected => {
      const formModel = this.loginForm.value;
      if (formModel.userName != "") {
        this.getBranches(companySelected, formModel.userName);
      }

    });
  }

  getBranches(companyId: number, username: string) {
    const branch: FormControl = (<any>this.loginForm).controls.branch;
    this.authenticationService.getBranches(companyId, username).subscribe(
      branches => {
        this.branches = branches;
        if (this.branches.length > 0)
          branch.setValue(this.branches[0].value);
      },
      err => {
        this.branches = [];
        console.log(err);
      }
    );
  }

  login() {
    //this.coreService.setLanguage(this.loginForm.value.language);
    let formValue = this.loginForm.value;
    this.loginInfo.companyId = +formValue.company;
    this.loginInfo.branchId = +formValue.branch;
    this.loginInfo.languageId = +formValue.language;
    this.loginInfo.userName = formValue.userName;
    this.loginInfo.password = formValue.password;
    this.loading = true;
    console.log(this.loginInfo);
    this.authenticationService.login(this.loginInfo, this.returnUrl)
      .subscribe(
        data => {
          this.loading = false;
        },
        err => {
          this.loading = false;
          this.cs.pushError(err);
        }

      );

  }

  ngOnDestroy() {
    document.body.className = "";
  }

}
