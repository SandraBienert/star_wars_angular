import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthSupaService } from '../../services/auth-supa.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy{

userLoginOn: boolean = false; //para que aparezca o no inicio o cerrar sesion
private subscription!: Subscription;

 // Utilitza inject per obtenir les dependències
 private authSupaService = inject(AuthSupaService);
 private router = inject(Router);

  ngOnInit(): void {
   this.subscription = this.authSupaService.currentUserLoginOn.subscribe({
        next: (userLoginOn: boolean) => {
          this.userLoginOn = userLoginOn;
        }
      })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Cancela la subscripció
    }
  }
}
