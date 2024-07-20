import { Routes } from '@angular/router';
import { InternalTransactionComponent } from './internal-transaction/internal-transaction.component';
import { ExternalTransactionComponent } from './external-transaction/external-transaction.component';
import { CardTransactionComponent } from './card-transaction/card-transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { authGuard } from '../../core/guards/auth.guard';


export const transactionRoutes: Routes = [
  {
    path: 'transactions/internal/:creditId/:debitId',
    component: InternalTransactionComponent,
    canActivate: [authGuard]
  },
  {
    path: 'transactions/external/:accountId/:beneficiaryId',
    component: ExternalTransactionComponent,
    canActivate: [authGuard]
  },
  {
    path: 'transactions/card/:cardId/:beneficiaryId',
    component: CardTransactionComponent,
    canActivate: [authGuard]
  },
  {
    path: 'transactions',
    component: TransactionListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'transactions/:id',
    component: TransactionDetailComponent,
    canActivate: [authGuard]
  }
];
