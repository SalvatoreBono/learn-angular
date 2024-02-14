import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  borderColor = '';
  textColor = '';
  constructor() {}

  changeBorderColor(color: string) {
    this.borderColor = color;
  }
  changeTextColor(color: string) {
    this.textColor = color;
  }
  ngOnInit(): void {}
}
