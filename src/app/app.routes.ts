import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [

  { path: '', component: WelcomeComponent},
  { path: 'starship/:id', component: StarshipDetailsComponent },
  { path: '**', component: WelcomeComponent}

]
