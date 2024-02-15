import { Component } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css'],
})
export class ComponentLifecycleComponent {
  constructor(public currentLanguage: TranslateService) {}
}
