import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [

{ path: 'welcome', component: WelcomeComponent},
{ path: 'starship/:id', component: StarshipDetailsComponent},
{ path: 'home', component: HomeComponent},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: '**',redirectTo: 'welcome'}
]
