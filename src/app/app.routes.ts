import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AuthComponent } from './components/auth/auth.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [

{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
{ path: 'welcome', component: WelcomeComponent, canActivate: [authGuard] },
{ path: 'auth', component: AuthComponent},
{ path: 'home', component: HomeComponent, canActivate: [authGuard]},
{ path: 'starship/:id', component: StarshipDetailsComponent, canActivate: [authGuard] },
{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
