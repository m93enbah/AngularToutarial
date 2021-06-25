import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';

//we have to import Store module in ngrx 
import { shoppingListReducer } from './modules/shopping/reducers/shopping-list.reducer';
import { StoreModule } from '@ngrx/store';
import { reducers } from './modules/shopping/reducers';

@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    SharedModule,
    //we are telling the store module which reducer that used 
    // StoreModule.forRoot({shoppingList:shoppingListReducer})
    StoreModule.forRoot(reducers)
    // StoreModule.forRoot({shoppingList: shoppingListReducer}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
