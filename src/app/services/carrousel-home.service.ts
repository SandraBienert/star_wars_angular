import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrouselHomeService {

  carouselHomeImages(): string[] {
    return [
      '/img/Star-Wars-I.jpeg',
      '/img/Star-Wars-Attack-II.jpeg',
      '/img/Star-Wars-III.jpeg',
      '/img/Star-Wars-IV.jpeg.jpg',
      '/img/Star-Wars-V.jpeg.jpg',
      '/img/Star-Wars-VI.jpeg.jpg',
      '/img/Star-Wars-VIII.jpeg.jpg'
    ];
  }
}
