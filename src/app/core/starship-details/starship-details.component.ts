
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { FilmsListComponent } from "../films-list/films-list.component";
import { PilotsListComponent } from "../pilots-list/pilots-list.component";
import { ButtonBackComponent } from "../../components/button-back/button-back.component";



@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [CommonModule, FilmsListComponent, PilotsListComponent, ButtonBackComponent],
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})

export class StarshipDetailsComponent implements OnInit {

  starship: any = {}; // Inicialitza amb un objecte buit
  starshipImageUrl: string = ''; // Inicialment buida
  defaultImageUrl: string = 'img/nau.png';
  films: any[] = []; // Array per emmagatzemar les pel·lícules
  pilots: any[] = []; // Array per emmagatzemar els pilots


  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.loadStarshipDetails(id);
    }
  }

  loadStarshipDetails(id: string): void {
    this.apiService.getStarshipById(id).subscribe(
      (data) => {
        this.starship = data;
        this.starship.films = this.starship.films || [];  // Assegura que és un array
        this.starship.pilots = this.starship.pilots || [];
      },
      (error) => {
        console.error('Error obtenint les dades de la nau espacial:', error);
        this.starship = { name: 'undefined', model: 'undefined', manufacturer: 'undefined' }; // Valor per defecte
        this.starshipImageUrl = this.apiService.getImageReserva();
      }
    );
  }

  loadStarshipImage(url: string): void {
    const id = this.apiService.extractIdFromUrl(url);
    this.starshipImageUrl = this.apiService.getStarshipImageUrl(id);

    // Verifica si la imatge existeix
    const img = new Image();
    img.onload = () => {
      // La imatge existeix
    };
    img.onerror = () => {
      // La imatge no existeix, utilitza la imatge per defecte
      this.starshipImageUrl = this.defaultImageUrl;
    };
    img.src = this.starshipImageUrl;
  }

   // Carrega les pel·lícules
   loadFilms(filmUrls: string[]): void {
    this.apiService.getFilmsByUrls(filmUrls).subscribe(
      (films) => {
        this.films = films;
      },
      (error) => {
        console.error('Error carregant les pel·lícules:', error);
      }
    );
  }

  // Carrega els pilots
  loadPilots(pilotUrls: string[]): void {
    this.apiService.getPilotsByUrls(pilotUrls).subscribe(
      (pilots) => {
        this.pilots = pilots;
      },
      (error) => {
        console.error('Error carregant els pilots:', error);
      }
    );
  }

}

