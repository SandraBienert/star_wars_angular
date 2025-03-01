import { Injectable } from '@angular/core';
import { loginRequest } from './loginRequest.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserInterface } from '../../interfaces/user-interface'; // Correct the import path for userInterface

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials:loginRequest): Observable<UserInterface> {
    return this.http.get<UserInterface>('/data/data.json').pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    if(error.status===0){
      console.error('se ha producido un error', error.error);
    }else{
      console.error('backend restornó el codigo de estado', error.status, error.error)
    }
    return throwError( () => new Error('Algo falló. Intentalo de nuevo'))
  }
}
