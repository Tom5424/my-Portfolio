import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mobile-menu-navbar',
  templateUrl: './mobile-menu-navbar.component.html',
  styleUrls: ['./mobile-menu-navbar.component.scss'],
})


export class MobileMenuNavbarComponent {
  mobileNavbarIsOpen = false;
  linkMobileIsActive = false;
  currentActiveLinkMobile = '';


  constructor(public router: Router) {

  }


  openMobileNavbar() {
    if (!this.mobileNavbarIsOpen) {
      this.mobileNavbarIsOpen = true;
      document.body.style.overflowY = 'hidden';
    } else if (this.mobileNavbarIsOpen) {
      this.mobileNavbarIsOpen = false;
      document.body.style.overflowY = 'auto';
    }
  }


  mobileLinkActive(selectedLink: string) {
    setTimeout(() => {
      this.currentActiveLinkMobile = selectedLink;
    }, 400);
  }


  @HostListener('window:scroll')
  activeLinkBySpecificScrollPosition() {
    if (this.router.url == '/dataprotection' || this.router.url == '/imprint') {
      this.currentActiveLinkMobile = '';
      return;
    }

    if (window.scrollY >= 0 && window.scrollY <= 200) {
      this.currentActiveLinkMobile = '';
    } else if (window.scrollY >= 630 && window.scrollY < 900) {
      this.currentActiveLinkMobile = 'aboutMe';
    } else if (window.scrollY >= 1400 && window.scrollY <= 1460) {
      this.currentActiveLinkMobile = 'skills';
    } else if (window.scrollY >= 1900 && window.scrollY < 3500) {
      this.currentActiveLinkMobile = 'portfolio';
    } else if (window.scrollY >= 3800) {
      this.currentActiveLinkMobile = 'contact';
    }
  }
}
