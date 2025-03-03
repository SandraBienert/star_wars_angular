import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from '../../core/starships-list/starships-list.component';
import { UserInterface } from '../../interfaces/user-interface';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth'; // Importa Firebase Auth
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StarshipsListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    userLoginOn : boolean = false;
    userData?: UserInterface;
    private unsubscribeAuthState!: () => void; // Funció de cancel·lació per a onAuthStateChanged
    private auth: Auth = inject(Auth);

    constructor(private router: Router){}

    ngOnInit(): void {
      // Subscriu-te als canvis d'estat d'autenticació
      this.unsubscribeAuthState = onAuthStateChanged(this.auth, (user: User | null) => {
        if (user) {
          // Si l'usuari ha iniciat sessió
          this.userLoginOn = true;
          this.userData = {
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || '',
          };
        } else {
          // Si l'usuari no ha iniciat sessió
          this.userLoginOn = false;
          this.userData = undefined;
        }
  });
    }

    ngOnDestroy(): void {
      // Cancela la subscripció per evitar fuites de memòria
      if (this.unsubscribeAuthState) {
        this.unsubscribeAuthState();
      }
    }
}

