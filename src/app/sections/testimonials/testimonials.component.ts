import { Component, inject } from '@angular/core';
import { StaggerRevealDirective } from '../../shared/directives/stagger-reveal.directive';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-testimonials',
  imports: [SectionTitleComponent, StaggerRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  readonly langService = inject(LanguageService);
}
