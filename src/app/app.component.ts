import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarshipsListComponent } from './core/starships-list/starships-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StarshipsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stars_wars';
}
