import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  skills: Array<string> = [
    'java',
    'spring boot',
    'hibernate',
    'angular',
    'mariadb',
    'JDBC',
    'JSP',
    'Servlet',
    'JSON',
    'XML',
    'SOAP',
    'HTTP',
    'REST',
    'Angular',
    'JavaScript',
    'HTML',
    'CSS',
    'Bootstrap 5',
    'Thymeleaf',
    'Oracle',
    'MySQL',
    'JUnit',
    'Jest',
    'SDLC',
    'OOP',
    'OOAD',
    'UML',
    'Agile',
    'Scrum',
    'CICD',
    'Microservices',
    'Git',
    'GitHub',
    'Confluence',
    'Jira',
    'Maven',
    'Jenkins',
    'AWS',
  ];
}
