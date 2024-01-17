import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent implements OnInit {
  My = [
    {
      name: 'Salvatore',
      job: 'Junior Full Stack Web Developer',
      goal: 'My goal is continue learning and growing in this dynamic field',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
