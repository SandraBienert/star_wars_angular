import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from '../../core/starships-list/starships-list.component';
import { UserInterface } from '../../interfaces/user-interface';
import { AuthSupaService } from '../../services/auth-supa.service';


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


    constructor(private authSupaService: AuthSupaService){}

    ngOnInit(): void {
      this.authSupaService.currentUserLoginOn.subscribe({
        next: (userLoginOn: boolean) => {
          this.userLoginOn = userLoginOn;
        }
      });
      this.authSupaService.currentUserData.subscribe({
        next:(userData: UserInterface | undefined) => {
          this.userData = userData;
        }
      })
    }

    ngOnDestroy(): void {
      this.authSupaService.currentUserData.unsubscribe();
      this.authSupaService.currentUserLoginOn.unsubscribe();
    }
}
