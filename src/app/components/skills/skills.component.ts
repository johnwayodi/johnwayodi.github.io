import { Component, OnInit } from '@angular/core';

import { Skills } from 'src/app/interfaces';
import { portfolio } from 'src/app/portfolio';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skills;
  skillState: boolean;
  frameState: boolean;
  progState: boolean;

  ngOnInit() {
    this.skills = portfolio.skills;
  }
}
