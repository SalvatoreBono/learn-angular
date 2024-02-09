import { Component, OnInit } from '@angular/core';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  constructor(public myFormation: FormationService) {}

  ngOnInit(): void {}
}
