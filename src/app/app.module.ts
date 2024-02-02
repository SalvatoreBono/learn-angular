import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentReceivedComponent } from './parent-received/parent-received.component';
import { ChildSendComponent } from './child-send/child-send.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
