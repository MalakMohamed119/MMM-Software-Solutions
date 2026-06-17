import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { StaggerRevealDirective } from '../../shared/directives/stagger-reveal.directive';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-process',
  imports: [SectionTitleComponent, StaggerRevealDirective, RevealDirective],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent {
  readonly langService = inject(LanguageService);
}
