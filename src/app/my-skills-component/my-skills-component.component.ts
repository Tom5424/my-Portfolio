import { Component } from '@angular/core';


@Component({
  selector: 'app-my-skills-component',
  templateUrl: './my-skills-component.component.html',
  styleUrls: ['./my-skills-component.component.scss']
})


export class MySkillsComponentComponent {
  skills = [
    {
      imgSkill: 'html-icon.svg',
      skillName: 'HTML',
    },

    {
      imgSkill: 'css-icon.svg',
      skillName: 'CSS',
    },

    {
      imgSkill: 'js-icon.svg',
      skillName: 'JavaScript',
    },

    {
      imgSkill: 'angular-icon.svg',
      skillName: 'Angular',
    },

    {
      imgSkill: 'ts-icon.svg',
      skillName: 'TypeScript',
    },

    {
      imgSkill: 'firebase-icon.svg',
      skillName: 'Firebase',
    },

    {
      imgSkill: 'api-icon.svg',
      skillName: 'Rest-Api',
    },

    {
      imgSkill: 'material-design-icon.svg',
      skillName: 'Material design',
    },

    {
      imgSkill: 'git-icon.svg',
      skillName: 'Git',
    },

    {
      imgSkill: 'scrum-icon.svg',
      skillName: 'Scrum',
    },
  ];
}
