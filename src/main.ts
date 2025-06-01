import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

bootstrapApplication(App, { 
  ...appConfig,
  providers: [
    ...(appConfig.providers ?? []),
    provideNativeDateAdapter(),
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
