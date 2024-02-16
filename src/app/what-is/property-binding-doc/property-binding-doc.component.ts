import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-property-binding-doc',
  templateUrl: './property-binding-doc.component.html',
  styleUrls: ['./property-binding-doc.component.css'],
})
export class PropertyBindingDocComponent implements OnInit {
  constructor(public currentLanguage: TranslateService) {}

  ngOnInit(): void {}
}
