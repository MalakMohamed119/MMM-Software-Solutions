import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { StaggerRevealDirective } from '../../shared/directives/stagger-reveal.directive';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-about',
  imports: [SectionTitleComponent, RevealDirective, StaggerRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly langService = inject(LanguageService);
}
