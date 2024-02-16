import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-string-interpolation-doc',
  templateUrl: './string-interpolation-doc.component.html',
  styleUrls: ['./string-interpolation-doc.component.css'],
})
export class StringInterpolationDocComponent implements OnInit {
  constructor(public currentLanguage: TranslateService) {}

  ngOnInit(): void {}
}
