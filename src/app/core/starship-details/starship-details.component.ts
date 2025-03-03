
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FilmsListComponent } from "../films-list/films-list.component";


@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [CommonModule, FilmsListComponent],
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})

export class StarshipDetailsComponent implements OnInit {

  starship: any = {}; // Inicialitza amb un objecte buit
  starshipImageUrl: string = ''; // Inicialment buida
  defaultImageUrl: string = 'img/nau.png';


  constructor(private apiService: ApiService, private route: ActivatedRoute, private http: HttpClient) {}

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
        this.getStarshipImage(id); // Crida el mètode per obtenir la imatge
      },
      (error) => {
        console.error('Error obtenint les dades de la nau espacial:', error);
        this.starship = { name: 'undefined', model: 'undefined', manufacturer: 'undefined' }; // Valor per defecte
        this.starshipImageUrl = this.apiService.getImageReserva();
      }
    );
  }

   getStarshipImage(id: string) : void {
    this.apiService.getStarshipImageUrl(id).subscribe(
      (url) => {
        this.starshipImageUrl = url;
      },
      (error) => {
        console.error('Error obtenint la URL de la imatge de la nau espacial:', error);
        this.starshipImageUrl = this.defaultImageUrl; // Utilitza la imatge per defecte en cas d'error
      }
    );
}


}
