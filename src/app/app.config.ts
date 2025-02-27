import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-4el2ziu22jqghsfk.us.auth0.com',
      clientId: 'X2vKvPWePcSNo6PrsjMNbb0XY47pmubf',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
};


