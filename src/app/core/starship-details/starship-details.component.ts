import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule, NgIfContext } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IStarships } from '../../interfaces/i-starships';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})

export class StarshipDetailsComponent implements OnInit {

  starship: any = {}; // Inicialitza amb un objecte buit
  loading!: TemplateRef<NgIfContext<any>> | null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.loadStarshipDetails(id);
    }
  }


  loadStarshipDetails(id: string): void{
    this.apiService.getStarshipById(id).subscribe(
        (data) => {
          this.starship = data;
        },
        (error) => {
          console.error('Error obtenint les dades de la nau espacial:', error);
          this.starship = { name: 'Desconegut', model: 'Desconegut', manufacturer: 'Desconegut' }; // Valor per defecte
        }
      );
  }

   getStarshipImage(id: string) : string {
   let imageUrl: string = '';
   this.apiService.getStarshipImageUrl(id).subscribe(
     (url) => {
       imageUrl = url;
     },
     (error) => {
       console.error('Error obtenint la URL de la imatge de la nau espacial:', error);
     }
   );
   return imageUrl;
}
}
