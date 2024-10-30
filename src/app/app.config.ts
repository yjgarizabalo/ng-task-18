import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ "projectId": "ng-task-18-61b33", "appId": "1:449582625876:web:7aa4d03562d4ff247469c1", "storageBucket": "ng-task-18-61b33.appspot.com", "apiKey": "AIzaSyClih3bBWM64RjY6tYiXFESLkCmp8nybyo", "authDomain": "ng-task-18-61b33.firebaseapp.com", "messagingSenderId": "449582625876" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
