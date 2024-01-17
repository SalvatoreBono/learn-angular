import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentLifecycleComponent,
    MainComponent,
    HeaderComponent,
    PropertyBindingComponent,
    StringInterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
