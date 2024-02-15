import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  constructor(public currentLanguage: TranslateService) {}
  bindingEn = '';
  bindingIt = '';

  onClick() {
    this.bindingEn = 'You clicked!';
    this.bindingIt = 'Hai cliccato!';
  }
  ngOnInit(): void {}
}
