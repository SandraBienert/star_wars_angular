import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { forkJoin, map, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IStarships } from '../interfaces/i-starships';
import { IResultsApi } from '../interfaces/i-results-api';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

http = inject(HttpClient);

starships = signal<IStarships[]>([]);
nextPageUrl = signal<string | null>(null);

private apiUrl = 'https://swapi.dev/api/starships';
private imageBase='https://starwars-visual-guide.com/assets/';
private imageReserva= 'img/nau.png';


getStarshipsData(url: string = this.apiUrl): void {
  this.http.get<IResultsApi>(url).pipe(
    map(response => {
      this.starships.set([...this.starships(), ...response.results]);
      this.nextPageUrl.set(response.next || null);
      return response.results;
    }),
    catchError(error => {
      console.warn('⚠️ Error amb la API principal', error);
      return of([]);
    })
  ).subscribe();
}


getStarships(): Observable<IStarships[]> {
  return this.http.get<IStarships[]>(this.apiUrl);
}

getStarshipById(id: string): Observable<IStarships | null> {
  if (!id) {
    console.warn('ID no encontrado');
    return of(null);
  } else {
    return this.http.get<IStarships>(`${this.apiUrl}/${id}/`).pipe(
      catchError(error => {
        console.error(`Error fetching starship with ID ${id}:`, error);
        return of(null);
      })
    );
  }
}
    extractIdFromUrl(url: string): string {
      const segments = url.split('/').filter(Boolean);
      return segments[segments.length - 1]; // Converteix a número
    }

    getStarshipImageUrl(id: string): string {
      return `${this.imageBase}starships/${id}.jpg`;

    }

    public getImageReserva(): string {
      return this.imageReserva;
    }

    getFilmsByUrls(urls: string[]): Observable<any[]> {
      return this.getEntitiesByUrls(urls, 'films').pipe(
        map((films) =>
          films.map((film) => ({
            ...film,
            episode: `Episode ${film.episode_id}`
          }))
        )
      );
    }

    getPilotsByUrls(urls: string[]): Observable<any[]> {
      return this.getEntitiesByUrls(urls, 'pilots');
    }

    private getEntitiesByUrls(urls: string[], type: string): Observable<any[]> {
      if (urls.length === 0) {
        console.warn(`No URLs provided for ${type}`);
        return of([]);
      }

      const requests = urls.map((url) => this.http.get(url));
      return forkJoin(requests).pipe(
        map((entities: any[]) =>
          entities.map((entity: any) => ({
            ...entity,
            id: this.extractIdFromUrl(entity.url),
          }))
        ),
        catchError((error) => {
          console.error(`Error fetching ${type}:`, error);
          return of([]);
        })
      );
    }

    getFilmImageUrl(id: string): string {
      return `${this.imageBase}films/${id}.jpg`;
    }

    getPilotImageUrl(id: string): string {
      return `${this.imageBase}pilots/${id}.jpg`;
    }
}



