import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})


export class HeaderComponentComponent {
  currentActiveLink = '';
  headerIsSticky = false;


  constructor(public router: Router) {

  }


  activeLink(selectedLink: string) {
    setTimeout(() => {
      this.currentActiveLink = selectedLink;
    }, 400);
  }


  @HostListener('document:scroll')
  makeHeaderSticky() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerIsSticky = true;
    } else {
      this.headerIsSticky = false;
    }
  }


  @HostListener('window:scroll')
  activeLinkBySpecificScrollPosition() {
    if (this.router.url == '/dataprotection' || this.router.url == '/imprint') {
      this.currentActiveLink = '';
      return;
    }

    if (window.scrollY >= 0 && window.scrollY <= 200) {
      this.currentActiveLink = '';
    } else if (window.scrollY >= 630 && window.scrollY < 900) {
      this.currentActiveLink = 'aboutMe';
    } else if (window.scrollY >= 1400 && window.scrollY <= 1460) {
      this.currentActiveLink = 'skills';
    } else if (window.scrollY >= 1900 && window.scrollY < 3500) {
      this.currentActiveLink = 'portfolio';
    } else if (window.scrollY >= 3800) {
      this.currentActiveLink = 'contact';
    }
  }
}
