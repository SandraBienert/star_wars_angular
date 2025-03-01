import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthSupaService } from '../../services/auth-supa.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

userLoginOn: boolean = false; //para que aparezca o no inicio o cerrar sesion

constructor(private authSupaService: AuthSupaService, private router: Router){}

  ngOnInit(): void {
    this.authSupaService.currentUserLoginOn.subscribe({
        next: (userLoginOn: boolean) => {
          this.userLoginOn = userLoginOn;
        }
      })
  }

  ngOnDestroy(): void {
    this.authSupaService.currentUserLoginOn.unsubscribe();
  }
}
