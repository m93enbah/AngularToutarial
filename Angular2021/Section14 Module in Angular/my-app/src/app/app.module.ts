import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { RecipeService } from './services/recipe.service';
import { DataStorageService } from './services/data-storage.service';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    SharedModule
  ],
  providers: [
    // AuthService,
    // RecipeService,
    // DataStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
