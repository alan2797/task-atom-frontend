import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appResponsive]',
  standalone: true,
})
export class ResponsiveDirective implements OnInit, OnDestroy {
  @Input('appResponsive') sizes: {
    default?: string;
    sm?: string;
    lg?: string;
  } = {
    default: '100%',
    sm: '50%',
    lg: '33.33%',
  };

  private sub?: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.sub = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
      ])
      .subscribe((state) => {
        let width = this.sizes.default || '100%';

        if (
          state.breakpoints[Breakpoints.Large] ||
          state.breakpoints[Breakpoints.Medium]
        ) {
          width = this.sizes.lg || width;
        } else if (state.breakpoints[Breakpoints.Small]) {
          width = this.sizes.sm || width;
        }

        this.renderer.setStyle(this.el.nativeElement, 'width', width);
        this.renderer.setStyle(this.el.nativeElement, 'padding', '0 8px');
        this.renderer.setStyle(
          this.el.nativeElement,
          'box-sizing',
          'border-box'
        );
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
