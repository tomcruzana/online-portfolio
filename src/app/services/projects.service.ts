import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  IMG_PATH: String = '../../../assets/portfolio/';
  GITHUB_PATH: String = 'https://github.com/tomcruzana/';

  projects: any = [
    {
      name: 'codeSnip',
      img: this.IMG_PATH + 'x.png',
      link: this.GITHUB_PATH + 'x',
      technologies: ['java', 'spring boot', 'hibernate', 'angular', 'mariadb'],
    },
    {
      name: 'Microservices Website',
      img: this.IMG_PATH + 'x.png',
      link: this.GITHUB_PATH + 'microservices-website',
      technologies: [
        'java',
        'spring boot',
        'hibernate',
        'bootstrap 4',
        'mysql',
      ],
    },
    {
      name: 'Metaverse SG',
      img: this.IMG_PATH + 'x.png',
      link: this.GITHUB_PATH + 'metaverse-sg',
      technologies: ['LSL', 'Java', 'hibernate', 'mysql'],
    },
    {
      name: 'Wi-View Electron App',
      img: this.IMG_PATH + 'wcf.png',
      link: this.GITHUB_PATH + 'wi-view',
      technologies: ['Node', 'Express', 'Electron', 'HTML5', 'CSS3'],
    },
    {
      name: 'Weather Jet',
      img: this.IMG_PATH + 'wj.png',
      link: this.GITHUB_PATH + 'weather-jet',
      technologies: ['Node', 'Express', 'bootstrap 4'],
    },
    {
      name: 'Online Portfolio',
      img: this.IMG_PATH + 'x.png',
      link: this.GITHUB_PATH + 'online-portfolio',
      technologies: ['Angular', 'TypeScript', 'bootstrap 4', 'Firebase'],
    },
    {
      name: 'Motivation Generator',
      img: this.IMG_PATH + 'mg.png',
      link: this.GITHUB_PATH + 'motivation-generator',
      technologies: ['React', 'JavaScript'],
    },
    {
      name: 'Subscription Page',
      img: this.IMG_PATH + 'sp.png',
      link: this.GITHUB_PATH + 'join-us',
      technologies: ['Node', 'Express', 'MySQL'],
    },
    {
      name: 'Interactive Quiz',
      img: this.IMG_PATH + 'iq.png',
      link: '',
      technologies: ['C#', 'Photoshop'],
    },
  ];

  getProjectsService(): any {
    return this.projects;
  }
}
