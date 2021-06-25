import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { IntegrationRoutingModule } from './integration-routing.module';
import { IntegrationComponent } from './integration/integration.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MappingComponent } from './mapping/mapping.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [IntegrationComponent, ConfigurationComponent, MappingComponent, ActivityComponent],
  imports: [
    CommonModule,
    IntegrationRoutingModule,
    SharedModule
  ]
})
export class IntegrationModule { }
