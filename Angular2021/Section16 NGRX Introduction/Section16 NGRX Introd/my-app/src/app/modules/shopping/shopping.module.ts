import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingRoutingModule } from './shopping-routing.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  exports:[ShoppingListComponent, ShoppingEditComponent],
  imports: [
    ShoppingRoutingModule,
    SharedModule
  ]
})
export class ShoppingModule {}
