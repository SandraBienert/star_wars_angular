import { Injectable } from '@angular/core';
import { loginRequest } from './loginRequest.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials:loginRequest): Observable<any>{
    return this.http.get('./data.json');

  }
}
