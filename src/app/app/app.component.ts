import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconRegistry, MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { forEach } from 'lodash';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

const iconAssets = [
  { name: 'typeScript', path: '../assets/icons/typescript.svg' },
  { name: 'dart', path: '../assets/icons/dart-logo.svg' },
  { name: 'golang', path: '../assets/icons/golang.svg' },
  { name: 'redux', path: '../assets/icons/redux.svg' },
  { name: 'spring', path: '../assets/icons/spring-logo.svg' },
  { name: 'android', path: '../assets/icons/android.svg' },
  { name: 'flutter', path: '../assets/icons/flutter.svg' },
  { name: 'nestJs', path: '../assets/icons/nestjs.svg' },
  { name: 'profile-pic', path: '../assets/icons/wayodi.svg' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
  @ViewChild('drawer', { static: false })
  drawerRef: MatSidenav;

  @ViewChild('drawerContent', { static: false })
  drawerContentRef: PerfectScrollbarComponent;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    forEach(iconAssets, (icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path),
      );
    });
  }

  scrollToSection(sectionName: string) {
    this.drawerContentRef.directiveRef.scrollToElement(sectionName, 0, 800);

    this.isHandset$.subscribe((result) => {
      if (result) {
        this.drawerRef.close();
      }
    });
  }
}
