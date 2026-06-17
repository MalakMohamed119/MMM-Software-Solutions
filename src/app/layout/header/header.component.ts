import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { COMPANY_INFO } from '../../core/data/company.data';
import { LanguageService } from '../../core/i18n/language.service';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  readonly company = COMPANY_INFO;
  readonly langService = inject(LanguageService);
  private readonly platformId = inject(PLATFORM_ID);

  menuOpen = signal(false);
  scrolled = signal(false);
  activeFragment = signal<string | null>(null);

  private readonly sectionIds = ['services', 'process', 'about', 'projects', 'contact'];
  private scrollRaf = 0;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => this.updateActiveSection());
    }
  }

  ngOnDestroy(): void {
    if (this.scrollRaf) {
      cancelAnimationFrame(this.scrollRaf);
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.scrollRaf) {
      cancelAnimationFrame(this.scrollRaf);
    }

    this.scrollRaf = requestAnimationFrame(() => this.updateActiveSection());
  }

  isActive(fragment: string): boolean {
    return this.activeFragment() === fragment;
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleLanguage(): void {
    this.langService.toggle();
    this.closeMenu();
  }

  private updateActiveSection(): void {
    const offset = window.innerHeight * 0.35;
    const scrollPos = window.scrollY + offset;
    let current: string | null = null;

    for (const id of this.sectionIds) {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollPos) {
        current = id;
      }
    }

    this.activeFragment.set(current);
  }
}
