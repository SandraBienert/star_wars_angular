import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';

export const routes: Routes = [
  { path: 'starship/:id', component: StarshipDetailsComponent }, // Ruta con parámetro dinámico


]

