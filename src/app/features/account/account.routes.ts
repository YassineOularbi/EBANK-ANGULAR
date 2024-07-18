import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountCloseComponent } from './account-close/account-close.component';
import { authGuard } from '../../core/guards/auth.guard';


export const accountRoutes: Routes = [
  {
    path: 'accounts',
    component: AccountListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'accounts/add',
    component: AccountAddComponent,
    canActivate: [authGuard]
  },
  {
    path: 'accounts/update/:id',
    component: AccountUpdateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'accounts/:id',
    component: AccountDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'accounts/:id/close',
    component: AccountCloseComponent,
    canActivate: [authGuard]
  }
];
