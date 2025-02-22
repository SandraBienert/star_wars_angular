import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'starship/:id', component: StarshipDetailsComponent },

]
