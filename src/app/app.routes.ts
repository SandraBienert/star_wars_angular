import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

  { path: '', component: AppComponent},
  { path: 'home/starship/:id', component: StarshipDetailsComponent},
  { path: '**', redirectTo: '' }
]
