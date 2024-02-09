import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor() {}
  formation = {
    bootcamp: {
      logo: 'assets/Logo-Boolean.png',
      title: 'Boolean',
    },
    title: 'Full-Stack Web Development',
    date: 'May 2023 - Nov 2023',
    description:
      'Intensive 700-Hour Theoretical and Practical course, where I had the opportunity to fully immerse myself in the vast world of web development. This course was characterized by a practical and focused approach, focusing on cutting-edge methodologies and technologies.',
    skills: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'SASS',
      'Vue.js',
      'PHP',
      'MySQL',
      'Laravel',
      'REST',
      'Git',
    ],
  };
}
