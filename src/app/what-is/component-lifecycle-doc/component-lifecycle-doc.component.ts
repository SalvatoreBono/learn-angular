import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-component-lifecycle-doc',
  templateUrl: './component-lifecycle-doc.component.html',
  styleUrls: ['./component-lifecycle-doc.component.css'],
})
export class ComponentLifecycleDocComponent implements OnInit {
  constructor(public currentLanguage: TranslateService) {}

  ngOnInit(): void {}
}
