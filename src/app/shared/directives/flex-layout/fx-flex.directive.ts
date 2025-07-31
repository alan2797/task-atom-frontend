import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[fxFlex]',
  standalone: false,
})
export class FxFlexDirective implements OnInit, OnDestroy {
  @Input() fxFlex?: string = 'auto';
  @Input({ alias: 'fxFlex.xs' }) fxFlexXs?: string;
  @Input({ alias: 'fxFlex.sm' }) fxFlexSm?: string;
  @Input({ alias: 'fxFlex.md' }) fxFlexMd?: string;
  @Input({ alias: 'fxFlex.lg' }) fxFlexLg?: string;
  @Input({ alias: 'fxFlex.xl' }) fxFlexXl?: string;
  destroyed = new Subject<void>();
  breakpointObserver = inject(BreakpointObserver);

  constructor(public elementRef: ElementRef<HTMLElement>) {
    elementRef.nativeElement.style.display = 'inline-block';
    elementRef.nativeElement.style.boxSizing = 'border-box';
  }

  ngOnInit(): void {
    this.fxFlex = this.fxFlex ?? 'auto';
    this.elementRef.nativeElement.style.width = this.fxFlex!;
    const gapAttribute =
      this.elementRef.nativeElement.parentElement?.getAttribute(
        'fxLayoutGap'
      ) ?? '0';
    const gaps = gapAttribute.split(' ');
    this.elementRef.nativeElement.style.padding = `0 ${gaps[0]} ${
      gaps[1] ?? gaps[0]
    } 0`;
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            switch (query) {
              case Breakpoints.XSmall:
                this.elementRef.nativeElement.style.width =
                  this.fxFlexXs ?? this.fxFlex!;
                break;
              case Breakpoints.Small:
                this.elementRef.nativeElement.style.width =
                  this.fxFlexSm ?? this.fxFlex!;
                break;
              case Breakpoints.Medium:
                this.elementRef.nativeElement.style.width =
                  this.fxFlexMd ?? this.fxFlex!;
                break;
              case Breakpoints.Large:
                this.elementRef.nativeElement.style.width =
                  this.fxFlexLg ?? this.fxFlex!;
                break;
              case Breakpoints.XLarge:
                this.elementRef.nativeElement.style.width =
                  this.fxFlexXl ?? this.fxFlex!;
                break;
              default:
                this.elementRef.nativeElement.style.width = this.fxFlex!;
                break;
            }
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
