import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from '../../core/starships-list/starships-list.component';
import { UserInterface } from '../../interfaces/user-interface';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth'; // Importa Firebase Auth
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';



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
    private authStateSubscription!: Subscription; // Subscripció per a l'estat d'autenticació

    constructor(private auth: Auth, private router: Router){}

    ngOnInit(): void {
       // Subscriu-te als canvis d'estat d'autenticació
    this.authStateSubscription = new Subscription(() => {
      onAuthStateChanged(this.auth, (user: User | null) => {
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
    });
    }

    ngOnDestroy(): void {
    // Cancela la subscripció per evitar fuites de memòria
    if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
    }
}
}
