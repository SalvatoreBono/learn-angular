import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(public currentLanguage: TranslateService) {}

  infoLinks = [
    {
      url: 'https://github.com/SalvatoreBono',
      logo: 'assets/github.png',
    },
    {
      url: 'https://www.linkedin.com/in/salvatore-bono-692824255/',
      logo: 'assets/LinkedIn.png',
    },
    {
      url: 'https://mail.google.com/mail/u/0/?fs=1&to=salvatorebono2001@gmail.com&tf=cm',
      logo: 'assets/gmail.png',
    },
    {
      url: 'https://www.instagram.com/salvatore__bono',
      logo: 'assets/Instagram.png',
    },
  ];
  ngOnInit(): void {}
}
