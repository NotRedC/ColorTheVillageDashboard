import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideNativeDateAdapter } from '@angular/material/core';

bootstrapApplication(App, { 
  ...appConfig,
  providers: [
    ...(appConfig.providers ?? []),
    provideNativeDateAdapter()
  ]
})
  .catch((err) => console.error(err));
