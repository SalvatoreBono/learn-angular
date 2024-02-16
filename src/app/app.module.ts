import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterLeaveDirective } from './enter-leave.directive';
import { HeaderComponent } from './header/header.component';
import { ChildSendComponent } from './home/child-to-parent/child-send/child-send.component';
import { ParentReceivedComponent } from './home/child-to-parent/parent-received/parent-received.component';
import { ComponentLifecycleComponent } from './home/component-lifecycle/component-lifecycle.component';
import { DirectiveComponent } from './home/directive/directive.component';
import { EventBindingComponent } from './home/event-binding/event-binding.component';
import { MainComponent } from './home/main/main.component';
import { NgForComponent } from './home/ng-for/ng-for.component';
import { NgIfComponent } from './home/ng-if/ng-if.component';
import { ChildComponent } from './home/parent-to-child/child/child.component';
import { ParentComponent } from './home/parent-to-child/parent/parent.component';
import { PropertyBindingComponent } from './home/property-binding/property-binding.component';
import { ServiceComponent } from './home/service/service.component';
import { StringInterpolationComponent } from './home/string-interpolation/string-interpolation.component';
import { TwoWayBindingComponent } from './home/two-way-binding/two-way-binding.component';
import { VariableTemplateComponent } from './home/variable-template/variable-template.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { NgifComponent } from './what-is/ngif/ngif.component';
import { NgforComponent } from './what-is/ngfor/ngfor.component';
import { ParentToChildComponent } from './what-is/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './what-is/child-to-parent/child-to-parent.component';
import { ComponentLifecycleDocComponent } from './what-is/component-lifecycle-doc/component-lifecycle-doc.component';
import { StringInterpolationDocComponent } from './what-is/string-interpolation-doc/string-interpolation-doc.component';
import { PropertyBindingDocComponent } from './what-is/property-binding-doc/property-binding-doc.component';

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
    NgifComponent,
    NgforComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    ComponentLifecycleDocComponent,
    StringInterpolationDocComponent,
    PropertyBindingDocComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
