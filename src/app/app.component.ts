import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  ngOnInit(): void {
    AOS.init({
      once: true,
    });
  }


  /**
   * With this function the Window Scroll always top, if the routerLink has been opened.
   * 
   */
  onActive() {
    window.scroll(0, 0);
  }
}
