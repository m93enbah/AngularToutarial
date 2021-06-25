import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomainId, Application, loginInfo } from '../models/data-models'
import { SelectItem } from 'primeng/api';
import { CommonService } from '../shared/services/common.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CoreService } from '../shared/services/core.service';

@Component({
  selector: 'css-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loading = false;
  returnUrl: string;
  companies: any[] = [];
  branches: any[] = [];
  languages: SelectItem[];
  loginInfo: loginInfo = new loginInfo();
  currentYear: number;
  loginForm: FormGroup;
  userInfo: any;
  constructor(
    private route: ActivatedRoute,
    private cs: CommonService,
    private coreService: CoreService) { }

  ngOnInit() {
    document.body.className = "body-login-background";
    // reset login status
    this.coreService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.coreService.getCompanies().subscribe(data => {
      this.companies = data.data;
    });

    this.coreService.getLanguages(DomainId.Languages, Application.iCore3).subscribe(languages => {
      this.languages = languages.data;
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

    usernameChange$.subscribe(userName => {
      this.coreService.GetUserInfo(userName).subscribe
        (
        user => {
          let defaultCompanyId = 1;
          company.setValue(defaultCompanyId);
          language.setValue(user.language);
          this.getBranches(defaultCompanyId, userName);
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
    this.coreService.getBranches(companyId, username).subscribe(
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

    let formValue = this.loginForm.value;
    this.loginInfo.companyId = formValue.company;
    this.loginInfo.branchId = formValue.branch;
    this.loginInfo.languageId = formValue.language;
    this.loginInfo.userName = formValue.userName;
    this.loginInfo.password = formValue.password;
    if (formValue.userName && formValue.password) {
      this.coreService.login(this.loginInfo, this.returnUrl);
     
    }
  }


}
