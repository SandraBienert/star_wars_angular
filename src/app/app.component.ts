import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '@auth0/auth0-angular';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, RouterOutlet, MatMenuModule, MatFormFieldModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  private authservice = inject(AuthService);
  private destroy$ = new Subject<void>();
  isAuthenticated:boolean = false;



ngOnInit(): void{
  this.authservice.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe(isAuthenticated =>{
    this.isAuthenticated = isAuthenticated;
  });
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
}

