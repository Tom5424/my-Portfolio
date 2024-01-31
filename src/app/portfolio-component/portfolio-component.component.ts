import { Component } from '@angular/core';


@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio-component.component.html',
  styleUrls: ['./portfolio-component.component.scss']
})


export class PortfolioComponentComponent {
  projects = [
    {
      imgProject: 'laptop1.png',
      projectTitle: 'Join',
      technologiesToBuild: 'HTML | SCSS | Angular | Firebase',
      projectDescription: 'A Kanban board like Jira or Tello.',
      linkLiveTest: 'https://tom-petri.net/Join/login',
      linkGithub: 'https://github.com/Tom5424/Join-Angular',
    },

    {
      imgProject: 'laptop2.png',
      projectTitle: 'Sharkie',
      technologiesToBuild: 'HTML | CSS | JavaScript',
      projectDescription: 'A simple jump and run game based on an object-oriented approach. You have to collect coins and defeat the big killer whale at the end of the game.',
      linkLiveTest: 'https://tom-petri.net/Sharkie/',
      linkGithub: 'https://github.com/Tom5424/Sharkie',
    },

    {
      imgProject: 'laptop3.png',
      projectTitle: 'Portfolio Page',
      technologiesToBuild: 'HTML | SCSS | Angular',
      projectDescription: 'My own Webpage contains my build Projects.',
      linkLiveTest: '',
      linkGithub: 'https://github.com/Tom5424/my-Portfolio',
    },
  ];
}
