import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Exemple d'una dependència que podries necessitar

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) {
    // Aquí pots inicialitzar el servei
  }

  // Exemple d'un mètode per fer una petició HTTP
  login(username: string, password: string) {
    return this.http.post('/api/login', { username, password });
  }
}
