import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  private apiUrl = 'https://swapi.dev/api/starships/?page=${page}';
  private imageBase='https://starwars-visual-guide.com/assets/img/';


  constructor(private http: HttpClient) { }

  getDataStarships(page: number): Observable<any>{
    return this.http.get<any>(this.apiUrl).pipe(
      map((data: any) => ({
        ...data,
        results: data.results.map((starship: any) => ({
          ...starship,
          id: this.extractIdFromUrl(starship.url),
        })),
      }))
    )
}

getStarshipById(id: string): Observable<any>{
  return this.http.get(`${this.apiUrl}/${id}/`);

}

  extractIdFromUrl(url: string): string{
    const segments = url.split('/').filter(Boolean);
    console.log(url)
    return segments[segments.length - 1];
}

getStarshipImageUrl(id: string): string {
  return `${this.imageBase}starships/${id}.jpg`;
}

}
