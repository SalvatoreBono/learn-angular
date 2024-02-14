import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css'],
})
export class LateralMenuComponent implements OnInit {
  sideBarOpen = true;
  constructor() {}
  onClick() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {}
}
