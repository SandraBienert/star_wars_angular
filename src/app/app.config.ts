import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `/img/star-wars-spaceship-4wonfi4vokbaueao.webp/?src=${config.src}&width=${config.width}`;
      },
    },
  ]
};
