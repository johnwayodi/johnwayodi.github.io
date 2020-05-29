import { Component, OnInit, Input } from '@angular/core';
import { Position } from '../../interfaces';
import { portfolio } from 'src/app/portfolio';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experience: Position[];

  constructor() {}

  ngOnInit() {
    this.experience = portfolio.experience;
  }
}
