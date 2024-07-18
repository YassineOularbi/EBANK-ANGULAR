import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountCloseComponent } from './account-close/account-close.component';


export const accountRoutes: Routes = [
  {
    path: 'accounts',
    component: AccountListComponent
  },
  {
    path: 'accounts/add',
    component: AccountAddComponent
  },
  {
    path: 'accounts/update/:id',
    component: AccountUpdateComponent
  },
  {
    path: 'accounts/:id',
    component: AccountDetailComponent
  },
  {
    path: 'accounts/:id/close',
    component: AccountCloseComponent
  }
];
