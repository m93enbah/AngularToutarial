import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AlertComponent } from './components/alert/alert.component';

import { PlaceholderDirective } from './directives/placeholder.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class SharedModule {}
