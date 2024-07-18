import { Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardAddComponent } from './card-add/card-add.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardBlockComponent } from './card-block/card-block.component';
import { CardStatusComponent } from './card-status/card-status.component';


export const cardRoutes: Routes = [
  {
    path: 'cards',
    component: CardListComponent
  },
  {
    path: 'cards/add',
    component: CardAddComponent
  },
  {
    path: 'cards/:id',
    component: CardDetailComponent
  },
  {
    path: 'cards/:id/block',
    component: CardBlockComponent
  },
  {
    path: 'cards/:id/activate-deactivate',
    component: CardStatusComponent
  }
];
