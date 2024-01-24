import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  constructor() {}
  text = '';
  click = '';
  onClick() {
    console.log('You clicked!');
    this.click = 'You clicked!';
  }
  onKeyPress(event: any) {
    console.log(event.target.value);
    this.text = event.target.value;
  }
}
