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
      degree: 'MS Information Technology, Software Development',
      school: 'american public university',
      year: '2020',
    },
    {
      thumb: this.IMG_PATH + 'cap.png',
      degree: 'BS Information Technology',
      school: 'CAP college',
      year: '2017',
    },
    {
      thumb: this.IMG_PATH + 'sti.png',
      degree: 'Diploma in Computer and Electronics Technology',
      school: 'system technology institute college',
      year: '2011',
    },
  ];

  workExperiences: any[] = [
    {
      thumb: this.IMG_PATH + 'infosys.png',
      degree: 'Associate Software Developer',
      school: 'Infosys Ltd',
      year: '2021-2022',
    },
    {
      thumb: this.IMG_PATH + 'custom.png',
      degree: 'Configuration Leader',
      school: 'Custom America Inc',
      year: '2017 - 2020',
    },
    {
      thumb: this.IMG_PATH + 'sutherland.png',
      degree: 'Consultant',
      school: 'Sutherland Global Services',
      year: '2013 - 2014',
    },
    {
      thumb: this.IMG_PATH + 'stream.png',
      degree: 'Technical Support Professional',
      school: 'Stream Global Services',
      year: '2011 - 2012',
    },
  ];
}
