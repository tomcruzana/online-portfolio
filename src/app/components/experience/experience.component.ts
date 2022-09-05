import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  degreeInformation: any = [
    {
      image: 'https://picsum.photos/50/50',
      name: 'american public university',
      degree: 'master of science - information technology',
      year: '2020',
      description: 'concentration: enterprise software development',
    },
    {
      image: 'https://picsum.photos/50/50',
      name: 'cap college',
      degree: 'ba information technology',
      year: '2017',
      description: '',
    },
    {
      image: 'https://picsum.photos/50/50',
      name: 'system technology institute',
      degree: 'diploma in computer and electronics technology',
      year: '2011',
      description: '',
    },
  ];
}
