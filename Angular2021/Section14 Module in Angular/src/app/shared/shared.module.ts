import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';

import { PlaceholderDirective } from './directives/placeholder.directive';
import { DropdownDirective } from './directives/dropdown.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class SharedModule {}
