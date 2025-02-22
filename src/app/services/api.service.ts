import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'https://swapi.dev/api/starships';
  private imageBase='https://starwars-visual-guide.com/assets/';
  private imageReserva= '/public/img/nauReserva.png'


  constructor(private http: HttpClient) { }

  getStarshipsData(): Observable<any>{
    return this.http.get<any>(this.apiUrl).pipe(
      map((data: any) => ({
        ...data,
        results: data.results.map((starship: any) => ({
          ...starship,
          id: this.extractIdFromUrl(starship.url),
        })),
      }))
    )}

    getStarshipById(id: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/${id}/`);
    }

    extractIdFromUrl(url: string): string {
      const segments = url.split('/').filter(Boolean);
      return segments[segments.length - 1];
    }

    async getStarshipImageUrl(id: string): Promise<string> {
      const apiImageUrl = `${this.imageBase}starships/${id}.jpg`;

      try {
        // Fes una petició HEAD per comprovar si la imatge existeix
        await this.http.head(apiImageUrl).toPromise();
        return apiImageUrl; // Retorna la URL de la imatge de la API si existeix
      } catch (error) {
        return this.imageReserva; // Retorna la imatge de reserva si hi ha un error
      }
    }

    }



