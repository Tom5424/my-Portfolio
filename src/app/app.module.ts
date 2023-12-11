import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { IntroductionComponentComponent } from './introduction-component/introduction-component.component';
import { AboutMeComponentComponent } from './about-me-component/about-me-component.component';
import { MySkillsComponentComponent } from './my-skills-component/my-skills-component.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileMenuNavbarComponent } from './mobile-menu-navbar/mobile-menu-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    IntroductionComponentComponent,
    AboutMeComponentComponent,
    MySkillsComponentComponent,
    PortfolioComponentComponent,
    ContactComponentComponent,
    FooterComponentComponent,
    ImprintComponent,
    DataprotectionComponent,
    MobileMenuNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
