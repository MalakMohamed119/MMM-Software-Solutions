import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { StatsComponent } from '../../sections/stats/stats.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { WhyComponent } from '../../sections/why/why.component';
import { ProcessComponent } from '../../sections/process/process.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    StatsComponent,
    AboutComponent,
    ServicesComponent,
    WhyComponent,
    ProcessComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
