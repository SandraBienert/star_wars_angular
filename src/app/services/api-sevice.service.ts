import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiSeviceService {

  private apiUrl = 'https://swapi.dev/';
  private apiNaus = 'api/starships';
  private imageBase='https://starwars-visual-guide.com/assets/img/';



  constructor(http: HttpClient) { }
}
