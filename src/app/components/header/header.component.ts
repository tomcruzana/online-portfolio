import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name: string = 'thomas cruzana';
  titles: string[] = ['software developer, web developer'];
  IMG_PATH: String = '../../../assets/';

  summary: string =
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

  contactInfo: any = {
    github: 'https://github.com/tomcruzana',
    linkedin: 'linkedin.com/tomcruzana',
    location: { city: 'bellingham', state: 'wa' },
    email: 'thomascruzana@gmail.com',
    phone: '3609322458',
  };

  educationExperiences: any[] = [
    {
      thumb: this.IMG_PATH + 'apus.png',
      title: 'MS Information Technology, Software Development',
      institution: 'american public university',
      year: '2020',
    },
    {
      thumb: this.IMG_PATH + 'cap.png',
      title: 'BS Information Technology',
      institution: 'CAP college',
      year: '2017',
    },
    {
      thumb: this.IMG_PATH + 'sti.png',
      title: 'Diploma in Computer and Electronics Technology',
      institution: 'system technology institute college',
      year: '2011',
    },
  ];

  certificationExperiences: any[] = [
    {
      thumb: this.IMG_PATH + 'oracle.png',
      title: 'OCA - Java SE 11 Developer',
      institution: 'Oracle',
      year: '2022',
    },
    {
      thumb: this.IMG_PATH + 'scrumorg.png',
      title: 'Professional Scrum Master',
      institution: 'Scrum.org',
      year: '2021',
    },
    {
      thumb: this.IMG_PATH + 'snow.png',
      title: 'Certified System Administrator',
      institution: 'ServiceNow',
      year: '2020',
    },
    {
      thumb: this.IMG_PATH + 'ms.png',
      title: 'MTA - Software Development Fundamentals',
      institution: 'Microsoft',
      year: '2018',
    },
  ];

  workExperiences: any[] = [
    {
      thumb: this.IMG_PATH + 'infosys.png',
      title: 'Associate Software Developer',
      institution: 'Infosys Ltd',
      year: '(2021-2022)',
    },
    {
      thumb: this.IMG_PATH + 'custom.png',
      title: 'Configuration Leader',
      institution: 'Custom America Inc',
      year: '(2017-2020)',
    },
    {
      thumb: this.IMG_PATH + 'sutherland.png',
      title: 'Consultant',
      institution: 'Sutherland Global Services',
      year: '(2013-2014)',
    },
    {
      thumb: this.IMG_PATH + 'stream.png',
      title: 'Technical Support Professional',
      institution: 'Stream Global Services',
      year: '(2011-2012)',
    },
  ];
}
