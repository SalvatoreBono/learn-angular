import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-received',
  templateUrl: './parent-received.component.html',
  styleUrls: ['./parent-received.component.css'],
})
export class ParentReceivedComponent implements OnInit {
  isTrue = false;
  myExperience = {
    title: '',
    company_name: '',
    logo_company: '',
    year: null,
    description: '',
  };
  receiveDataFromTheChild(value: any) {
    this.isTrue = true;
    this.myExperience = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
