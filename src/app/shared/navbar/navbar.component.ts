import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit, OnDestroy{

  userLoginOn: boolean = false; //para que aparezca o no inicio o cerrar sesion
  private authStateSubscription!: Subscription;


  constructor(private auth: Auth, private router: Router) {}

  ngOnInit(): void {
    this.authStateSubscription = new Subscription(() => {
      onAuthStateChanged(this.auth, (user: User | null) => {
        this.userLoginOn = !!user; // Actualitza l'estat de l'usuari
      });
    });
  }

  ngOnDestroy(): void {
     // Cancela la subscripció per evitar fuites de memòria
     if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
    }
  }

  // Mètode per tancar sessió
  async logout() {
    try {
      await this.auth.signOut(); // Tanca la sessió amb Firebase
      this.router.navigateByUrl('/login'); // Redirigeix a la pàgina d'inici de sessió
    } catch (error) {
      console.error('Error en tancar sessió: ', error);
    }
  }
}
