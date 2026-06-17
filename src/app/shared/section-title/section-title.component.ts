import { Component, input } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-section-title',
  imports: [RevealDirective],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  label = input('');
  title = input('');
  subtitle = input('');
  centered = input(true);
}
