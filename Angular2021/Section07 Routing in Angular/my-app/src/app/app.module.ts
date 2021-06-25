import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServersComponent } from './components/servers/servers.component';
import { ServerComponent } from './components/servers/server/server.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { ServersService } from './services/servers-service.service';

import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth-guard.service';
import { AuthService } from './guards/auth-service';
import { CanDeactivateGuard } from './guards/can-component-deactivate';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ServerResolver } from './resolvers/server-resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService,AuthGuard,AuthService,CanDeactivateGuard,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
