import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from 'src/app/modules/shared/components/alert/alert.component';
import { PlaceholderDirective } from 'src/app/modules/shared/directives/placeholder.directive';
import { DataStorageService } from 'src/app/services/data-storage.service';

import { AuthResponseData } from '../../models/dto/auth-resposne-data';
import { AuthService } from '../../../../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  @ViewChild('authForm') authForm: NgForm;
  //for show SignIn , SignUp in view and in the code behind
  isLoginMode: boolean = true;
  //for loading spinner show / hide
  isLoading: boolean = false;
  //to handle error messages and show on the view
  error: string | null = null;

  //used to close subscription for the dyanmic component event emitter
  //we unsubsribe in 2 placees onDestroy when navigate outside the authcomponent , after click close and remove the dyanmic component
  closeSub: Subscription;

  //it will get the first element that use the directive appPlaceHolder
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cmpFactory: ComponentFactoryResolver,
    private dataStorage:DataStorageService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.closeSub?.unsubscribe();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    const email = this.authForm.value.email;
    const pwd = this.authForm.value.password;

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.signin(email, pwd);
    } else {
      authObs = this.authService.signup(email, pwd);
    }

    authObs.subscribe(
      (res: AuthResponseData) => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/recipes'],{relativeTo:this.route});
      },
      (err) => {
        this.error = err;
        this.isLoading = false;
        this.showErrorAlert(this.error!);
      }
    );
    this.authForm.reset();
  }

  onHandleError() {
    this.error = null;
  }

  //we dynamically create alert component
  private showErrorAlert(errMsg: string) {
    const alertCmp = this.cmpFactory.resolveComponentFactory(AlertComponent);
    //angular needs to container ref : is an object managed by angualr which you set reference place to replace the component there

    //it will access to view container ref
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    //we clear any previous component inside the container ref
    hostViewContainerRef.clear();

    //we will attach the new alert component to the container ref
    const compRef = hostViewContainerRef.createComponent(alertCmp);

    compRef.instance.message = errMsg;
    //we have to unsubscribe the subscription becouse the component is then removed from DOM element
    //then we clear the container reference from instances
    this.closeSub = compRef.instance.close.subscribe((param) => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
