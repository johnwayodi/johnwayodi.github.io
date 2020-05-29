import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Contact, User } from '../../interfaces';
import { portfolio } from 'src/app/portfolio';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  user: User;
  contacts: Contact[];

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  @ViewChild('bgVideo', { static: false })
  bgVideoRef: ElementRef;

  constructor() {}

  ngOnInit() {
    this.user = portfolio.user;
    this.contacts = portfolio.contacts;
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      backgroundColor: '#232c33',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 30,
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'triangle',
        },
      },
      interactivity: {
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
        },
      },
      retina_detect: false,
    };
    // this.bgVideoRef.pause();
    setTimeout(() => {
      console.log('PAUSE VIDEO');
      this.bgVideoRef.nativeElement.pause();
    }, 19000);
  }
}
