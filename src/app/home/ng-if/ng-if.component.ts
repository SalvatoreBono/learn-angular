import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  isVisible = true;
  constructor(public currentLanguage: TranslateService) {}
  clickForTrue() {
    this.isVisible = true;
  }
  clickForFalse() {
    this.isVisible = false;
  }

  ngOnInit(): void {}
}
