import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './components/auth/login/login.component';



export const routes: Routes = [

{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
{ path: 'welcome', component: WelcomeComponent},
{ path: 'auth', component: LoginComponent},
{ path: 'home', component: HomeComponent},
{ path: 'starship/:id', component: StarshipDetailsComponent},
{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
