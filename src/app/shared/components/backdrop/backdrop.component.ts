import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-backdrop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backdrop.component.html',
  styleUrl: './backdrop.component.scss',
})
export class BackdropComponent {
  @Input() open: boolean = false;
  @Input() appentTo = 'body';
  @Output() click = new EventEmitter();
  @ViewChild('backdrop') backdrop!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    document.querySelector(this.appentTo)?.append(this.backdrop.nativeElement);
  }

  onClick() {
    this.click.emit();
  }
}
