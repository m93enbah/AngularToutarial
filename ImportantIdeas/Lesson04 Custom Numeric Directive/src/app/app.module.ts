import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { InputGroupCompComponent } from './components/input-group-comp/input-group-comp.component';                
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {DateDirective} from './directives/date-directive';
 import { StringDirective } from './directives/string.directive';
import { NumericDirective } from './directives/numeric.directive';
import { NumericPie} from './pipes/numeric-pie';
import { BgDirective} from './directives/bg-directive.directive';


import { DecimalPipe, DatePipe, PercentPipe, CurrencyPipe } from '@angular/common';
import { Shape01Component } from './components/shape01/shape01.component';


@NgModule({
  declarations: [
    AppComponent,
    InputGroupCompComponent,
    DateDirective,
    StringDirective,
    NumericDirective,
    NumericPie,
    BgDirective,
    Shape01Component
    ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule,
    

  ],
  providers: [
    NgModel,
    NumericPie,
    
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
