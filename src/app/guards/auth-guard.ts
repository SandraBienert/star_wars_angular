import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(): Observable<boolean> {
    // Converteix la promesa de Firebase en un Observable
    return from(
      new Promise<boolean>((resolve) => {
        const unsubscribe = onAuthStateChanged(this.auth, (user) => {
          if (user) {
            // Si l'usuari ha iniciat sessió, permet l'accés
            resolve(true);
          } else {
            // Si l'usuari no ha iniciat sessió, redirigeix a la pàgina de login
            this.router.navigateByUrl('/login');
            resolve(false);
          }
          unsubscribe(); // Cancel·la la subscripció després de la primera resposta
        });
      })
    ).pipe(
      take(1) // Assegura't que l'Observable es completi després d'emetre un valor
    );
  }
}
