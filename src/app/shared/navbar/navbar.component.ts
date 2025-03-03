import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit, OnDestroy{

  userLoginOn: boolean = false; //para que aparezca o no inicio o cerrar sesion
  isLoading: boolean = true; // Indica si s'està carregant l'estat de l'autenticació
  private authStateUnsubscribe!: () => void;
  private auth: Auth = inject(Auth);

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
    this.authStateUnsubscribe = onAuthStateChanged(this.auth, (user: User | null) => {
        this.userLoginOn = !!user; // Actualitza l'estat de l'usuari
        this.isLoading = false; // Indica que la càrrega ha acabat
        });
      }, 2000); // 2 segons d'espera
    }

  ngOnDestroy(): void {
     // Cancela la subscripció per evitar fuites de memòria
     if (this.authStateUnsubscribe) {
      this.authStateUnsubscribe();
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
