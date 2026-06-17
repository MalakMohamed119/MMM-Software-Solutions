import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { SocialIconsComponent } from '../../shared/social-icons/social-icons.component';
import { COMPANY_INFO } from '../../core/data/company.data';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, SectionTitleComponent, SocialIconsComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly company = COMPANY_INFO;
  readonly langService = inject(LanguageService);
  submitted = signal(false);

  form = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  onSubmit(): void {
    this.submitted.set(true);
    this.form = { name: '', email: '', phone: '', message: '' };
    setTimeout(() => this.submitted.set(false), 4000);
  }
}
