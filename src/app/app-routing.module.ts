import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { ChildToParentComponent } from './what-is/child-to-parent/child-to-parent.component';
import { ComponentLifecycleDocComponent } from './what-is/component-lifecycle-doc/component-lifecycle-doc.component';
import { DirectiveComponent } from './what-is/directive/directive.component';
import { EventBindingComponent } from './what-is/event-binding/event-binding.component';
import { NgforComponent } from './what-is/ngfor/ngfor.component';
import { NgifComponent } from './what-is/ngif/ngif.component';
import { ParentToChildComponent } from './what-is/parent-to-child/parent-to-child.component';
import { PropertyBindingDocComponent } from './what-is/property-binding-doc/property-binding-doc.component';
import { ServiceComponent } from './what-is/service/service.component';
import { StringInterpolationDocComponent } from './what-is/string-interpolation-doc/string-interpolation-doc.component';
import { TwoWayBindingComponent } from './what-is/two-way-binding/two-way-binding.component';
import { VariableTemplateComponent } from './what-is/variable-template/variable-template.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'what-is-component-lifecycle-doc',
    component: ComponentLifecycleDocComponent,
  },
  {
    path: 'what-is-string-interpolation',
    component: StringInterpolationDocComponent,
  },
  {
    path: 'what-is-property-binding',
    component: PropertyBindingDocComponent,
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
