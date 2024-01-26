import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  skills = [
    'assets/HTML.webp',
    'assets/CSS.svg',
    'assets/Bootstrap.png',
    'assets/JavaScript.png',
    'assets/sass.svg',
    'assets/Vue.js.png',
    'assets/PHP.png',
    'assets/MySQL.svg',
    'assets/Laravel.png',
    'assets/Git.png',
  ];
  constructor() {}

  ngOnInit(): void {}
}
