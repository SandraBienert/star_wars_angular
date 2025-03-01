import { Injectable } from '@angular/core';
import { loginRequest } from './loginRequest.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError, BehaviorSubject, tap } from 'rxjs';
import { UserInterface } from '../../interfaces/user-interface'; // Correct the import path for userInterface

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<UserInterface>= new BehaviorSubject<UserInterface>({id:0, email: ''});

  constructor(private http: HttpClient) { }

  login(credentials:loginRequest): Observable<UserInterface> {
    return this.http.get<UserInterface>('/data/data.json').pipe(
      tap(UserData => {
        this.currentUserData.next(UserData);
        this.currentUserLoginOn.next(true);
      }),
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

  get UserData(): Observable<UserInterface> { //subscripcion de componentes a cambios despues de login ok
    return this.currentUserData.asObservable();
  }

  get userLoginOn():  Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
}
}
