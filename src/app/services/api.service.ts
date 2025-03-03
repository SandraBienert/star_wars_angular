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

  getStarshipsData(): Observable<IResultsApi> {
    return this.http.get<IResultsApi>(this.apiUrl).pipe(
      map((data: IResultsApi) => ({
        ...data,
        results: data.results.map((starship: IStarships) => ({
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

  getStarshipById(id: string): Observable<IStarships | null> {
    return this.http.get<IResultsApi>(this.apiUrl).pipe(
      map((data: IResultsApi) => {
        const starship = data.results.find((s: IStarships) => this.extractIdFromUrl(s.url) === +id);
        return starship || null; // Retorna la nau espacial o `null` si no es troba
      }),
      catchError((error) => {
        console.error('Error obtenint la nau espacial:', error);
        return of(null); // Retorna `null` en cas d'error
      })
    );
  }

    extractIdFromUrl(url: string): number {
      const segments = url.split('/').filter(Boolean);
      return parseInt(segments[segments.length - 1], 10); // Converteix a número
    }

    getStarshipImageUrl(id: string): Observable<string> {
      const apiImageUrl = `${this.imageBase}starships/${id}.jpg`;
      return this.http.head(apiImageUrl, {observe: 'response'}).pipe(
        map(() => apiImageUrl),
        catchError(() => of(this.imageReserva))
      );
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



