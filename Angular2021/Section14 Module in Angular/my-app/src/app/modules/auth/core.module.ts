import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [SharedModule, CoreRoutingModule]
})
export class CoreModule {}
