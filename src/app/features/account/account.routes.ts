import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountAddEditComponent } from './account-add-edit/account-add-edit.component';
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
    component: AccountAddEditComponent,
    canActivate: [authGuard]
  },
  {
    path: 'accounts/update/:id',
    component: AccountAddEditComponent,
    canActivate: [authGuard]
  },
  {
    path: 'accounts/:id',
    component: AccountDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'accounts/close/:id',
    component: AccountCloseComponent,
    canActivate: [authGuard]
  }
];
