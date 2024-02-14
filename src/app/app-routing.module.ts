import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { ChildToParentComponent } from './what-is/child-to-parent/child-to-parent.component';
import { ComponentLifecycleComponent } from './what-is/component-lifecycle/component-lifecycle.component';
import { DirectiveComponent } from './what-is/directive/directive.component';
import { EventBindingComponent } from './what-is/event-binding/event-binding.component';
import { NgforComponent } from './what-is/ngfor/ngfor.component';
import { NgifComponent } from './what-is/ngif/ngif.component';
import { ParentToChildComponent } from './what-is/parent-to-child/parent-to-child.component';
import { PropertyBindingComponent } from './what-is/property-binding/property-binding.component';
import { ServiceComponent } from './what-is/service/service.component';
import { StringInterpolationComponent } from './what-is/string-interpolation/string-interpolation.component';
import { TwoWayBindingComponent } from './what-is/two-way-binding/two-way-binding.component';
import { VariableTemplateComponent } from './what-is/variable-template/variable-template.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'what-is-component-lifecycle',
    component: ComponentLifecycleComponent,
  },
  {
    path: 'what-is-string-interpolation',
    component: StringInterpolationComponent,
  },
  {
    path: 'what-is-property-binding',
    component: PropertyBindingComponent,
  },
  {
    path: 'what-is-event-binding',
    component: EventBindingComponent,
  },
  {
    path: 'what-is-two-way-binding',
    component: TwoWayBindingComponent,
  },
  {
    path: 'what-is-ngif',
    component: NgifComponent,
  },
  {
    path: 'what-is-ngfor',
    component: NgforComponent,
  },
  {
    path: 'what-is-parent-to-child',
    component: ParentToChildComponent,
  },
  {
    path: 'what-is-child-to-parent',
    component: ChildToParentComponent,
  },
  {
    path: 'what-is-directive',
    component: DirectiveComponent,
  },
  {
    path: 'what-is-service',
    component: ServiceComponent,
  },
  {
    path: 'what-is-variable-template',
    component: VariableTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
