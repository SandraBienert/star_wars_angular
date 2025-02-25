import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


export const routes: Routes = [

{ path: 'welcome', component: WelcomeComponent},
{ path: 'starship/:id', component: StarshipDetailsComponent},
{ path: 'home', component: HomeComponent},
{ path: '**',redirectTo: 'welcome'}
]
