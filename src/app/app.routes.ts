import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './core/starship-details/starship-details.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { RegisterComponent } from './components/auth/register/register.component';



export const routes: Routes = [

  { path:'', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'starship/:id', component: StarshipDetailsComponent, canActivate: [AuthGuard]},

];
