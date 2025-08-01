import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss',
})
export class TitleBarComponent {
  @Input({ required: true }) title!: string;
}
