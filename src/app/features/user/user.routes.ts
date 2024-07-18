import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


export const userRoutes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/update/:id',
    component: UserUpdateComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  }
];
