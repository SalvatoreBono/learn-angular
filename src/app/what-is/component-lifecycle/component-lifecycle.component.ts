import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css'],
})
export class ComponentLifecycleComponent implements OnInit {
  constructor(public currentLanguage: TranslateService) {}

  ngOnInit(): void {}
}
