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

@Directive({
  selector: '[appStaggerReveal]',
  standalone: true,
})
export class StaggerRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  stagger = input(90);
  threshold = input(0.1);

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const host = this.el.nativeElement;
    host.style.setProperty('--motion-stagger', `${this.stagger()}ms`);

    const children = host.querySelectorAll('.stagger-item');
    children.forEach((child: Element, index: number) => {
      (child as HTMLElement).style.setProperty('--stagger-i', String(index));
    });

    if (!isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(host, 'is-revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          this.renderer.addClass(host, 'is-revealed');
          this.observer?.disconnect();
        }
      },
      { threshold: this.threshold(), rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
