import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as copy from 'copy-to-clipboard';

import { Contact } from 'src/app/interfaces';
import { portfolio } from 'src/app/portfolio';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  contacts: Contact[];
  email: string;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.contacts = portfolio.contacts;
    this.email = portfolio.user.email;
  }

  copyMail(email: string) {
    copy(email);
    this._snackBar.open('Email copied', '', {
      duration: 2000,
    });
  }
}
