import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  variant = input<RevealVariant>('up');
  delay = input(0);
  threshold = input(0.12);

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const host = this.el.nativeElement;
    this.renderer.addClass(host, 'reveal');
    this.renderer.addClass(host, `reveal--${this.variant()}`);
    host.style.setProperty('--reveal-delay', `${this.delay()}ms`);

    if (!isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(host, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          this.renderer.addClass(host, 'is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: this.threshold(), rootMargin: '0px 0px -48px 0px' }
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
