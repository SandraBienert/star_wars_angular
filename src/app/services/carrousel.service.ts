import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrouselService {

  carouselImages(): string[] {
    return [
      '/carrousel/mandalorian.jpg',
      '/carrousel/nau-dintre.jpg',
      '/carrousel/nau-fora.webp',
      '/carrousel/star-wars-batalla.jpg',
      '/carrousel/star-wars-darth-vather.jpg',
      '/carrousel/star-wars-rodona.jpg'

    ];
  }
}
