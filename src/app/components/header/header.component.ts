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

  summary: string =
    "I'm a Full-Stack Java Developer with 5+ years of experience in information systems, application development, and maintenance. I specialize in Java, Spring Boot, Hibernate, and Angular.";

  contactInfo: any = {
    github: 'https://github.com/tomcruzana',
    linkedin: 'linkedin.com/tomcruzana',
    location: { city: 'bellingham', state: 'wa' },
    email: 'thomascruzana@gmail.com',
    phone: '3609322458',
  };
}
