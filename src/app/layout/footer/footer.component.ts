import { Component, inject } from '@angular/core';
import { COMPANY_INFO } from '../../core/data/company.data';
import { LanguageService } from '../../core/i18n/language.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LogoComponent } from '../../shared/logo/logo.component';
import { SocialIconsComponent } from '../../shared/social-icons/social-icons.component';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent, SocialIconsComponent, RevealDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly company = COMPANY_INFO;
  readonly langService = inject(LanguageService);
  readonly year = new Date().getFullYear();
}
