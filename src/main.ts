import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-4el2ziu22jqghsfk.us.auth0.com',
      clientId: 'X2vKvPWePcSNo6PrsjMNbb0XY47pmubf',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideRouter(routes),
  ]
 })

