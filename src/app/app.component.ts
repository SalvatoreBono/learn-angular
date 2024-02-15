import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn-angular-try';

  constructor(private TranslateService: TranslateService) {}
  setLanguageItalian() {
    this.TranslateService.setLanguage('it');
  }
  setLanguageEnglish() {
    this.TranslateService.setLanguage('en');
  }
}
