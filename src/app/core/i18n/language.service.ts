import { Injectable, computed, effect, signal } from '@angular/core';
import { Lang, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'mmm-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.loadStoredLang());
  readonly content = computed(() => TRANSLATIONS[this.lang()]);
  readonly isRtl = computed(() => this.lang() === 'ar');

  constructor() {
    effect(() => {
      const lang = this.lang();
      const { meta } = TRANSLATIONS[lang];

      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.title = meta.title;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', meta.description);
      }

      localStorage.setItem(STORAGE_KEY, lang);
    });
  }

  toggle(): void {
    this.lang.update((current) => (current === 'en' ? 'ar' : 'en'));
  }

  private loadStoredLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'ar' ? 'ar' : 'en';
  }
}
