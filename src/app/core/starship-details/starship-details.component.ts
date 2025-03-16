
import { Component, signal,inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute }from '@angular/router';
import { FilmsListComponent } from "../films-list/films-list.component";
import { PilotsListComponent } from "../pilots-list/pilots-list.component";
import { ButtonBackComponent } from "../../components/button-back/button-back.component";
import { IStarships } from '../../interfaces/i-starships';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [CommonModule,FilmsListComponent, PilotsListComponent, ButtonBackComponent],
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})

export class StarshipDetailsComponent {

  starship = signal<IStarships>({} as IStarships);
  selectedStarship = this.starship;

  starshipImageUrl = signal<string>('');
  defaultImageUrl: string = 'img/nau.png';
  films = signal<any[]>([]);
  pilots = signal<any[]>([]);

  starshipsService = inject(ApiService);
  route = inject(ActivatedRoute);

  constructor() {
    // Efecte reactiu per reaccionar als canvis en els paràmetres de la ruta
    effect(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.loadStarshipDetails(id);
      }
    });

    // Efecte per avisar si no hi ha dades de la nau
    effect(() => {
      if (!this.starship()) {
        console.warn("⚠️ No hi ha dades disponibles per aquesta nau");
      }
    });
  }

  loadStarshipDetails(id: string): void {
    this.starshipsService.getStarshipById(id).subscribe(
      (starship) => {
        if (starship) {
          this.starship.set(starship);
        }
        if (starship) {
          const starshipId = this.starshipsService.extractIdFromUrl(starship.url);
          this.starshipImageUrl.set(this.starshipsService.getStarshipImageUrl(starshipId));
          this.loadFilms(starship.films);
          this.loadPilots(starship.pilots);
        } else {
          this.starshipImageUrl.set(this.defaultImageUrl);
        }
      },
      (error) => {
        console.error('Error obtenint la nau:', error);
        this.starship.set({} as IStarships);
        this.starshipImageUrl.set(this.defaultImageUrl);
      }
    );
  }

  // Carrega les pel·lícules
  loadFilms(filmUrls: string[]): void {
    if (!filmUrls || filmUrls.length === 0) return;
    this.starshipsService.getFilmsByUrls(filmUrls).subscribe(
      (films) => this.films.set(films),
      (error) => console.error('Error carregant les pel·lícules:', error)
    );
  }

  // Carrega els pilots
  loadPilots(pilotUrls: string[]): void {
    if (!pilotUrls || pilotUrls.length === 0) return;
    this.starshipsService.getPilotsByUrls(pilotUrls).subscribe(
      (pilots) => this.pilots.set(pilots),
      (error) => console.error('Error carregant els pilots:', error)
    );
  }
}

