import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[fxLayout]',
  standalone: false,
})
export class FxLayoutDirective implements OnInit {
  @Input({ required: true }) fxLayout!: string;
  @Input() fxLayoutGap = '0';
  @Input() fxLayoutAlign = 'normal';

  constructor(public elementRef: ElementRef<HTMLElement>) {
    elementRef.nativeElement.style.display = 'flex';
  }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.flexFlow = this.fxLayout;
    const gaps = this.fxLayoutGap.split(' ');
    this.elementRef.nativeElement.style.margin = `0 -${gaps[0]} -${
      gaps[1] ?? gaps[0]
    } 0`;
    const layoutAligns = this.fxLayoutAlign.split(' ');
    this.elementRef.nativeElement.style.justifyContent = layoutAligns[0];
    if (layoutAligns[1])
      this.elementRef.nativeElement.style.alignItems = layoutAligns[1];
  }
}
