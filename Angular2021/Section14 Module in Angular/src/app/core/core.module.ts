import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './components/auth/auth.component';
import { DataStorageService } from '../recipes/services/data-storage.service';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent],
  providers: [
    AuthService,
    DataStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  imports: [SharedModule, CoreRoutingModule],
})
export class CoreModule {}
