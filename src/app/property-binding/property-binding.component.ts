import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  constructor() {}
  btnIsDisabled = true;

  img = 'assets/propertybinding1.jpg';
  counter = 0;
  ngOnInit(): void {
    setInterval(() => {
      this.btnIsDisabled = !this.btnIsDisabled;
    }, 2400);
    setInterval(() => {
      if (this.counter % 2 === 0) {
        this.img = 'assets/propertybinding1.jpg';
      } else {
        this.img = 'assets/propertybinding2.jpg';
      }
      this.counter++;
    }, 2800);
  }
}
