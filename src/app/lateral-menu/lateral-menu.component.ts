import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css'],
})
export class LateralMenuComponent implements OnInit {
  routes = [
    {
      path: '',
      title: 'Home',
    },
    {
      path: 'what-is-component-lifecycle-doc',
      title: 'Component Lifecycle',
    },
    {
      path: 'what-is-string-interpolation',
      title: 'String Interpolation',
    },
    {
      path: 'what-is-property-binding',
      title: 'Property Binding',
    },
    {
      path: 'what-is-event-binding',
      title: 'Event Binding',
    },
    {
      path: 'what-is-two-way-binding',
      title: 'Two-Way Binding',
    },
    {
      path: 'what-is-ngif',
      title: 'NGIF',
    },
    {
      path: 'what-is-ngfor',
      title: 'NGFOR',
    },
    {
      path: 'what-is-parent-to-child',
      title: 'Parent to Child',
    },
    {
      path: 'what-is-child-to-parent',
      title: 'Child to Parent',
    },
    {
      path: 'what-is-variable-template',
      title: 'Variable Template',
    },
    {
      path: 'what-is-directive',
      title: 'Directive',
    },
    {
      path: 'what-is-service',
      title: 'Service',
    },
  ];
  sideBarOpen = true;
  constructor(public currentLanguage: TranslateService) {}
  onClick() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {}
}
