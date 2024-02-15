import { Component } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  constructor(public currentLanguage: TranslateService) {}
  text = '';
  clickEn = '';
  clickIt = '';
  onClick() {
    console.log('You clicked!');
    this.clickEn = 'You clicked!';
    this.clickIt = 'Hai cliccato!';
  }
  onKeyPress(event: any) {
    console.log(event.target.value);
    this.text = event.target.value;
  }
}
