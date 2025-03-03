import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-starships-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css',],
  providers: [ApiService]
})


export class StarshipsListComponent implements OnInit {
  starships: any[] = [];
  loading = false;
  nextUrl: string | null = null;


  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(url: string | null = null): void {
    if (this.loading) return; // Evita cridades múltiples
    this.loading = true;

    // Utilitza la URL proporcionada o la URL per defecte de l'API
    const apiUrl = url || this.apiService['apiUrl'];

    this.apiService.getStarshipsData(apiUrl).subscribe(
      (data) => {
        this.starships = [...this.starships, ...data.results]; // Afegeix les noves naus a la llista
        this.nextUrl = data.next; // Actualitza la URL de la següent pàgina
        this.loading = false;
      },
      (error) => {
        console.error('Error carregant les naus:', error);
        this.loading = false;
      }
    );
  }

  // Carrega la següent pàgina de naus
  viewMore(): void {
    if (this.nextUrl) {
      this.loadStarships(this.nextUrl); // Passa la URL de la següent pàgina
    }
  }
  }

