import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "../topbar/topbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
