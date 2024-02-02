import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-received',
  templateUrl: './parent-received.component.html',
  styleUrls: ['./parent-received.component.css'],
})
export class ParentReceivedComponent implements OnInit {
  isTrue = false;
  myExperience: any;
  receiveDataFromTheChild(value: any) {
    this.isTrue = true;
    this.myExperience = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
