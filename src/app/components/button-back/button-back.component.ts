import { Component } from '@angular/core';
import { Location } from '@angular/common'; // Importa el servei Location
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-back',
  imports: [],
  templateUrl: './button-back.component.html',
  styleUrl: './button-back.component.css'
})
export class ButtonBackComponent {
  constructor(private location: Location, private router: Router) {} // Injecta el servei Location

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      console.log('No hi ha pàgines anteriors en l\'historial.');
      // Pots redirigir a una pàgina per defecte si no hi ha històric
      this.router.navigate(['/home']);
    }
  }
}
