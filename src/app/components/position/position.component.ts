import { Component, OnInit, Input } from '@angular/core';
import { Position } from '../../interfaces';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
})
export class PositionComponent implements OnInit {
  @Input()
  position: Position;

  constructor() {}

  ngOnInit() {}
}
