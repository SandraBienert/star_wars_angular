import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from '../../core/starships-list/starships-list.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, StarshipsListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
