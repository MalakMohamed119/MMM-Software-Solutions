import { Component, inject } from '@angular/core';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { StaggerRevealDirective } from '../../shared/directives/stagger-reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-stats',
  imports: [StaggerRevealDirective, CountUpDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  readonly langService = inject(LanguageService);
}
