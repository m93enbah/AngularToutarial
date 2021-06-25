import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Shape01Component } from './components/shape01/shape01.component';
import { Shape02Component } from './components/shape02/shape02.component';
import { Shape03Component } from './components/shape03/shape03.component';
import { Shape04Component } from './components/shape04/shape04.component';
import { Shape05Component } from './components/shape05/shape05.component';
import { Shape06Component } from './components/shape06/shape06.component';
import { Shape07Component } from './components/shape07/shape07.component';
import { Shape08Component } from './components/shape08/shape08.component';
import { Shape09Component } from './components/shape09/shape09.component';
import { Shape10Component } from './components/shape10/shape10.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Shape11Component } from './components/shape11/shape11.component';
import { ProcessBuilderComponent } from './components/processBuilder/process-builder/process-builder.component';
import { ProcessDefinitionComponent } from './components/processBuilder/process-definition/process-definition.component';
import { ProcessDesignerComponent } from './components/processBuilder/process-designer/process-designer.component';

import {HttpClientModule} from '@angular/common/http';
import { ProcessService } from './services/process.service';


import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [
    AppComponent,
    Shape01Component,
    Shape02Component,
    Shape03Component,
    Shape04Component,
    Shape05Component,
    Shape06Component,
    Shape07Component,
    Shape08Component,
    Shape09Component,
    Shape10Component,
    Shape11Component,
    ProcessBuilderComponent,
    ProcessDefinitionComponent,
    ProcessDesignerComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    ButtonModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    TabViewModule,
  
    //StoreModule.provideStore({ todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),


    HttpClientModule
    ],
  providers: [
    MessageService,
    ProcessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
