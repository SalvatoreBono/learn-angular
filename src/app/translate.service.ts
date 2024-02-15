import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  language = 'en';
  constructor() {}
  setLanguage(string: string) {
    this.language = string;
  }
  getLanguage() {
    return this.language;
  }
}
