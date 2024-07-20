import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';


import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { cardRoutes } from './features/card/card.routes';
import { userRoutes } from './features/user/user.routes';
import { transactionRoutes } from './features/transaction/transaction.routes';
import { beneficiaryRoutes } from './features/beneficiary/beneficiary.routes';
import { accountRoutes } from './features/account/account.routes';
import { authRoutes } from './features/auth/auth.routes';
import { mainRoutes } from './app.routes';


const routes: Routes = [
  ...mainRoutes,
  ...authRoutes,
  ...userRoutes,
  ...accountRoutes,
  ...cardRoutes,
  ...transactionRoutes,
  ...beneficiaryRoutes
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(
    withInterceptors([authInterceptor])
  )]
};



