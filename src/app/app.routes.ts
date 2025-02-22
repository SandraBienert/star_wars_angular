import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';
import { StarshipsListComponent } from './core/starships-list/starships-list.component';

export const routes: Routes = [

  { path: '', component: StarshipsListComponent },
  { path: 'starship/:id', component: StarshipDetailsComponent },

]
