import { NgModule } from '@angular/core';

import { RuleBuilderRoutingModule } from './rule-builder-routing.module';
import { RuleBuilderComponent } from './rule-builder/rule-builder.component';
import { BasicEditorComponent} from './basic-editor/basic-editor.component';
import { AdvEditorComponent} from './adv-editor/adv-editor.component';
import { PanelComponent } from './panel/panel.component';
import { SharedModule } from '../shared/shared.module';
import { AutoFocusDirective } from './directives/auto-focus.directive';


@NgModule({
  declarations: [
    RuleBuilderComponent,
    PanelComponent,
    BasicEditorComponent,
    AdvEditorComponent,
    AutoFocusDirective
  ],
  imports: [
    RuleBuilderRoutingModule,
    SharedModule
  ]

  
})
export class RuleBuilderModule { }
