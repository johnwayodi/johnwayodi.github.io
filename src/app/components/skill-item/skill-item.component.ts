import { Component, OnInit, Input } from '@angular/core';
import { SkillItem } from 'src/app/interfaces';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss'],
})
export class SkillItemComponent implements OnInit {
  @Input()
  skill: SkillItem;

  constructor() {}

  ngOnInit() {}
}
