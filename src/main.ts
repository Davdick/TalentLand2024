import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

import 'bootstrap';

 bootstrapApplication(AppComponent, appConfig)
   .catch((err) => console.error(err));

   platformBrowserDynamic().bootstrapModule(AppComponent) // Reemplaza AppModule por el nombre correcto si tienes un módulo principal
    .catch((err) => console.error(err));