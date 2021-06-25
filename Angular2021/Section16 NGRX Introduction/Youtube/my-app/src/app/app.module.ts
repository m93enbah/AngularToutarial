import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './app.material.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './Service/in-memory.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './Store/Effects/movie.effects';

import { reducers,metaReducers } from './Store/Reducers/config/config.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { movieReducer, userReducer } from './Store/Reducers/movie.reducers';
// import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [AppComponent, MovieListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),

    //dont set store dev tools module before the Store module (the order is important) 
    //it will store reducer on your module

   StoreModule.forRoot(reducers, { metaReducers }),
    //StoreModule.forRoot({ movies: movieReducer, user: userReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    //we inject effects 
    EffectsModule.forRoot([MovieEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
