import { Component, computed, input } from '@angular/core';

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  host: {
    class: 'logo-host',
  },
})
export class LogoComponent {
  size = input<LogoSize>('sm');
  /** @deprecated Use size instead */
  variant = input<'full' | 'compact' | 'hero' | 'mark' | LogoSize | undefined>(undefined);
  alt = input('MMM Software Solutions');

  readonly resolvedSize = computed<LogoSize>(() => {
    const variant = this.variant();
    if (variant === 'full') return 'sm';
    if (variant === 'compact') return 'md';
    if (variant === 'hero') return 'xl';
    if (variant === 'mark') return 'xs';
    if (variant) return variant as LogoSize;
    return this.size();
  });
}
