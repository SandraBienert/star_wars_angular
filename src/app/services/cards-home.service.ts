import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CardsHomeService {

  cardsHomeImages(): string[] {
    return [
      '/img/Star-Wars-I.jpeg',
      '/img/Star-Wars-Attack-II.jpeg',
      '/img/Star-Wars-III.jpeg',
      '/img/Star-Wars-IV.jpeg',
      '/img/Star-Wars-V.jpeg',
      '/img/Star-Wars-VI.jpeg',
      '/img/Star-Wars-VIII.jpeg'
    ];
  }
}
