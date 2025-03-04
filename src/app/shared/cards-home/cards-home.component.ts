import { CardsHomeService } from './../../services/cards-home.service';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cards-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './cards-home.component.html',
  styleUrls: ['./cards-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsHomeComponent {

  images: string[] = []; // Array per emmagatzemar les URLs de les imatges

  constructor(private cardsHomeService: CardsHomeService) {}

  ngOnInit(): void {
    // Obtenir les imatges del servei
    this.images = this.cardsHomeService.cardsHomeImages();
  }
}
