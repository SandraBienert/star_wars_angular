import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from '../../core/starships-list/starships-list.component';
import { LoginService } from '../../services/auth/login.service';
import { UserInterface } from '../../interfaces/user-interface';


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

    constructor(private loginService: LoginService){}

    ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe({
        next: (userLoginOn) => {
          this.userLoginOn = userLoginOn;
        }
      });
      this.loginService.currentUserData.subscribe({
        next:(userData) => {
          this.userData = userData;
        }
      })
    }

    ngOnDestroy(): void {
      this.loginService.currentUserData.unsubscribe();
      this.loginService.currentUserLoginOn.unsubscribe();
    }
}
