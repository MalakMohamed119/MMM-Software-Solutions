import { Component } from '@angular/core';
import { COMPANY_INFO } from '../../core/data/company.data';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-whatsapp-fab',
  imports: [],
  templateUrl: './whatsapp-fab.component.html',
})
export class WhatsappFabComponent {
  readonly whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}`;

  constructor(readonly langService: LanguageService) {}
}
