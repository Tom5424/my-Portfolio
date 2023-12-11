import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})


export class HeaderComponentComponent {
  currentActiveLink = '';
  headerIsSticky = false;


  activeLink(currentActiveSection: string) {
    if (currentActiveSection == 'aboutMe') {
      this.currentActiveLink = 'aboutMe';
    } else if (currentActiveSection == 'skills') {
      this.currentActiveLink = 'skills';
    } else if (currentActiveSection == 'portfolio') {
      this.currentActiveLink = 'portfolio';
    }
  }


  @HostListener('document:scroll')
  makeHeaderSticky() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerIsSticky = true;
    } else {
      this.headerIsSticky = false;
    }
  }
}
