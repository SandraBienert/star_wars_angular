
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthSupaService } from './../services/auth-supa.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSupaService: AuthSupaService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const user = await this.authSupaService.getUser();
    if (user) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
