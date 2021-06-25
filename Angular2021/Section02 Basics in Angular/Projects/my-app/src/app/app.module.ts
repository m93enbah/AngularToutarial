import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { Assigment01Component } from './components/assigment01/assigment01.component';
import { Assigment2Component } from './components/assigment2/assigment2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assigment01Component,
    Assigment2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
