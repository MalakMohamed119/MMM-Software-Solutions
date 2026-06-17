import { Component, input } from '@angular/core';
import { COMPANY_INFO } from '../../core/data/company.data';

@Component({
  selector: 'app-social-icons',
  imports: [],
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.scss',
  host: {
    class: 'social-icons-host',
    '[class.social-icons-host--large]': 'large()',
  },
})
export class SocialIconsComponent {
  readonly company = COMPANY_INFO;
  readonly mailto = `mailto:${COMPANY_INFO.email}`;
  readonly whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}`;
  readonly phoneUrl = `tel:${COMPANY_INFO.phone}`;
  large = input(false);
}
