import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // degreeInformation: any = {
  //   "school1": [
  //     'https://picsum.photos/50/50',
  //     'https://picsum.photos/50/50',
  //     'https://picsum.photos/50/50',
  //   ],
  //   "degrees": [
  //     'MS Information Technology',
  //     'BS Information Technology',
  //     'Diploma in Computer and Electronics Technology',
  //   ],
  //   "schools": [
  //     'American Public University',
  //     'CAP college',
  //     'System Technology Institute',
  //   ],
  //   "yearDates": ['2020', '2017', '2011'],
  //   "descriptions": ['Concentraion: Enterprise Software Development'],
  // };

  degreeInformation: any = [
    {
      image: 'https://picsum.photos/50/50',
      name: 'american public university',
      degree: 'ms information technology',
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
