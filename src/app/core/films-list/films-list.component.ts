import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-films-list',
  imports: [CommonModule],
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css'
})
export class FilmsListComponent {

  @Input() filmUrls: string[] = [];
  films: any[] = [];


  constructor(private apiService: ApiService) { }

  ngOnChanges(): void {
    if (this.filmUrls?.length) {
      this.loadFilms();
    }
  }

  private loadFilms(): void {
    this.apiService.getFilmsByUrls(this.filmUrls).subscribe(
      (films) => (this.films = films)
    );
  }

  getFilmImage(id: string): string {
    return this.apiService.getFilmImageUrl(id);
  }
}
