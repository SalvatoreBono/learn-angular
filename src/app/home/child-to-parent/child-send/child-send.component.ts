import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-send',
  templateUrl: './child-send.component.html',
  styleUrls: ['./child-send.component.css'],
})
export class ChildSendComponent implements OnInit {
  @Output() sendData = new EventEmitter();
  myExperience = {
    title: 'Jr Full Stack Web Developer Trainee',
    company_name: 'Boolean',
    logo_company: 'assets/Logo-Boolean.png',
    year: 2023,
    description:
      'I had the opportunity to fully immerse myself in the vast world of web development. This path has been characterized by a focused, hands-on approach focused on cutting-edge methodologies and technologies. One of the most exciting challenges of this path was the opportunity to work both independently and within collaborative teams, where I was able to apply the skills I learned in concrete ways. Our common goal was to replicate some of the well-known web apps in the industry, putting the skills we learned into practice. During the bootcamp, I developed ambitious projects that involved both the front-end and back-end sides of the applications. This allowed me to gain a comprehensive understanding of how web apps work in both aspects and how they are interconnected.',
  };
  constructor() {}

  clickForSendData() {
    this.sendData.emit(this.myExperience);
  }
  ngOnInit(): void {}
}
