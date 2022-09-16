import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects: string[] = ["Snippify", "E-Commerce", "Metaverse SG", "Weather Jet", "Motivation Generator", "Subscription Page", "WiFi Credential Fetcher", "Vcard AR", "Battle of the Nerds"];

}
