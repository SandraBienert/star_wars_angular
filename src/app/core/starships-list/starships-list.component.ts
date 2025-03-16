import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';
import { IStarships } from '../../interfaces/i-starships'; // Adjust the path as necessary


@Component({
  selector: 'app-starships-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css',],
})


export class StarshipsListComponent implements OnInit {

  starships = signal<IStarships[]>([]);
  loading = signal<boolean>(false);
  nextUrl = signal<string | null>(null);

  constructor(private apiService: ApiService){
    this.starships = this.apiService.starships;
    this.nextUrl = this.apiService.nextPageUrl;
  }

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(url?: string): void {
    if (this.loading()) return; // Evita cridades múltiples
    this.loading.set(true);
    this.apiService.getStarshipsData(url); // Crida el mètode del servei per obtenir les dades
    this.loading.set(false);
  }



  // Carrega la següent pàgina de naus
  viewMore(): void {
    const nextUrlValue = this.nextUrl();
  if (nextUrlValue) {
    this.loadStarships(nextUrlValue);
  }
  }
}
