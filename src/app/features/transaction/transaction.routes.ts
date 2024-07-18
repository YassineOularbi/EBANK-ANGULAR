import { Routes } from '@angular/router';
import { InternalTransactionComponent } from './internal-transaction/internal-transaction.component';
import { ExternalTransactionComponent } from './external-transaction/external-transaction.component';
import { CardTransactionComponent } from './card-transaction/card-transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';


export const transactionRoutes: Routes = [
  {
    path: 'transactions/internal/:creditId/:debitId',
    component: InternalTransactionComponent
  },
  {
    path: 'transactions/external/:accountId/:beneficiaryId',
    component: ExternalTransactionComponent
  },
  {
    path: 'transactions/card/:cardId/:beneficiaryId',
    component: CardTransactionComponent
  },
  {
    path: 'transactions/account/:id',
    component: TransactionListComponent
  },
  {
    path: 'transactions/:id',
    component: TransactionDetailComponent
  }
];
