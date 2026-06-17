import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  appCountUp = input('');
  duration = input(1200);

  private observer?: IntersectionObserver;
  private rafId = 0;
  private started = false;

  ngOnInit(): void {
    const host = this.el.nativeElement;
    const raw = this.appCountUp();
    const match = raw.match(/^(\d+)(.*)$/);

    if (!match || !isPlatformBrowser(this.platformId)) {
      if (isPlatformBrowser(this.platformId)) {
        host.textContent = raw;
      }
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] ?? '';
    host.textContent = `0${suffix}`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !this.started) {
          this.started = true;
          this.animate(target, suffix);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    this.observer.observe(host);
  }

  private animate(target: number, suffix: string): void {
    const start = performance.now();
    const duration = this.duration();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      this.el.nativeElement.textContent = `${current}${suffix}`;

      if (progress < 1) {
        this.rafId = requestAnimationFrame(tick);
      }
    };

    this.rafId = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
