import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  IMG_PATH: String = '../../../assets/';

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
