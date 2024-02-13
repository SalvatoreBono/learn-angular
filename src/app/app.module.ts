import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildSendComponent } from './child-send/child-send.component';
import { ChildComponent } from './child/child.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { DirectiveComponent } from './directive/directive.component';
import { EnterLeaveDirective } from './enter-leave.directive';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { MainComponent } from './main/main.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { ParentReceivedComponent } from './parent-received/parent-received.component';
import { ParentComponent } from './parent/parent.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ServiceComponent } from './service/service.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { VariableTemplateComponent } from './variable-template/variable-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentLifecycleComponent,
    MainComponent,
    HeaderComponent,
    PropertyBindingComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgForComponent,
    ParentComponent,
    ChildComponent,
    ParentReceivedComponent,
    ChildSendComponent,
    VariableTemplateComponent,
    EnterLeaveDirective,
    DirectiveComponent,
    ServiceComponent,
    LateralMenuComponent,
    InfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
