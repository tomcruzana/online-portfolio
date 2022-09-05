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
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
  contactInfo: any = {
    github: 'https://github.com/tomcruzana',
    linkedin: 'linkedin.com/tomcruzana',
    location: { city: 'bellingham', state: 'wa' },
    email: 'thomascruzana@gmail.com',
    phone: '3609322458',
  };
}
