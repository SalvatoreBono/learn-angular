import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from 'src/app/translate.service';

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
    description: {
      it: `Ho avuto l'opportunità di immergermi completamente nel vasto mondo dello sviluppo web. Questo percorso è stato caratterizzato da un approccio pratico emirato, focalizzato su metodologie e tecnologie all'avanguardia. Una delle sfide più entusiasmanti di questo percorso è stata la possibilità di lavorare sia in modo autonomo che all'interno di team collaborativi, dove ho potuto applicare in modo concreto le competenze apprese. Il nostro obiettivo comune era replicare alcune delle note web app del settore, mettendo in pratica le competenze acquisite. Nel corso del bootcamp, ho sviluppato progetti ambiziosi che coinvolgevano sia il lato front-end che il lato back-end delle applicazioni. Questo mi ha permesso di acquisire una comprensione completa di come funzionano le applicazioni web in entrambi gli aspetti e di come siano interconnessi.`,
      en: 'I had the opportunity to fully immerse myself in the vast world of web development. This path has been characterized by a focused, hands-on approach focused on cutting-edge methodologies and technologies. One of the most exciting challenges of this path was the opportunity to work both independently and within collaborative teams, where I was able to apply the skills I learned in concrete ways. Our common goal was to replicate some of the well-known web apps in the industry, putting the skills we learned into practice. During the bootcamp, I developed ambitious projects that involved both the front-end and back-end sides of the applications. This allowed me to gain a comprehensive understanding of how web apps work in both aspects and how they are interconnected.',
    },
  };
  constructor(public currentLanguage: TranslateService) {}

  clickForSendData() {
    this.sendData.emit(this.myExperience);
  }
  ngOnInit(): void {}
}
