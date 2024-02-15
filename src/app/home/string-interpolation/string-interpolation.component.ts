import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent implements OnInit {
  my = {
    name: 'Salvatore',
    job: 'Junior Full Stack Web Developer',
    goal: {
      it: 'Il mio obiettivo è continuare a imparare e crescere in questo campo dinamico.',
      en: 'My goal is continue learning and growing in this dynamic field',
    },
  };

  constructor(public currentLanguage: TranslateService) {}

  ngOnInit(): void {}
}
