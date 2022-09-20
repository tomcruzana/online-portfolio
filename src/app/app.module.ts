import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { DownloadComponent } from './components/download/download.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MugshotComponent } from './components/mugshot/mugshot.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SkillsComponent,
    ExperienceComponent,
    DownloadComponent,
    ContactFormComponent,
    PortfolioComponent,
    MugshotComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'contact-form', component: ContactFormComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: '', redirectTo: '/about', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
