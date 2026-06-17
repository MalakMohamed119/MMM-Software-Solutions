import { Component, inject } from '@angular/core';
import { StaggerRevealDirective } from '../../shared/directives/stagger-reveal.directive';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-why',
  imports: [SectionTitleComponent, StaggerRevealDirective],
  templateUrl: './why.component.html',
  styleUrl: './why.component.scss',
})
export class WhyComponent {
  readonly langService = inject(LanguageService);
}
