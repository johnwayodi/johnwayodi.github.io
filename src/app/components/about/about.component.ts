import { Component, OnInit, Input } from '@angular/core';
import { About } from '../../interfaces';
import { portfolio } from 'src/app/portfolio';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  about: About;

  constructor() {}

  ngOnInit() {
    this.about = portfolio.about;
  }
}
