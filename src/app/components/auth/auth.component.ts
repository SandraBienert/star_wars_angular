import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule }  from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatButtonModule,
            MatMenuModule, ReactiveFormsModule, MatFormField,  MatFormFieldModule, MatMenuModule, MatIconModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AuthComponent implements OnInit {

  emailFormControl: any;

  public authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAutheticated) => {
      if(isAutheticated){
        this.router.navigate(['home']);
      }
    });
  }

  login(){
  this.authService.loginWithRedirect();
  }


  clickEvent($event: MouseEvent) {
  throw new Error('Method not implemented.');
  }


  hide(): boolean {
    // some logic here
    return true; // or false based on your logic
  }



}

