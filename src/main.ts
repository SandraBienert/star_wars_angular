import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './app/environment/firebase-auth';
import { provideStorage } from '@angular/fire/storage';
import { getStorage } from 'firebase/storage';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Inicialitza Firebase
    provideAuth(() => getAuth()), // Proveeix el servei Auth
    provideStorage(() => getStorage()),
  ]
 })

