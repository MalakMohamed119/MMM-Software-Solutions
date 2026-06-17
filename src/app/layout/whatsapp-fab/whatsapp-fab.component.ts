import { Component } from '@angular/core';
import { COMPANY_INFO } from '../../core/data/company.data';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-whatsapp-fab',
  imports: [],
  templateUrl: './whatsapp-fab.component.html',
  styleUrl: './whatsapp-fab.component.scss',
})
export class WhatsappFabComponent {
  readonly company = COMPANY_INFO;
  readonly whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}`;
}
