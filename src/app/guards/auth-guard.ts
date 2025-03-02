import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      // Subscriu-te als canvis d'estat d'autenticació
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        if (user) {
          // Si l'usuari ha iniciat sessió, permet l'accés
          observer.next(true);
          observer.complete();
        } else {
          // Si l'usuari no ha iniciat sessió, redirigeix a la pàgina de login
          this.router.navigateByUrl('/login');
          observer.next(false);
          observer.complete();
        }
      });

      // Retorna una funció de neteja per cancel·lar la subscripció
      return () => unsubscribe();
    }).pipe(
      take(1) // Assegura't que l'Observable es completi després d'emetre un valor
    );
  }
}
