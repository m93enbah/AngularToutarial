import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentCycleComponent } from './payment-cycle/payment-cycle.component';
import { ClosingPeriodComponent } from './closing-period/closing-period.component';
import { systemCodes } from './system-codes/system-codes.component';
import { DocumentsComponent } from './documents/documents.component';
import { InsuranceClassesComponent } from './insurance-classes/insurance-classes.component';
import { ProductConfigurationComponent } from './shared/controls/product-configuration/product-configuration.component'
import { ClausesComponent } from './clauses/clauses.component'
import { BusinessChannelsComponent } from './business-channels/business-channels.component';

const routes: Routes = [
  { path: 'PaymentCycle', component: PaymentCycleComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: PaymentCycleComponent },
  { path: 'closing', component: ClosingPeriodComponent },
  { path: 'system', component: systemCodes },
  { path: 'Documents', component: DocumentsComponent },
  { path: 'InsuranceClasses', component: InsuranceClassesComponent },
  { path:'customShape',component:ProductConfigurationComponent},
  { path: 'clauses', component: ClausesComponent },
  { path: 'BusinessChannels', component: BusinessChannelsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
