import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDirectiveDirective } from './directives/basic-highlight-directive.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PropHighlightDirective } from './directives/prop-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirectiveDirective,
    BetterHighlightDirective,
    PropHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
