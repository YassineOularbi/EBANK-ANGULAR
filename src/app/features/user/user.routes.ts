 import { Routes } from '@angular/router';
 import { UserListComponent } from './user-list/user-list.component';
 import { UserUpdateComponent } from './user-update/user-update.component';
 import { UserDetailComponent } from './user-detail/user-detail.component';
 import { authGuard } from '../../core/guards/auth.guard';


 export const userRoutes: Routes = [
   {
     path: 'users',
     component: UserListComponent,
     canActivate: [authGuard]
   },
   {
     path: 'users/update/:id',
     component: UserUpdateComponent,
     canActivate: [authGuard]
   },
   {
     path: 'users/:id',
     component: UserDetailComponent,
     canActivate: [authGuard]
   }
 ];
