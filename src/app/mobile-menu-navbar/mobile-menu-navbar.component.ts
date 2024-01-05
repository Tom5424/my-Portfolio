import { Component } from '@angular/core';


@Component({
  selector: 'app-mobile-menu-navbar',
  templateUrl: './mobile-menu-navbar.component.html',
  styleUrls: ['./mobile-menu-navbar.component.scss'],
})


export class MobileMenuNavbarComponent {
  mobileNavbarIsOpen = false;
  linkMobileIsActive = false;
  currentActiveLinkMobile = '';


  openMobileNavbar() {
    if (!this.mobileNavbarIsOpen) {
      this.mobileNavbarIsOpen = true;
      document.body.style.overflowY = 'hidden';
    } else if (this.mobileNavbarIsOpen) {
      this.mobileNavbarIsOpen = false;
      document.body.style.overflowY = 'auto';
      this.currentActiveLinkMobile = '';
    }
  }


  mobileLinkActive(activeLink: any) {
    if (activeLink == 'aboutMe') {
      this.currentActiveLinkMobile = 'aboutMe';
    } else if (activeLink == 'mySkills') {
      this.currentActiveLinkMobile = 'mySkills';
    } else if (activeLink == 'portfolio') {
      this.currentActiveLinkMobile = 'portfolio';
    } else if (activeLink == 'contact') {
      this.currentActiveLinkMobile = 'contact';
    }
  }
}
