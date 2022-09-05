import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  IMG_PATH: String = '../../../assets/';

  educations: any[] = [
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
}
