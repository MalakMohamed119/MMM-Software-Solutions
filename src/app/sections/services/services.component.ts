import { Component, inject } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { StaggerRevealDirective } from '../../shared/directives/stagger-reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-services',
  imports: [SectionTitleComponent, StaggerRevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly langService = inject(LanguageService);
}
