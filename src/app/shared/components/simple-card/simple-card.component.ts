import { Component, Input } from '@angular/core';
import { CardActions } from './simple-card.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent {
  @Input() class?: string = '';
  @Input() isLoading: boolean = false;
  @Input() title?: string;
  @Input() actions?: CardActions;

  constructor() {}
}
