import { Component, inject } from '@angular/core';
import { StaggerRevealDirective } from '../../shared/directives/stagger-reveal.directive';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-projects',
  imports: [SectionTitleComponent, StaggerRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly langService = inject(LanguageService);
}
