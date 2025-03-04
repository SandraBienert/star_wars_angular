import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IStarships } from '../interfaces/i-starships';
import { IResultsApi } from '../interfaces/i-results-api';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'https://swapi.dev/api/starships';
  private imageBase='https://starwars-visual-guide.com/assets/';
  private imageReserva= 'img/nau.png';


  constructor(private http: HttpClient) { }

  getStarshipsData(url: string = this.apiUrl): Observable<any> {
    const apiUrl = url || this.apiUrl; // Utilitza la URL proporcionada o la URL per defecte
    return this.http.get(url).pipe(
      map((data: any) => ({
        ...data,
        results: data.results.map((starship: any) => ({
          ...starship,
          id: this.extractIdFromUrl(starship.url), // Assegura't que el tipus de `id` coincideixi
        })),
      })),
      catchError((error) => {
        console.error('Error obtenint les naus espacials:', error);
        return of({ count: 0, next: null, previous: null, results: [] });
      })
    );
  }

    getStarshipById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/`);
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
      return this.getEntitiesByUrls(urls, 'characters');
    }

    private getEntitiesByUrls(urls: string[], type: string): Observable<any[]> {
      return new Observable<any[]>((observer) => {
        const requests = urls.map((url) => this.http.get(url));
        Promise.all(requests.map((req) => req.toPromise()))
          .then((entities) => {
            observer.next(
              entities.map((entity: any) => ({
                ...entity,
                id: this.extractIdFromUrl(entity.url),
              }))
            );
            observer.complete();
          })
          .catch((error) => {
            observer.error(error);
          });
      });
    }

    getFilmImageUrl(id: string): string {
      return `${this.imageBase}films/${id}.jpg`;
    }

    getPilotImageUrl(id: string): string {
      return `${this.imageBase}characters/${id}.jpg`;
    }
}



