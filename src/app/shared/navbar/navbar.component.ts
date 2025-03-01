import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { LoginService } from '../../services/auth/login.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatMenuModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

userLoginOn: boolean = false; //para que aparezca o no inicio o cerrar sesion

constructor(private LoginService: LoginService){}

  ngOnInit(): void {
    this.LoginService.currentUserLoginOn.subscribe({
        next: (userLoginOn) => {
          this.userLoginOn = userLoginOn;
        }
      })
  }

  ngOnDestroy(): void {
    this.LoginService.currentUserLoginOn.unsubscribe();
  }
}
