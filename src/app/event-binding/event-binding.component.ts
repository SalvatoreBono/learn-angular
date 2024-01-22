import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  constructor() {}

  onClick() {
    console.log('You clicked');
  }
  onKeyPress(event: any) {
    console.log(event.target.value);
  }
}
