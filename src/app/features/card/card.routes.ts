import { Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardAddComponent } from './card-add/card-add.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardBlockComponent } from './card-block/card-block.component';
import { CardStatusComponent } from './card-status/card-status.component';
import { authGuard } from '../../core/guards/auth.guard';


export const cardRoutes: Routes = [
  {
    path: 'cards',
    component: CardListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cards/add',
    component: CardAddComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cards/:id',
    component: CardDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cards/:id/block',
    component: CardBlockComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cards/:id/activate-deactivate',
    component: CardStatusComponent,
    canActivate: [authGuard]
  }
];
