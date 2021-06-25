import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { MyEmailValidator } from './validators/my-email-validator';
import { AssigmentComponent } from './components/assigment/assigment.component';
import { CustomValidators } from './validators/custom-validators';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    AssigmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MyEmailValidator,CustomValidators],
  bootstrap: [AppComponent]
})
export class AppModule { }
